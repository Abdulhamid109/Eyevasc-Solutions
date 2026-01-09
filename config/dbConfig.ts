import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on("error",()=>{
            console.log("Failed to perform the functionality..i.e db not connected")
            process.exit(1)
        });
        connection.on("connection",()=>{
            console.log("Successfully connected to DB!!");
            
        })

    } catch (error) {
        console.log("Failed to connect to DB.. Internal Server error"+error);
        return NextResponse.json(
            {
                error:"Internal Server error",
            },{status:500}
        )
    }
}