import { connect } from "@/config/dbConfig";
import Blog from "@/models/blogModal";
import { NextRequest, NextResponse } from "next/server";


connect();


export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const singleBlog = await Blog.findById(id);

        return NextResponse.json(
            { success: true, blog: singleBlog },
            { status: 200 }
        );
    } catch (error) {
        console.log("Server error =>", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
