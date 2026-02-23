import { connect } from "@/config/dbConfig";
import Blog from "@/models/blogModal";
import { NextRequest, NextResponse } from "next/server";


connect();


export async function DELETE(request:NextRequest){
    try {
        const {searchParams} = new URL(request.url);
        const bid = searchParams.get("blogid");
        if(!bid){
            console.log("Blog Id not found!!");
            return NextResponse.json(
                {error:"Blog Id not found!!"},
                {status:404}
            )
        }
        await Blog.findByIdAndDelete(bid);
        return NextResponse.json(
            {success:true,message:"Successfully deleted!"},
            {status:200}
        )

    } catch (error) {
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}