import { connect } from "@/config/dbConfig";
import user from "@/models/userModal";
import { NextResponse } from "next/server";



connect();

export async function DELETE({params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params;
        console.log("ID to be deleted"+id);
        const deleteUser = await user.findOneAndDelete({_id:id});
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