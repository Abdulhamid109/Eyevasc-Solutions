"use client"
import axios, { AxiosError } from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';



const AdminNavbar = () => {
      const router = useRouter();

  const logoutButton = async () => {
    try {
      const response = await axios.get("/api/admin/logout");
      if (response.status === 200) {
        console.log("Loggedd out!!");

        toast.success(response.data.message);
        router.push("/");
      }
    } catch (error) {
      console.log("Failed to logout " + error);
      if (error instanceof AxiosError) {
        toast.error("Failed to logout!!")
      }
    }
  }

  return (
    <div className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16 md:h-20'>
            <div>
              <h1 className='text-xl md:text-2xl font-bold text-blue-600'><Link href={"/admin/homepage"}>Eyehealthcure</Link></h1>
              <p className='text-xs md:text-sm text-gray-500'>Admin Panel</p>
            </div>
            
            <div className='flex justify-center items-center gap-4'>
              <Link href={"/admin/blogs"} className=' hover:underline hover:text-blue-500 text-sm'>Blogs</Link>
              <Link href={"/admin/addhospital"} className=' hover:underline hover:text-blue-500 text-sm'>add hospital</Link>
              <Link href={"/admin/addblog"} className=' hover:underline hover:text-blue-500 text-sm'>Add Blogs</Link>
              <button onClick={logoutButton} className='px-4 py-2 md:px-6 md:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm md:text-base font-medium'>
              Logout
            </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminNavbar