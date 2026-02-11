import { connect } from "@/config/dbConfig";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";


connect();

interface Data{
    uid:string;
    email:string
}

export async function getTokenData(request:NextRequest){
    try {
        const token = await request.cookies.get('token')?.value;
        const payloadData = jwt.verify(token!,process.env.SECRET_KEY!,) as Data;
        return payloadData.uid;

    } catch (error) {
        console.log("Internal Server error =>"+JSON.stringify(error));
        return NextResponse.json(
            {error:"Internal Server error =>"+JSON.stringify(error)},
            {status:500}
        )
    }
}