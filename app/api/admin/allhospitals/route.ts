import { connect } from "@/config/dbConfig";
import Hospital from "@/models/hospitalModal";
import { NextResponse } from "next/server";


connect();

//location based fetching...
export async function GET(){
    try {
        const allhospitals = await Hospital.find();
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