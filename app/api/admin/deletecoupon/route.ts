import { connect } from "@/config/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import coupon from "@/models/couponModal";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function DELETE(request: NextRequest) {
    try {
        const adminId = getTokenData(request);
        if (!adminId) {
            return NextResponse.json(
                { error: "Un-authrozied admin" },
                { status: 401 }
            )
        }
        const {searchParams} = new URL(request.url);
        const coupID = searchParams.get('id');
        await coupon.findByIdAndDelete(coupID);

        return NextResponse.json(
            {success:true},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server errror" + error },
            { status: 500 }
        )
    }
}