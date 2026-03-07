"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios, { AxiosError } from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface DataFormat {
    _id: string;
    hospitalName: string;
    hospitalAddress: string;
    hospitalPic: string;
    location: string;
    link: string;
}

const SkeletonCard = () => (
    <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 animate-pulse">
        <div className="w-full h-48 bg-gray-200" />
        <div className="p-4 flex flex-col gap-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-2/3" />
            <div className="h-9 bg-gray-200 rounded-lg w-full mt-2" />
        </div>
    </div>
)

const Page = () => {
    const [data, setData] = useState<DataFormat[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const AllHospitals = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/api/admin/allhospitals")
            if (response.status === 200) {
                setData(response.data.hospitals)
            }
        } catch (error) {
            console.log("err=>" + JSON.stringify(error))
            if (error instanceof AxiosError) {
                console.log(JSON.stringify(error))
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        AllHospitals()
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        All Hospitals
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {loading ? 'Loading...' : `${data.length} hospitals found`}
                    </p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                ) : data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center gap-3">
                        <span className="text-5xl">🏥</span>
                        <h2 className="text-xl font-semibold text-gray-700">No Hospitals Listed Yet</h2>
                        <p className="text-gray-400 text-sm">Check back soon.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {data.map((d, index) => (
                            <article
                                key={d._id}
                                className="flex flex-col rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                            >
                                <div className="w-full h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                                    <img
                                        src={d.hospitalPic}
                                        alt={d.hospitalName}
                                        loading={index < 4 ? 'eager' : 'lazy'}
                                        fetchPriority={index === 0 ? 'high' : 'auto'}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="flex flex-col flex-1 p-4 gap-2">
                                    <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
                                        {d.hospitalName}
                                    </h2>
                                    <p className="text-sm text-gray-500 line-clamp-4 flex-1">
                                        {d.hospitalAddress}
                                    </p>
                                    <Link
                                        href={"/booknow"}
                                        rel="noopener noreferrer"
                                        className="mt-2 w-full text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg py-2"
                                    >
                                        Book Appointment
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