"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios, { AxiosError } from 'axios'
import Link from 'next/link'
import  { useEffect, useState } from 'react'

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
    },[])
  return (
    <div>
            <Navbar />

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
                                        <img
                                            src={d.hospitalPic}
                                            alt="PIC"
                                            className="w-full h-full object-cover"
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

                                        <Link
                                            href={d.link??"/"}
                                            className="text-xs text-blue-600 hover:underline mt-4 self-end"
                                        >
                                            visit
                                        </Link>
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