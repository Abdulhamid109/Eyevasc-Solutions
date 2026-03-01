import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
    adminID:{
        type:String
    },
    hospitalName:{
        type:String
    },
    hospitalAddress:{
        type:String
    },
    hospitalPic:{
        type:String
    },
    location:{
        type:String
    },
    link:{
        type:String
    },
    //hospital description section can be add later
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Hospital = mongoose.models.hospital || mongoose.model('hospital',HospitalSchema);
export default Hospital;