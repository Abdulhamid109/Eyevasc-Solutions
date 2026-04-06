import mongoose from "mongoose";

const userModal = new mongoose.Schema({
    name:{
        type:String,
    },
    phoneno:{
        type:String,
    },
    treatment:{
         type:String,
    },
    city:{
         type:String,
    },
    hospitalName:{
        type:String,
    },
    hospitalAddress:{
        type:String,
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
