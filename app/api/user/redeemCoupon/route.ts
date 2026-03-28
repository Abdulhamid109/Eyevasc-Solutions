import CouponEmailFormat from "@/components/CouponEmailformat";
import { connect } from "@/config/dbConfig";
import resend from "@/lib/resend";
import coupon from "@/models/couponModal";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request: NextRequest) {
    try {
        const { CouponString, UserName, UserLoction, UserPhone, InterestedInSurgery } = await request.json();
        console.log(CouponString, UserName, UserLoction, UserPhone, InterestedInSurgery)
        if (!CouponString || !UserName || !UserLoction || !UserPhone || !InterestedInSurgery) {
            return NextResponse.json(
                { error: "Fields not founnd" },
                { status: 404 }
            )
        }
        //invalid coupon check
        const couponPresency = await coupon.findOne({ CouponString });
        if (!couponPresency) {
            console.log("not found")
            return NextResponse.json(
                { error: "Invalid coupon .. not found" },
                { status: 404 }
            )
        }
        if (couponPresency.isClaimed) {
            console.log("claimwd")
            return NextResponse.json(
                { error: "Coupon Already claimed!" },
                {status:401}
            )
        }

        const surgerystatus = InterestedInSurgery=="yes"?true:false;

        //if not claim go for claming/redeeming purpose
        const updateUserDetails = await coupon.findOneAndUpdate({ CouponString }, {
            UserName,
            UserLoction,
            UserPhone,
            InterestedInSurgery:surgerystatus,
            isClaimed: true
        });

        console.log("Updated Coupon User => " + updateUserDetails);
        //send an email notification to the info@eyehealthcure -->about the details of the redeemed user

        const { data, error } = await resend.emails.send({
            from: "Eyehealthcure <coupon@eyehealthcure.com>",
            to: "info@eyehealthcure.com",
            subject: "Coupon Redeemed Patient",
            react: CouponEmailFormat({
                location: UserLoction,
                name: UserName,
                phoneno: UserPhone,
                status: InterestedInSurgery
            })
        })

        if (error) {
            console.log("Something went wrong while sending the email" + JSON.stringify(error));
            return NextResponse.json(
                { error: "Something went wrong!!" + error },
                { status: 404 }
            )
        }
        console.log("Data from Email => " + data)
        return NextResponse.json(
            { success: true, message: "Successfully Redeemed your coupon" },
            { status: 200 }
        )
    } catch (error) {
        console.log("err=>"+error)
        return NextResponse.json(
            { error: "Internal Server error" + error },
            { status: 500 }
        )
    }
}