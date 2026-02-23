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
        type:String //need to make it object after using tip-tap editor
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
    },
    updatedAt:{
        type:Date
    }
});

const Blog = mongoose.models.blog || mongoose.model("blog",BlogModal);
export default Blog;
