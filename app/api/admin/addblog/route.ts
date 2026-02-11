import { connect } from "@/config/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import ImageKitClient from "@/lib/imagekitClient";
import Blog from "@/models/blogModal";
import { NextRequest, NextResponse } from "next/server";


connect();


export async function POST(request:NextRequest){
    try{
        const formdata = await request.formData();
        const blogTitle = formdata.get("title");
        const imageBlob = formdata.get("image") as File;
        const imageName = formdata.get("filename") as string;
        const blogDescription = formdata.get("description");

        const cuid = await getTokenData(request);
        console.log(blogTitle,imageName,blogDescription);

        if(!cuid){
            console.log("User unauthorized!!");
            return NextResponse.json(
                {error:"Un-authorized error"},
                {status:401}
            )
        }
        console.log("Current -UID => "+cuid);

        const arraybuffer = await imageBlob.arrayBuffer();
        const buffer = Buffer.from(arraybuffer);

        const response = await ImageKitClient.upload({
            file:buffer,
            fileName:imageName,
            folder:"/eyehealthcure/blogpics"
        });
        const now = new Date();
        const newBlog = new Blog({
            adminId:cuid,
            blogTitle,
            blogPictureLink:response.url,
            blogDescription,
            time: now.toLocaleTimeString("en-IN",{
                timeZone:"Asia/Kolkata"
            }),
            date:now.toLocaleDateString("en-IN")
        });

        const savedBlog = await newBlog.save();

        console.log("Blog=>"+savedBlog);

        return NextResponse.json(
            {success:true,message:"Successfully published the blog",blog:savedBlog},
            {status:200}
        )

    }catch(err){
        console.log("Server error => "+JSON.stringify(err));
        return NextResponse.json(
            {error:"Internal Server error"+err},
            {status:500}

        )
    }
}