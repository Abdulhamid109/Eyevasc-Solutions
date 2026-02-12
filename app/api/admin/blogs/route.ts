import { connect } from "@/config/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import Blog from "@/models/blogModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request:NextRequest){
    try {
        const cuid = getTokenData(request);
        if(!cuid){
            console.log("Unauthorized user");
            return NextResponse.json(
                {error:"Unauthorized user"},
                {status:401}
            )
        }

        const allblogs = await Blog.find();
        return NextResponse.json(
            {success:true,blog:allblogs},
            {status:200}
        )

        
    } catch (error) {
        return NextResponse.json(
            {error:"Internal Server errror"+JSON.stringify(error)},
            {status:500}
        )
    }
}