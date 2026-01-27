import { connect } from "@/config/dbConfig";
import user from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";



connect();

export async function DELETE(request:NextRequest){
    try {
        console.log("Finally got into it...");
        const {searchParams} = new URL(request.url);
        const id = searchParams.get("id");
        if(!id){
            console.log("ID not found!!!");
            return NextResponse.json(
                {error:"ID not found!!"},
                {status:404}
            )
        }
        console.log("ID to be deleted"+id);
        const deleteUser = await user.findByIdAndDelete(id);
        console.log("Deleted user"+deleteUser);
        if(!deleteUser){
            console.log("User not deleted");
            return NextResponse.json(
                {error:"Failed to delete the user"},
                {status:401}
            )
        }
        return NextResponse.json(
            {
                success:true,
                message:"Successfully deleted the user",
                user:deleteUser
            }
        )
    } catch (error) {
        console.log("Internla Server error"+error);
        return NextResponse.json(
            {error:"INternal Server error"+error},
            {status:500}
        )
    }
}