import { connect } from "@/config/dbConfig";
import Hospital from "@/models/hospitalModal";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function DELETE(request:NextRequest){
    try {
        const {searchParams} = new URL(request.url);
        const hospitalid = searchParams.get('hid');
        if(!hospitalid){
            console.log("HID not Found!!");
            return NextResponse.json(
                {error:"HID not found!!"},
                {status:404}
            )
        }

        const deletedHospital = await Hospital.findByIdAndDelete(hospitalid);
        console.log("Deleted HID"+deletedHospital);
        return NextResponse.json(
            {success:true,message:"Successfully deleted the hospital"},
            {status:200}
        )

    } catch (error) {
        console.log("Error=>"+JSON.stringify(error));
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}