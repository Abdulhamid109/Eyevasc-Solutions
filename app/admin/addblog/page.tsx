"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AxiosError } from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddBlog = () => {
  const [title,setTitle] = useState<string>("");
  const [image,setImage] = useState<File|null>(null);
  const [description,setDescription] = useState<string>("");

  const onhandleImage = (event:React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.files && event.target.files[0]){
      setImage(event.target.files[0])
    }
  }

  const addBlogData =async()=>{
    try {
      console.log("Title"+title);
      console.log("Image-Blob"+image);
      console.log("Description"+description);
      const formdata = new FormData();
      formdata.append("title",title);
      formdata.append("image",image!);
      formdata.append("description",description);

    } catch (error) {
      console.log("Failed to perform the functionality =>"+JSON.stringify(error));
      if(error instanceof AxiosError){
        console.log("axios error => "+error.response?.data.error)
        toast.error(error.response?.data.error);
      }
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16 md:h-20'>
            <div>
              <h1 className='text-xl md:text-2xl font-bold text-blue-600'>Eyehealthcure</h1>
              <p className='text-xs md:text-sm text-gray-500'>Admin Panel</p>
            </div>
            
          </div>
        </div>
      </div>
      
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Blog Post</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form onSubmit={addBlogData} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  id="title"
                  onChange={(e)=>setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter an engaging title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Image
                </label>
                <div className="relative">
                  <input
                    id="image"
                    onChange={onhandleImage}
                    type="file"
                    accept="image/jpg,image/jpeg,image/png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer transition duration-200"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">Accepted formats: JPG, PNG (Max 5MB)</p>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={8}
                  onChange={(e)=>setDescription(e.target.value)}
                  placeholder="Write your blog content here..."
                  maxLength={5000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200 shadow-md"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 transition duration-200"
                >
                  Save Draft
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

export default AddBlog