"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { MdEvent } from "react-icons/md"
import { usePathname, useRouter } from "next/navigation"
import Holidays from "date-holidays"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [festivalName, setFestivalName] = useState<string | null>(null)
  const [offerIndex, setOfferIndex] = useState(0)
  const [showBanner, setShowBanner] = useState(true)

  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const demoFestival = true

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Contact Us", href: "/#contact" },
    { name: "Book Now", href: "/booknow" },
    { name: "Blogs", href: "/blogs" },
  ]

  const handleScroll = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
        router.push(href)
      }
    }

    setIsOpen(false)
  }

  /* FESTIVAL DETECTION */

  useEffect(() => {

    if (demoFestival) {
      // setFestivalName("Ramadan")
      return
    }

    const hd = new Holidays("IN")
    const today = new Date()
    const holidays = hd.isHoliday(today)

    if (holidays && holidays.length > 0) {
      // setFestivalName(holidays[0].name)
    }

  }, [])

  /* OFFERS */

  const offers = [
    `🎉 ${festivalName} Special – Free Eye Checkup Camp`,
    "✨ 20% OFF on LASIK Consultation",
    "👨‍⚕️ Free Doctor Consultation Today",
    "🎁 Festive Eye Health Package Available",
    "👁 Cataract Surgery Consultation Available",
  ]

  /* OFFER ROTATION */

  useEffect(() => {

    const interval = setInterval(() => {
      setOfferIndex((prev) => (prev + 1) % offers.length)
    }, 4000)

    return () => clearInterval(interval)

  }, [offers.length])

  return (
    <>

      {/* ANNOUNCEMENT BAR */}

      {isHomePage && festivalName && showBanner && (

        <div className="w-full bg-gradient-to-r from-purple-700 via-blue-600 to-cyan-500 text-white text-sm relative">

          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 px-4 py-2">

            {/* EVENT ICON */}

            <MdEvent className="text-lg flex-shrink-0" />

            {/* ROTATING OFFER TEXT */}

            <p className="font-medium animate-slide truncate max-w-[60%] sm:max-w-md">
              {offers[offerIndex]}
            </p>

            {/* REGISTER BUTTON */}

            <Link
              href="/booknow"
              className="text-white font-semibold text-sm underline hover:opacity-80 whitespace-nowrap"
            >
              Register →
            </Link>

            {/* CLOSE BUTTON */}

            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-3 text-white opacity-80 hover:opacity-100"
            >
              ✕
            </button>

          </div>

        </div>

      )}

      {/* NAVBAR */}

      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16 md:h-20">

            {/* LOGO */}

            <Link href="/" className="flex items-center gap-2">

              <Image
                src="https://ik.imagekit.io/abdulhamid109/eyehealthcure/Company%20images/logo.jpeg"
                alt="Eyehealthcure Logo"
                width={80}
                height={40}
                className="w-[45px] sm:w-[55px] md:w-[70px] object-contain"
              />

              <span className="font-bold text-lg sm:text-xl md:text-2xl text-[#f27400]">
                Eye<span className="text-[#0e83db]">healthcure</span>
              </span>

            </Link>

            {/* DESKTOP MENU */}

            <div className="hidden md:flex items-center space-x-8">

              {navLinks.map((link, i) => (

                <Link
                  key={i}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                  {link.name}
                </Link>

              ))}

            </div>

            {/* MOBILE BUTTON */}

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

          </div>

          {/* MOBILE MENU */}

          {isOpen && (

            <div className="md:hidden bg-white shadow-lg rounded-xl mt-2 overflow-hidden">

              <div className="flex flex-col divide-y">

                {navLinks.map((link, i) => (

                  <Link
                    key={i}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="px-5 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium"
                  >
                    {link.name}
                  </Link>

                ))}

              </div>

            </div>

          )}

        </div>

      </nav>

      {/* TEXT ANIMATION */}

      <style jsx>{`

        @keyframes slide {
          0% { opacity: 0; transform: translateY(6px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }

        .animate-slide {
          animation: slide 4s infinite;
        }

      `}</style>

    </>
  )
}

export default Navbar