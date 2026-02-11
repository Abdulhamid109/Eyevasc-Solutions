import mongoose from "mongoose";

const BlogModal = new mongoose.Schema({
    adminId:{
        type:String
    },
    blogTitle:{
        type:String,
    },
    blogPictureLink:{
        type:String,
    },
    blogDescription:{
        type:String
    },
    //formated time&date
    time:{
        type:String
    },
    date:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Blog = mongoose.models.blog || mongoose.model("blog",BlogModal);
export default Blog;
