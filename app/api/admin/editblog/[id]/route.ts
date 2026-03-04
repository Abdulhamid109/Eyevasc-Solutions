import { connect } from "@/config/dbConfig";
import Blog from "@/models/blogModal";
import { NextRequest, NextResponse } from "next/server";


connect();


export async function PUT(request:NextRequest,context:{params:Promise<{id:string}>}){
    try {
        const {id} = await context.params; 
        if(!id){
            console.log("ID not found!!");
            return NextResponse.json(
                {error:"ID not found!!"},
                {status:404}
            )
        }
        const {blogTitle,blogDescription} = await request.json();

        const date = Date.now();

        const updatedBlog = await Blog.findByIdAndUpdate(id,
            {blogTitle,blogDescription,updatedAt:date}
        )

        if(!updatedBlog){
            console.log("Failed to update!!"+updatedBlog);
            return NextResponse.json(
                {error:"Failed!!"},
                {status:404}
            )
        }
        return NextResponse.json(
            {success:true,message:"successfully updated the blog!",blog:updatedBlog},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}