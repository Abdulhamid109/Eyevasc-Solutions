import { connect } from "@/config/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import Hospital from "@/models/hospitalModal";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function PUT(request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const token = await getTokenData(request);
        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized Admin!" },
                { status: 401 }
            )
        }

        const { id } = await context.params;
        if (!id) {
            console.log("ID not found!!");
            return NextResponse.json(
                { error: "ID not found!!" },
                { status: 404 }
            )
        }

        const {hospitalName,hospitalAddress,hospitalPic,location,link} = await request.json();
        console.log("Link"+link)

        const now = new Date();

        const updatedHospital = await Hospital.findByIdAndUpdate(id,{
            hospitalName,
            hospitalAddress,
            hospitalPic,
            location,
            link,
            updatedAt:now
        });

        if(!updatedHospital){
            console.log("Failed to update!!"+updatedHospital);
            return NextResponse.json(
                {error:"Failed!!"},
                {status:404}
            )
        }
        return NextResponse.json(
            {success:true,message:"successfully updated the hospital!",hospital:updatedHospital},
            {status:200}
        )

    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server error" + error },
            { status: 500 }
        )
    }
}