import { connect } from "@/config/dbConfig";
import { getTokenData } from "@/helpers/getTokenData";
import coupon from "@/models/couponModal";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function GET(request: NextRequest) {
    try {
        const adminId = getTokenData(request);
        if (!adminId) {
            return NextResponse.json(
                { error: "Un-authrozied admin" },
                { status: 401 }
            )
        }

        const AllCoupons = await coupon.find();
        console.log("coupons => "+AllCoupons);
        return NextResponse.json(
            {success:true,coupons:AllCoupons},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server errror" + error },
            { status: 500 }
        )
    }
}