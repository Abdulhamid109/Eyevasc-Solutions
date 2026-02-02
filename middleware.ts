import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    try {
        const path = request.nextUrl.pathname;
        const isPublicPath = path === "/" || path === "/admin/login";
        const token = request.cookies.get("token")?.value || "";

        if (isPublicPath && token) {
            return NextResponse.redirect(new URL("/admin/homepage", request.nextUrl));
        }
        if (!isPublicPath && !token) {
            return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
        }

        return NextResponse.next();
    } catch (error) {
        console.log("Internal Server error => " + error);
        return NextResponse.json(
            { error: "Internal Server error = " + error },
            { status: 500 }
        );
    }
}

export const config = {
    matcher: [
        "/",
        "/admin/login",
        "/admin/homepage"
    ]
};
