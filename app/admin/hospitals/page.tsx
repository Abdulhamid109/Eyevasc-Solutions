"use client"
import AdminNavbar from '@/components/AdminNavbar'
import Footer from '@/components/Footer'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface DataFormat{
    _id:string;
    hospitalName:string;
    hospitalAddress:string;
    hospitalPic:string;
    location:string;
    link:string;
}
const Page = () => {
    const [data,setData] = useState<DataFormat[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

    const AllHospitals=async()=>{
        setLoading(true);
        try {
            const response = await axios.get("/api/admin/allhospitals");
            if(response.status===200){
                setData(response.data.hospitals);
            }
        } catch (error) {
            console.log("err=>"+JSON.stringify(error));
            if(error instanceof AxiosError){
                console.log(JSON.stringify(error))
            }
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        AllHospitals();
    },[]);


    const deleteHospital =async(id:string)=>{
        try {
            const response = await axios.delete(`/api/admin/deletehospital?hid=${id}`);
            if(response.status===200){
                toast.success("Successfully deleted!");
                setData(prev =>
                    prev.filter(d => d._id !== id)
                )
            }
        } catch (error) {
            if(error instanceof AxiosError){
                toast.error(error.response?.data.error || "Failed to delete the hospital")
            }
        }
    }
  return (
    <div>
            <AdminNavbar />

            {
                loading?
                <div className='h-screen w-screen text-2xl animate-pulse text-red-500'>loading hospitals.....</div>
                :
                data.length === 0 ?
                <p className='h-screen flex justify-center items-center font-bold'>No Hospitals listed yet</p> :
                <main className="min-h-screen w-full p-4 bg-gray-50">
                    <section className="flex flex-wrap justify-start items-center gap-7">
                        {
                            data.map((d: DataFormat) => (
                                <article
                                    key={d._id}
                                    className="flex flex-col rounded-xl border border-gray-200 shadow-md bg-white 
             w-full sm:w-[48%] md:w-[31%] lg:w-[23%] 
             overflow-hidden transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                                        <Image
                                            src={d.hospitalPic}
                                            alt="PIC"
                                            className="w-full h-full object-cover"
                                            width={500}
                                            height={500}
                                        />
                                    </div>

                                    <div className="p-4 flex flex-col justify-between flex-grow">
                                        <div>
                                            <h1 className="text-base md:text-lg font-semibold text-gray-800">
                                                {d.hospitalName}
                                            </h1>

                                            <div
                                                className="text-sm font-thin text-gray-600 mb-6  max-w-none"
                                            >{d.hospitalAddress}</div>
                                        </div>

                                        <div className='flex justify-around items-center '>
                                            {/* delete confirmation popup is needed! */}
                                            <Dialog>
                                                <DialogTrigger><button className='p-2 bg-red-500 rounded-md text-white'>Delete</button></DialogTrigger>
                                                <DialogContent>
                                                    <div className='text-center '>Are you sure you want to delete?</div>

                                                    <div className='flex justify-around items-center gap-2 text-white'>
                                                        <button className='p-2 bg-red-500 rounded-md' onClick={()=>deleteHospital(d._id)}><DialogClose>Delete</DialogClose></button>
                                                        <button className='p-2 bg-gray-500 rounded-md'><DialogClose>Cancel</DialogClose></button>
                                                    </div>

                                                </DialogContent>
                                            </Dialog>
                                            <Link
                                            href={`/admin/edithospital/${d._id}`}
                                            className="bg-blue-500 p-2 rounded-md text-white hover:underline self-end"
                                        >
                                            Edit
                                        </Link>
                                        </div>
                                    </div>
                                </article>

                            ))
                        }

                    </section>

                </main>
            
            
            }
            <Footer />
        </div>
  )
}

export default Page