import { connect } from "@/config/dbConfig";
import user from "@/models/userModal";
import { NextResponse } from "next/server";


connect();

export async function GET(){
    try {
        const allusers = await user.find().sort({createdAt:-1});
        console.log(allusers);
        return NextResponse.json(
            {success:true,message:"Successfully fetched all the users",users:allusers},
            {status:200}

        )
    } catch (error) {
        console.log("Internal server error"+error)
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}