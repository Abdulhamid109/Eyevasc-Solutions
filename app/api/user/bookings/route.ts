import { connect } from "@/config/dbConfig";
import user from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";



connect();

export async function POST(request:NextRequest){
    try {
        const {name,cityset,phone,treatment} = await request.json();
        console.log(name,cityset,phone,treatment)
        if(!name || !cityset || !phone || !treatment){
            console.log("Please fill the forms");
            return NextResponse.json({
                error:"Form incomplete"
            },{status:404})
        }
        const existingUser = await user.findOne({phoneno:phone});
        if(existingUser){
            const alreadyItemPresent = await user.findOne({treatment:treatment});
            if(alreadyItemPresent){
                console.log("A user cannot enroll for the same treatment twice");
            return NextResponse.json(
                {error:"Already enrolled"},
                {status:401}
            )
            }
            
        }
        const now = new Date();
        console.log(now.toLocaleDateString("en-IN"));
        console.log("Time=> "+now.toLocaleTimeString("en-IN"));
        const newUser = new user({
            name,
            phoneno:phone,
            treatment,
            city:cityset,
            date:now.toLocaleDateString("en-IN"),
            Time:now.toLocaleTimeString("en-IN")
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