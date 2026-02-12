import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Navbar />

            <main className="min-h-screen w-full p-4 bg-gray-50">
                <section className="flex flex-wrap justify-start items-center gap-7">
                    <article className="flex flex-col  border border-gray-200 rounded-lg shadow-sm w-full sm:w-[45%] md:w-[30%] lg:w-[20%] bg-white">
                        <div className="flex justify-center items-center h-full w-full ">
                            <img
                                src="/dr.jpg"
                                alt="Doctor"
                                className="h-full w-auto rounded-md object-cover shadow-md shadow-black/30"

                            />
                        </div>
                        <div className="mt-2 p-2">
                            <h1 className="text-lg font-semibold text-gray-800">Title</h1>
                            <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis dolorum officia tenetur fuga delectus et non eligendi labore harum!
                            </p>
                            <Link href={"/blog/blogid"} className='font-thin hover:underline text-xs flex justify-end p-1'>Read more</Link>
                        </div>
                    </article>

                    <article className="flex flex-col  border border-gray-200 rounded-lg shadow-sm w-full sm:w-[45%] md:w-[30%] lg:w-[20%] bg-white">
                        <div className="flex justify-center items-center h-full w-full ">
                            <img
                                src="/dr.jpg"
                                alt="Doctor"
                                className="h-full w-auto rounded-md object-cover shadow-md shadow-black/30"

                            />
                        </div>
                        <div className="mt-2 p-2">
                            <h1 className="text-lg font-semibold text-gray-800">Title</h1>
                            <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis dolorum officia tenetur fuga delectus et non eligendi labore harum!
                            </p>
                            <Link href={"/blog/"} className='font-thin hover:underline text-xs flex justify-end p-1'>Read more</Link>
                        </div>
                    </article>
                
                </section>
                
            </main>
            <Footer />
        </div>
    )
}

export default Page