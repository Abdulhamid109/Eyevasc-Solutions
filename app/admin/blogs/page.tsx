"use client"
import AdminNavbar from '@/components/AdminNavbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import axios, { AxiosError } from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

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
            if (response.status === 200) {
                setdata(response.data.blog);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error("something went wrong!!");
            }
        }
    }

    const deleteBlogs = async (id: string) => {
        try {
            const response = await axios.delete(`/api/admin/deleteblog?blogid=${id}`);
            if (response.status === 200) {
                toast.success("Successfully deleted!");
                setdata(prev =>
                    prev.filter(d => d._id !== id)
                )
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error("Something went wrong while deleting!")
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
            <AdminNavbar />

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

                                            <div
                                                dangerouslySetInnerHTML={{ __html: d.blogDescription ?? "" }}
                                                className="text-lg text-gray-700 mb-6  max-w-none line-clamp-1"
                                            />
                                        </div>

                                        <div className='flex justify-between items-center'>
                                            <Link href={`/admin/editblog/${d._id}`} className='bg-blue-500 p-2 text-white rounded-md tracking-wide hover:bg-blue-600'>Edit</Link>
                                            <Dialog>
                                                <DialogTrigger><Button className='bg-red-500 hover:bg-red-600'>Delete</Button></DialogTrigger>
                                                <DialogContent>
                                                    <DialogTitle><p className='text-center'>Are you sure you want to delete?</p></DialogTitle>
                                                    <section className='flex justify-between items-center'>
                                                        <Button className='bg-gray-500'><DialogClose>Cancel</DialogClose></Button>
                                                        <Button onClick={() => deleteBlogs(d._id)} className='bg-red-500'><DialogClose>Delete</DialogClose></Button>
                                                    </section>
                                                </DialogContent>
                                            </Dialog>
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