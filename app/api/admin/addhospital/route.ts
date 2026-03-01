import { connect } from "@/config/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import ImageKitClient from "@/lib/imagekitClient";
import Hospital from "@/models/hospitalModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const aid = await getTokenData(request);
        if(!aid){
            return NextResponse.json(
                {error:"Unauthorized Admin!!"},
                {status:401}
            )
        }

        const formdata = await request.formData();
        const hospitalName = formdata.get("hospitalName") as string;
        const hospitalAddress = formdata.get("hospitalAddress") as string;
        const hospitalPicBlob = formdata.get("hospitalPicBlob") as File;
        const fileName = formdata.get("fileName") as string;
        const location = formdata.get("location") as string;
        const link = formdata.get("link") as string;
        


        const hosarraybuffer = await hospitalPicBlob.arrayBuffer();
        const hosbuffer = Buffer.from(hosarraybuffer);


        const response =await  ImageKitClient.upload(
            {
                file:hosbuffer,
                fileName:fileName,
                folder:"/eyehealthcure/hositalpics"
            }
        )


        const newHospital = new Hospital({
            adminID:aid,
            hospitalName,
            hospitalAddress,
            hospitalPic:response.url,
            location:location.toLowerCase(),
            link
        });

        await newHospital.save();

        return NextResponse.json(
            {success:true},
            {status:200}
        )

    } catch (error) {
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}