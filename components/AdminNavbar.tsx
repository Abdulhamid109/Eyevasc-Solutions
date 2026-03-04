"use client"
import axios, { AxiosError } from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AdminNavbar = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const logoutButton = async () => {
        try {
            const response = await axios.get("/api/admin/logout");
            if (response.status === 200) {
                toast.success(response.data.message);
                router.push("/");
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error("Failed to logout!!")
            }
        }
    }

    const navLinks = [
        { href: "/admin/blogs", label: "Blogs" },
        { href: "/admin/addhospital", label: "Add Hospital" },
        { href: "/admin/hospitals", label: "All Hospitals" },
        { href: "/admin/addblog", label: "Add Blog" },
    ]

    return (
        <div className='bg-white shadow-md relative z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>

                    <Link href="/admin/homepage">
                        <h1 className='text-xl font-bold text-blue-600'>Eyehealthcure</h1>
                        <p className='text-xs text-gray-500'>Admin Panel</p>
                    </Link>

                    <div className='hidden md:flex items-center gap-6'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className='text-sm text-gray-600 hover:text-blue-500 hover:underline transition-colors'
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={logoutButton}
                            className='px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors'
                        >
                            Logout
                        </button>
                    </div>

                    <button
                        className='md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72 border-t border-gray-100' : 'max-h-0'}`}>
                <div className='flex flex-col px-4 py-3 gap-1 bg-white'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className='text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-3 py-2.5 rounded-lg transition-colors'
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={logoutButton}
                        className='mt-1 w-full py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors'
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar