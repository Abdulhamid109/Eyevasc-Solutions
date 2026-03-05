import { connect } from "@/config/dbConfig";
import Hospital from "@/models/hospitalModal";
import { NextRequest, NextResponse } from "next/server";


connect();


export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const singleHospital = await Hospital.findById(id);

        return NextResponse.json(
            { success: true, hospital: singleHospital },
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
