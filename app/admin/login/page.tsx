"use client"
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface Data{
  email:string;
  password:string
}
const Page = () => {
    const [data,setdata]=useState<Data|null>({
      email:"",
      password:""
    });
    const router = useRouter();
    const [loading,setLoading] = useState<boolean>(false);

    const onsubmit = async(e:React.FormEvent)=>{
      e.preventDefault();
      setLoading(true);
    try {
      const response = await axios.post("/api/admin/login",data);
      if(response.status===200){
        console.log("Successfully logged in!!");
        toast.success(response.data.message);
        router.push("/admin/homepage");
      }
    } catch (error) {
      console.log("Failed to peform the functionality"+error);
      if(error instanceof AxiosError){
        toast.error(error.response?.data.error);
      }
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4 text-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back, Admin</h1>
          <p className="mt-2 text-gray-600">Please enter your credentials to login</p>
        </div>

        <form className="space-y-4" onSubmit={onsubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your registered email"
                            value={data?.email}
              onChange={(e)=>{setdata({...data!,email:e.target.value})}}
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
            {loading?"loading":"Login"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          <p>or</p>
          <p>
            Don&apos;t have an account?{' '}
            <Link href="/admin/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
