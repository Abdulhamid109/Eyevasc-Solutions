import { connect } from "@/config/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import ImageKitClient from "@/lib/imagekitClient";
import { NextRequest, NextResponse } from "next/server";

connect();
//this api would be used for editing the hospital photo
export async function POST(request: NextRequest) {
    try {
        const token = await getTokenData(request);
        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized Admin!" },
                { status: 401 }
            )
        }

        const formdata = await request.formData();
        const File = formdata.get("file") as File;
        const FileName = formdata.get("fileName") as string;


        if(!File || !FileName){
            return NextResponse.json(
                {error:"Failed to upload ,Something went wrong!"},
                {status:500}
            )
        }

        const arraybuffer = await File.arrayBuffer();
        const buffer = Buffer.from(arraybuffer);

        const response = await ImageKitClient.upload(
            {
                file:buffer,
                fileName:FileName,
                folder:'/eyehealthcure/editedHospitalImages'
            }
        )

        console.log("New Link=>"+response.url);

        return NextResponse.json(
            {success:true,url:response.url},
            {status:200}
        )

    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server error" + error },
            { status: 500 }
        )
    }
}