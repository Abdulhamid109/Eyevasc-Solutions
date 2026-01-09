import admin from "@/models/adminModal";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function POST(request:NextRequest){
    try {
        const {email,password} = await request.json();
        if(!email || !password){
            return NextResponse.json(
                {error:"field are blank"},
                {status:404}
            )
        }
        const db = await admin.findOne({email});
        if(!db){
            return NextResponse.json(
                {error:"Account not found"},
                {status:404}
            )
        }else{
            const result = await bcrypt.compare(password,db["password"]);
            if(!result){
                console.log("Wrong Credentials");
                return NextResponse.json(
                    {error:"Wrong Credentials"},
                    {status:401}
                )
            }

            const payloadData = {
                uid:db._id,
                email:email
            }

            const token = jwt.sign(payloadData,process.env.SECRET_KEY!,{expiresIn:'1d'});
            const response = NextResponse.json(
                {success:true,message:"Successfully logged in!!",user:db},
                {status:200}
            );
            response.cookies.set("token",token,{httpOnly:true});
            return response;
        }

    } catch (error) {
        console.log("Internal Server error"+error)
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}