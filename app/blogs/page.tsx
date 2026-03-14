"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios, { AxiosError } from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Spinner } from "@/components/ui/spinner"

interface Data {
    _id: string;
    blogTitle: string;
    blogPictureLink: string;
    blogDescription: string;
}

const Page = () => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getBlogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/admin/blogs");
            if (response.status === 200) {
                setData(response.data.blog);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error("Something went wrong!");
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBlogs();
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {loading ? (
                    <div className="flex justify-center items-center h-[60vh]">
                        <Spinner scale={105} />
                    </div>
                ) : data.length === 0 ? (
                    <div className="flex justify-center items-center h-[60vh]">
                        <p className="font-bold text-gray-500">Blogs soon to be appeared</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {data.map((d: Data, index: number) => (
                            <article
                                key={d._id}
                                className="flex flex-col rounded-xl border border-gray-100 shadow-sm bg-white overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                            >
                                <div className="w-full h-48 aspect-video overflow-hidden bg-gray-100 flex-shrink-0">
                                    <img
                                        src={`${d.blogPictureLink}?tr=w-1280,h-720,c-at_max`}
                                        alt={d.blogTitle}
                                        loading={index < 4 ? 'eager' : 'lazy'}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-4 flex flex-col flex-1 gap-2">
                                    <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
                                        {d.blogTitle}
                                    </h2>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: d.blogDescription ?? "" }}
                                        className="text-sm text-gray-500 line-clamp-2 flex-1"
                                    />
                                    <Link
                                        href={`/blogs/${d._id}`}
                                        className="mt-2 w-full text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg py-2"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

            </main>

            <Footer />
        </div>
    )
}

export default Page