"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';
import React from 'react';

// demo
const Page = () => {
    const { id } = useParams();

    // Mock data for the blog post
    const blogData = {
        title: "LASIK in India: Complete Guide",
        date: "February 12, 2026",
        author: "Abdul Hamid Patel",
        description: "Learn everything about LASIK surgery in India, including costs, best hospitals, and recovery tips.",
        
        image: "/dr.jpg", // Replace with your image path
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center p-4 md:p-8">
                <article className="w-full max-w-4xl">
                    <div className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            {blogData.title}
                        </h1>
                        <div className="flex items-center text-sm text-gray-600">
                            <span>{blogData.date}</span>
                            <span className="mx-2">•</span>
                            <span>By {blogData.author}</span>
                        </div>
                    </div>

                    <div className="w-full h-64 md:h-96 mb-6 overflow-hidden rounded-lg">
                        <img
                            src={blogData.image}
                            alt={blogData.title}
                            className="w-full h-full object-cover"

                        />
                    </div>

                    <p className="text-lg text-gray-700 mb-6 line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reprehenderit! Fugit rem labore ullam, praesentium, dolores sapiente ut deserunt ducimus sit eaque a quis quasi corrupti, in doloribus porro quos. Possimus molestiae officiis facilis, quasi repudiandae amet similique expedita. Ea eius sequi aliquam distinctio iusto architecto sit ex eum ipsam magnam exercitationem, perferendis enim error dignissimos delectus labore neque repellat quibusdam repellendus! Numquam possimus vitae, excepturi velit earum magnam ipsum labore iure. Libero, velit iusto consequatur ipsum accusamus dolores sed quibusdam suscipit, ipsa fuga impedit labore temporibus eligendi non blanditiis dolore optio dolorem! Ducimus ad officia odit rem minima reiciendis voluptate voluptatibus suscipit error ex tempora nobis consectetur excepturi, accusantium provident asperiores. Ratione recusandae quae consequuntur, quam quaerat magni earum a dolor commodi nobis deserunt, officia placeat sapiente est ducimus aspernatur labore? Excepturi iure, ad praesentium culpa mollitia iusto distinctio assumenda possimus consequatur incidunt voluptates ea repellendus id alias optio molestias? Eos vero aliquid ab laudantium praesentium, eius incidunt omnis voluptates, quis non quisquam ullam. Eum molestias corporis neque, voluptatem consequatur sit dolore animi facilis sapiente excepturi. Ratione, dolores maiores? Molestiae ab possimus, eveniet provident at, suscipit excepturi voluptate necessitatibus itaque nihil laudantium rem earum architecto magnam quibusdam, maxime iusto!
                         </p>

                    {/* <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: blogData.content }} /> */}
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default Page;
