import mongoose from "mongoose";

const userModal = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true,
        unique:true
    },
    treatment:{
         type:String,
        required:true
    },
    city:{
         type:String,
        required:true
    }
});

const user =  mongoose.models.users || mongoose.model("users",userModal);
export default user;
