import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full bg-white shadow-md sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16 md:h-20'>
                    <div className='font-bold text-xl md:text-2xl text-blue-600'>
                       <div className='flex justify-center items-center p-10'>
                         <Image
                         className='md:w-[80px] w-[60px]'
                        src={'/eyvasc-logo.png'}
                        alt='no image found'
                        width={80}
                        height={20}
                        />
                       <div className='flex flex-wrap'> EyeVasc Solution</div>
                       </div>
                    </div>
                    <Link href={"/admin/login"} className='px-4 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base font-medium shadow-md'>
                        Admin Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar