"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios, { AxiosError } from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Data {
    _id: string;
    blogTitle: string;
    blogPictureLink: string;
    blogDescription: string;
    
}
const Page = () => {
    const [data, setdata] = useState<Data[]>([]);

    const getBlogs = async () => {
        try {
            const response = await axios.get("/api/admin/blogs");
            // console.log("Blogs => " + JSON.stringify(response.data.blog))
            if (response.status === 200) {
                setdata(response.data.blog);
            }
        } catch (error) {
            // console.log("failed to perform the functionality =>" + error);
            if (error instanceof AxiosError) {
                toast.error("something went wrong!!");
                // console.log("err => " + error.response?.data.error);
            }
        }
    }


    useEffect(() => {
        const displayBlogs = async () => {
            await getBlogs();
        }
        displayBlogs();
    }, [])
    return (
        <div>
            <Navbar />

            {data.length === 0 ?
                <p className='h-screen flex justify-center items-center font-bold'>Blogs soon to be appeard</p> :
                <main className="min-h-screen w-full p-4 bg-gray-50">
                    <section className="flex flex-wrap justify-start items-center gap-7">
                        {
                            data.map((d: Data) => (
                                <article
                                    key={d._id}
                                    className="flex flex-col rounded-xl border border-gray-200 shadow-md bg-white 
             w-full sm:w-[48%] md:w-[31%] lg:w-[23%] 
             overflow-hidden transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                                        <img
                                            src={d.blogPictureLink}
                                            alt="Blog"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-4 flex flex-col justify-between flex-grow">
                                        <div>
                                            <h1 className="text-base md:text-lg font-semibold text-gray-800">
                                                {d.blogTitle}
                                            </h1>

                                            <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                                                {d.blogDescription}
                                            </p>
                                        </div>

                                        <Link
                                            href={`/blogs/${d._id}`}
                                            className="text-xs text-blue-600 hover:underline mt-4 self-end"
                                        >
                                            Read more
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