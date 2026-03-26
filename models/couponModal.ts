import mongoose from "mongoose";


const CouponModal = new mongoose.Schema({
    adminId:{
        type:String
    },
    CouponString:{
        type:String
    },
    isClaimed:{
        type:Boolean
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    UserName:{
        type:String
    },
    UserLoction:{
        type:String
    },
    UserPhone:{
        type:String
    },
    InterestedInSurgery:{
        type:Boolean
    }
});

const coupon = mongoose.models.coupon || mongoose.model('coupon',CouponModal);
export default coupon;