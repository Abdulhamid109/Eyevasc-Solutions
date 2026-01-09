import { connect } from "@/config/dbConfig";
import user from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";



connect();

export async function POST(request:NextRequest){
    try {
        const {name,city,phone,treatment} = await request.json();
        console.log(name,city,phone,treatment)
        if(!name || !city || !phone || !treatment){
            console.log("Please fill the forms");
            return NextResponse.json({
                error:"Form incomplete"
            },{status:404})
        }
        const existingUser = await user.findOne({phoneno:phone,treatment:treatment});
        if(existingUser){
            console.log("A user cannot enroll for the same treatment twice");
            return NextResponse.json(
                {error:"Already enrolled"},
                {status:401}
            )
        }
        const newUser = new user({
            name,
            phoneno:phone,
            treatment,
            city
        });

        const savedUser = await newUser.save();
        return NextResponse.json(
            {success:true,message:"Successfully booked",user:savedUser},
            {status:200}
        )
        
    } catch (error) {
        console.log("Internal Server error"+error);
        return NextResponse.json(
            {error:"INternal Server error"+error},
            {status:500}
        )
    }
}