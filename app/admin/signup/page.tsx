"use client"
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

interface Data{
  name:string;
  email:string;
  password:string
}
const page = () => {
  const [data,setdata]=useState<Data|null>({
    name:"",
    email:"",
    password:""
  });


  const onsubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    try {
      const response = await axios.post("/api/admin/signup",data);
      if(response.status===200){
        console.log("Successfully created an account!!");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log("Failed to peform the functionality"+error);
      if(error instanceof AxiosError){
        toast.error(error.response?.data.error);
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4 text-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
          <p className="mt-2 text-gray-600">Create Your Account</p>
        </div>

        <form className="space-y-4" onSubmit={onsubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={data?.name}
              onChange={(e)=>{setdata({...data!,name:e.target.value})}}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={data?.email}
              onChange={(e)=>{setdata({...data!,email:e.target.value})}}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={data?.password}
              onChange={(e)=>{setdata({...data!,password:e.target.value})}}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Signup
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          <p>or</p>
          <p>
            Already have an account?{' '}
            <Link href="/admin/login" className="font-medium text-blue-600 hover:text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page