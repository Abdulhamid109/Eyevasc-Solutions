import { NextResponse } from "next/server";


export async function GET() {
    try {

        const response = NextResponse.json(
            { success: true, message: "Successfully logged out!" },
            { status: 200 }
        );

        response.cookies.set("token", "");
        return response;
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal Server error " + error },
            { status: 500 }
        )
    }
}