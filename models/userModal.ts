import mongoose from "mongoose";

const userModal = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true,
    },
    treatment:{
         type:String,
        required:true
    },
    city:{
         type:String,
        required:true
    },
    date:{
        type:String,
    },
    Time:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const user =  mongoose.models.users || mongoose.model("users",userModal);
export default user;
