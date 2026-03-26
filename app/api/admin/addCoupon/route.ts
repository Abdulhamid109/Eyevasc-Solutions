import { connect } from "@/config/dbConfig";
import { CouponGeneration } from "@/helpers/CouponGeneration";
import { getTokenData } from "@/helpers/getTokenData";
import coupon from "@/models/couponModal";
import { NextRequest, NextResponse } from "next/server";


connect();

interface CouponData{
    CouponString:string;

}

export async function POST(request:NextRequest){
    try {
        const adminId = getTokenData(request);
        if(!adminId){
            return NextResponse.json(
                {error:"Un-authrozied admin"},
                {status:401}
            )
        }

        const Coupon = CouponGeneration();
        const couponAviablibilty = await coupon.find({CouponString:Coupon});
        couponAviablibilty.map((data:CouponData)=>{
            if(`EHC-${Coupon}`=== data.CouponString){
                console.log("Error Occured [same coupon generated]");
                return NextResponse.json(
                    {error:"Invalid Coupon Generated !try again"},
                    {status:404}
                )
            }
        });
        const newCoupon = new coupon({
            adminId,
            CouponString:`EHC-${Coupon}`,
        });

        const savedCoupon = await newCoupon.save();
        return NextResponse.json(
            {success:true,coupon:savedCoupon},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            {error:"Internal server errror"+error},
            {status:500}
        )
    }
} 