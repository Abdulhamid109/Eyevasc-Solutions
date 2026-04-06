import EmailFormat from "@/components/emailFormat";
import { connect } from "@/config/dbConfig";
import resend from "@/lib/resend";
import user from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request: NextRequest) {
    try {
        const { name, phoneno } = await request.json();
        if (!phoneno) {
            return NextResponse.json(
                { error: "Kindly enter your phone no" },
                { status: 404 }
            )
        }
        const isbooked = await user.findOne({ phoneno });
        if (isbooked) {
            return NextResponse.json(
                { error: "Already booked with this phone number" },
                { status: 401 }
            )
        }
        const now = new Date();
        console.log(now.toLocaleDateString("en-IN"));
        console.log("Time=> " + now.toLocaleTimeString("en-IN"));
        const newUser = new user({
            name,
            phoneno,
            date: now.toLocaleDateString("en-IN"),
            Time: now.toLocaleTimeString("en-IN", { timeZone: "Asia/Calcutta" })
        });

        const savedUser = await newUser.save();

        const { data, error } = await resend.emails.send({
            from: "Eyehealthcure <info@eyehealthcure.com>",
            to: "info@eyehealthcure.com",
            subject: "Patient Information",
            react: EmailFormat({ name: name, treatment: "Booked for consultation", date: savedUser.date, phoneno: savedUser.phoneno, time: savedUser.Time })
        });
        if (error) {
            console.log("Something went wrong while sending the email" + JSON.stringify(error));
            return NextResponse.json(
                { error: "Something went wrong!!" + error },
                { status: 404 }
            )
        }
        console.log("Data from Email => " + data)
        return NextResponse.json(
            { success: true, message: "Successfully booked", user: savedUser },
            { status: 200 }
        )
    } catch (error) {
        console.log("Error=>" + error);
        return NextResponse.json(
            { error: "Internal Server error" + error },
            { status: 500 }
        )
    }
}