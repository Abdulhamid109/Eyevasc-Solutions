import { connect } from "@/config/dbConfig";
import Hospital from "@/models/hospitalModal";
import { NextRequest, NextResponse } from "next/server";


connect();

//location based fetching...
export async function GET(request:NextRequest){
    try {
        const {searchParams} = new URL(request.url);
        const location = searchParams.get("city");
        console.log("Location => "+location)
        

        const allhospitals = await Hospital.find({location});
        console.log(allhospitals)
        return NextResponse.json(
            {success:true,hospitals:allhospitals},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
                    {error:"Internal Server error"+error},
                    {status:500}
                )
    }
}