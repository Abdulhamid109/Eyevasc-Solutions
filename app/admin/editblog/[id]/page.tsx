"use client"
import AdminNavbar from '@/components/AdminNavbar';
import RichEditor from '@/components/Editor';
import Footer from '@/components/Footer';
import axios, { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

interface Data{
    blogTitle:string;
    blogDescription:string;

}
const EditPage = () => {
    const {id} = useParams();
    const [prevData,setPrevData] = useState<Data | null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    //fetch the blog details based on the 
    const fetchBlogDetails =async()=>{
        try {
            const response = await axios.get(`/api/admin/blogs/${id}`);
            if(response.status===200){
                setPrevData(response.data.blog);
                console.log("Blog =>"+JSON.stringify(response.data.blog))
            }
        } catch (error) {
            console.log("Err"+error);
            if(error instanceof AxiosError){
                toast.error(error.response?.data.error || "Something went wrong!")
            }
        }
    }



    useEffect(()=>{
        const displayData = async()=>{
            await fetchBlogDetails();
        }
        displayData();
    },[])

    const router = useRouter();

    //update the new blog details
    const editBlogDetails = async(e:React.FormEvent)=>{
        e.preventDefault();
        try {
            console.log("D1=>"+prevData?.blogTitle);
            console.log("D2=>"+prevData?.blogDescription);

            const response = await axios.put(`/api/admin/editblog/${id}`,prevData);
            if(response.status===200){
                toast.success("Successfully updated the blog");
                router.push("/admin/blogs")
            }


        } catch (error) {
            console.log("Failed to perform the functionality => "+error);
            if(error instanceof AxiosError){
                toast.error(error.response?.data.error || "something went wrong!");
            }
        }
    }
  return (
    <div className="min-h-screen flex flex-col">
      
      <AdminNavbar/>
      
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Edit Blog Post</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form onSubmit={editBlogDetails} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  id="title"
                  value={prevData?.blogTitle}
                  onChange={(e)=>setPrevData({...prevData!,blogTitle:e.target.value})}
                  type="text"
                  placeholder="Enter an engaging title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                  required
                />
              </div>


              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <RichEditor
                description={prevData?.blogDescription ?? ""}
                onChange={(richText)=>setPrevData({...prevData!,blogDescription:richText})}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200 shadow-md"
                >
                  {loading?<>loading....</>:<>Edit Post</>}
                </button>

              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default EditPage;