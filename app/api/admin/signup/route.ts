import { connect } from "@/config/dbConfig";
import admin from "@/models/adminModal";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request:NextRequest){
    try {
        const {name,email,password} = await request.json();
        if(!name || !email || !password){
            console.log("Feilds are empty");
            return NextResponse.json(
                {error:"Fields are empty"},
                {status:404}
            )
        }
        const ispresent = await admin.findOne({email});
        if(ispresent){
            console.log("Account already present");
            return NextResponse.json(
                {error:"Account already present"},
                {status:404}
            )
        }
        
        const newadmin = new admin({
            name,
            email,
            password
        });
        const savedAdmin = await newadmin.save();

        return NextResponse.json(
            {success:true,message:"successfully account created",admin:savedAdmin},
            {status:200}
        );
    } catch (error) {
        return NextResponse.json(
            {error:"INternal Server error"+error},
            {status:500}
        )
    }
}