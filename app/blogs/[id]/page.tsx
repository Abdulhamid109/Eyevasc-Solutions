"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import axios, { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Data {
    _id: string;
    blogTitle: string;
    blogPictureLink: string;
    blogDescription: string;
    time:string;
    date:string;
}

const Page = () => {
    const { id } = useParams();
    const [data,setdata] = useState<Data|null>(null);

    const fetchSingleBlogDetail =async()=>{
        try {
            const response = await axios.get(`/api/admin/blogs/${id}`);
            if(response.status===200){
                setdata(response.data.blog);
            }
        } catch (error) {
            console.log("error=>"+error);
            if(error instanceof AxiosError){
                toast.error("something went wrong!");
            }
        }
    }

    useEffect(()=>{
        const displayBlog = async()=>{
            await fetchSingleBlogDetail();
        }
        displayBlog();
    },[])


    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow flex flex-col items-center p-4 md:p-8">
                <article className="w-full max-w-4xl">
                    <div className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            {data?.blogTitle}
                        </h1>
                        <div className="flex items-center text-sm text-gray-600">
                            <span>{data?.date}</span>
                            <span className="mx-2">•</span>
                            <span>By Eyehealthcure</span>
                        </div>
                    </div>

                    <div className="w-full h-64 md:h-96 mb-6 overflow-hidden rounded-lg">
                        <img
                            src={data?.blogPictureLink}
                            alt={data?.blogTitle}
                            className="w-full h-full object-cover"

                        />
                    </div>

                    <p className="text-lg text-gray-700 mb-6 line-clamp-3">
                        {data?.blogDescription}
                         </p>

                    {/* <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: blogData.content }} /> */}
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default Page;
