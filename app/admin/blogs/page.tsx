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
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface Data {
    _id: string;
    blogTitle: string;
    blogPictureLink: string;
    blogDescription: string;
}

const SkeletonCard = () => (
    <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 animate-pulse">
        <div className="w-full h-48 bg-gray-200" />
        <div className="p-4 flex flex-col gap-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-2/3" />
            <div className="flex justify-between mt-2">
                <div className="h-9 bg-gray-200 rounded-lg w-16" />
                <div className="h-9 bg-gray-200 rounded-lg w-16" />
            </div>
        </div>
    </div>
)

const Page = () => {
    const [data, setData] = useState<Data[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getBlogs = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/api/admin/blogs")
            if (response.status === 200) {
                setData(response.data.blog)
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error("Something went wrong!")
            }
        } finally {
            setLoading(false)
        }
    }

    const deleteBlogs = async (id: string) => {
        try {
            const response = await axios.delete(`/api/admin/deleteblog?blogid=${id}`)
            if (response.status === 200) {
                toast.success("Successfully deleted!")
                setData(prev => prev.filter(d => d._id !== id))
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error("Something went wrong while deleting!")
            }
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <AdminNavbar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        All Blogs
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {loading ? 'Loading...' : `${data.length} blogs found`}
                    </p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                ) : data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center gap-3">
                        <span className="text-5xl">📝</span>
                        <h2 className="text-xl font-semibold text-gray-700">No Blogs Yet</h2>
                        <p className="text-gray-400 text-sm">Start by adding your first blog post.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {data.map((d: Data, index: number) => (
                            <article
                                key={d._id}
                                className="flex flex-col rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                            >
                                <div className="w-full h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                                    <img
                                        src={d.blogPictureLink}
                                        alt={d.blogTitle}
                                        loading={index < 4 ? 'eager' : 'lazy'}
                                        fetchPriority={index === 0 ? 'high' : 'auto'}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="flex flex-col flex-1 p-4 gap-2">
                                    <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
                                        {d.blogTitle}
                                    </h2>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: d.blogDescription ?? "" }}
                                        className="text-sm text-gray-500 line-clamp-2 flex-1"
                                    />
                                    <div className="flex justify-between items-center mt-2 gap-2">
                                        <Link
                                            href={`/admin/editblog/${d._id}`}
                                            className="flex-1 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg py-2"
                                        >
                                            Edit
                                        </Link>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button className="flex-1 bg-red-500 hover:bg-red-600 text-sm">
                                                    Delete
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogTitle className="text-center">
                                                    Are you sure you want to delete?
                                                </DialogTitle>
                                                <p className="text-sm text-center text-gray-500">
                                                    This action cannot be undone.
                                                </p>
                                                <div className="flex justify-between items-center gap-3 mt-2">
                                                    <DialogClose asChild>
                                                        <Button className="flex-1 bg-gray-200 text-gray-800 hover:bg-gray-300">
                                                            Cancel
                                                        </Button>
                                                    </DialogClose>
                                                    <DialogClose asChild>
                                                        <Button
                                                            onClick={() => deleteBlogs(d._id)}
                                                            className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                                                        >
                                                            Delete
                                                        </Button>
                                                    </DialogClose>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
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