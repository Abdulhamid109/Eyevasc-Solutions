"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Contact Us", href: "/#contact" },
    { name: "Book Now", href: "/booknow" },
    { name: "Blogs", href: "/blogs" },
  ]

  const handleScroll = (e: React.MouseEvent, href: string) => {
    // e.preventDefault()
    if (href.startsWith("/#")) {
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        })
        router.push(href)
      }
    }
    setIsOpen(false)
  }

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://ik.imagekit.io/abdulhamid109/eyehealthcure/Company%20images/logo.jpeg"
              alt="Eyehealthcure Logo"
              width={80}
              height={40}
              className="w-[60px] md:w-[80px] object-contain"
            />
            <span className="font-bold text-xl md:text-2xl text-[#f27400]">
              Eye<span className='text-[#0e83db]'>healthcure</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              
              <Link
                key={i}
                href={link.href}
                onClick={(e) => {handleScroll(e, link.href)
                  }
                }
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden">
            <div className="flex flex-col space-y-3 py-4">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
