"use client"
import Navbar from '@/components/Navbar';
import axios, { AxiosError } from 'axios';
// import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"



const Page = () => {

  const [UserName, setUserName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [treatment, setTreatment] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name :" + UserName);
    console.log("phone no : " + phone);
    console.log("Treatment : " + treatment);
    console.log("City : " + city);
    console.log('Form submitted:',);

    if (error !== "") {
      console.log("Still some error is there " + error)
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/user/bookings", {
        "name": UserName,
        phone,
        treatment,
        city
      });

      if (response.status === 200) {
        setUserName('');
        setCity('');
        setError('');
        setTreatment('');
        setPhone('');
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log("Failed to perform the functionality" + error);
      if (error instanceof AxiosError) {
        console.log("Error occured " + JSON.stringify(error));
        toast.error(error.response?.data.error);
      }
      throw error;
    } finally {
      setLoading(false);
    }



  };


  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <Navbar />

      {/* Hero Section */}
      <div id='home' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16'>
        {/* Hero Content - Shows first on mobile */}
        <div className='lg:hidden space-y-6 mb-8'>
          <div className='space-y-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
              Right care, Right place
              <span className='block text-blue-600 mt-2'>Eyevasc Solution</span>
            </h1>

            <div className='space-y-3 text-gray-700'>
              <div className='flex items-start space-x-3'>
                <svg className='w-6 h-6 text-green-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span className='text-base md:text-lg'>24/7 medical care</span>
              </div>
              <div className='flex items-start space-x-3'>
                <svg className='w-6 h-6 text-green-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span className='text-base md:text-lg'>Get Free consultation across India</span>
              </div>
              <div className='flex items-start space-x-3'>
                <svg className='w-6 h-6 text-green-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span className='text-base md:text-lg'>In-person and online consultations with experienced doctors</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-4 pt-6'>
            <div className='text-center'>
              <div className='text-2xl md:text-3xl font-bold text-blue-600'>50+</div>
              <div className='text-xs md:text-sm text-gray-600 mt-1'>Doctors</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl md:text-3xl font-bold text-blue-600'>15+</div>
              <div className='text-xs md:text-sm text-gray-600 mt-1'>Diseases</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl md:text-3xl font-bold text-blue-600'>10+</div>
              <div className='text-xs md:text-sm text-gray-600 mt-1'>Cities</div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two columns */}
        <div className='hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Content - Desktop only */}
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Right care, Right place
                <span className='block text-blue-600 mt-2'>Eyevasc Solution</span>
              </h1>

              <div className='space-y-3 text-gray-700'>
                <div className='flex items-start space-x-3'>
                  <svg className='w-6 h-6 text-green-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-base md:text-lg'>24/7 medical care</span>
                </div>
                <div className='flex items-start space-x-3'>
                  <svg className='w-6 h-6 text-green-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-base md:text-lg'>Get Free consultation across India</span>
                </div>
                <div className='flex items-start space-x-3'>
                  <svg className='w-6 h-6 text-green-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-base md:text-lg'>In-person and online consultations with experienced doctors</span>
                </div>
              </div>
            </div>

            {/* Stats - Desktop */}
            <div className='grid grid-cols-3 gap-4 pt-6'>
              <div className='text-center'>
                <div className='text-2xl md:text-3xl font-bold text-blue-600'>50+</div>
                <div className='text-xs md:text-sm text-gray-600 mt-1'>Doctors</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl md:text-3xl font-bold text-blue-600'>15+</div>
                <div className='text-xs md:text-sm text-gray-600 mt-1'>Diseases</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl md:text-3xl font-bold text-blue-600'>10+</div>
                <div className='text-xs md:text-sm text-gray-600 mt-1'>Cities</div>
              </div>
            </div>
          </div>

          {/* Form - Desktop Right Side */}
          <div>
            <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100'>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center'>
                Book Free Appointment
              </h2>

              <form id='book' onSubmit={handleSubmit} className='space-y-5 text-black'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={UserName!}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='Enter your name'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Phone Number *
                  </label>
                  <input
                    type='text'
                    value={phone!}
                    onChange={(e) => {
                      if (e.target.value.length < 10) {
                        setError("Invalid Phone no")
                      }
                      if (e.target.value.length === 10 && (e.target.value.startsWith("9") || e.target.value.startsWith("8") || e.target.value.startsWith("7"))) {
                        setError('')

                      } else {
                        setError("Invalid Phone no")
                      }

                      setPhone(e.target.value)
                    }}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='+91 XXXXX XXXXX'
                  />
                  <p className='text-sm text-red-500'>{error}</p>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Treatment Looking For *
                  </label>
                  <select
                    name='treatment'
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white'
                  >
                    <option value=''>Select Treatment</option>
                    <option value='lasik'>LASIK Treatment</option>
                    <option value='cataract'>Cataract Treatment</option>
                    <option value='icl'>ICL Procedure</option>
                    <option value='sinus'>Sinus Treatment</option>
                    <option value='septoplasty'>Septoplasty</option>
                    <option value='tonsillectomy'>Tonsillectomy</option>
                    <option value='ear'>Ear Drum Perforation</option>
                    <option value='rhinoplasty'>Rhinoplasty</option>
                    <option value='gynecomastia'>Gynecomastia Treatment</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    City *
                  </label>
                  <input
                    type='text'
                    name='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='Enter your city'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                >
                  {loading ? "Booking..." : "Book Appointment"}
                </button>

                <p className='text-xs text-gray-500 text-center mt-4'>
                  By submitting this form, you agree to our terms and privacy policy
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Form - Mobile Below Hero Content */}
        <div className='lg:hidden'>
          <div className='bg-white rounded-2xl shadow-2xl p-6 border border-gray-100'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
              Book Free Appointment
            </h2>

            <form onSubmit={handleSubmit} className='space-y-5 text-black'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Full Name *
                </label>
                <input
                  type='text'
                  name='name'
                  value={UserName!}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                  placeholder='Enter your name'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone Number *
                </label>
                <input
                  type='text'
                  value={phone!}
                  onChange={(e) => {
                    if (e.target.value.length < 10) {
                      setError("Invalid Phone no")
                    }
                    if (e.target.value.length === 10 && (e.target.value.startsWith("9") || e.target.value.startsWith("8") || e.target.value.startsWith("7"))) {
                      setError('')

                    } else {
                      setError("Invalid Phone no")
                    }

                    setPhone(e.target.value)
                  }}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                  placeholder='+91 XXXXX XXXXX'
                />
                <p className='text-sm text-red-500'>{error}</p>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Treatment Looking For *
                </label>
                <select
                  name='treatment'
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white'
                >
                  <option value=''>Select Treatment</option>
                  <option value='lasik'>LASIK Treatment</option>
                  <option value='cataract'>Cataract Treatment</option>
                  <option value='icl'>ICL Procedure</option>
                  <option value='sinus'>Sinus Treatment</option>
                  <option value='septoplasty'>Septoplasty</option>
                  <option value='tonsillectomy'>Tonsillectomy</option>
                  <option value='ear'>Ear Drum Perforation</option>
                  <option value='rhinoplasty'>Rhinoplasty</option>
                  <option value='gynecomastia'>Gynecomastia Treatment</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  City *
                </label>
                <input
                  type='text'
                  name='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                  placeholder='Enter your city'
                />
              </div>

              <button
                type='submit'
                className='w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              >
                {loading ? "Booking..." : "Book Appointment"}
              </button>

              <p className='text-xs text-gray-500 text-center mt-4'>
                By submitting this form, you agree to our terms and privacy policy
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* our treatment */}
      <div id='treatment' className='bg-blue-50 py-12 md:py-16 mt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10'>
            Our treatment
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👀</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Lasik Treatment</h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👁</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Cataract</h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👃🏻</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Sinus Treatment</h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>🏥</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Tonsillectomy</h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>💉</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Septoplasty</h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>💵</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Ear perforation</h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👨‍🏫</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Rhinoplasty</h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👨</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Gynecomastia</h4>
            </div>
          </div>
        </div>
      </div>

      

      <div id='aboutus' className='bg-blue-200 py-12 md:py-16 mt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10'>
            Our Mission
          </h3>
          <div className=' md:gap-6 text-black text-xl text-center font-sans'>
            To become the largest independent platform catering to all types of elective surgeries.
          </div>
          <h3 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 mt-5'>
            Our Vision
          </h3>
          <div className=' md:gap-6 text-black text-xl font-sans text-center'>
            To make every person&apos;s lifestyle healthy,longer, and better.
          </div>
        </div>
      </div>

      <div className='bg-blue-50 py-12 md:py-16 mt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10'>
            Our Values
          </h3>
          <div className='text-center text-black font-sans'>
            At Eyevasc Solutions , we uphold the transparency,integrity and accountability
            in everything we do, ensuring trust and fairness for our patients. Our diverse and inclusive approach
            make quality healthcare accessible to all
          </div>

          <div className='w-full max-w-4xl mx-auto px-4'>
  <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    plugins={[
      Autoplay({
        delay: 3000
      })
    ]}
    className="w-full"
  >
    <CarouselContent className="-ml-2 md:-ml-4">
      <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 md:p-8 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Passion</h3>
            <p className="text-sm md:text-base text-gray-600">Dedication to improving lives with exceptional care.</p>
          </div>
        </Card>
      </CarouselItem>

      <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 md:p-8 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Integrity</h3>
            <p className="text-sm md:text-base text-gray-600">Building trust through honesty and fairness.</p>
          </div>
        </Card>
      </CarouselItem>

      <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 md:p-8 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Transparency</h3>
            <p className="text-sm md:text-base text-gray-600">Always honest and upfront in all we do.</p>
          </div>
        </Card>
      </CarouselItem>

      <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 md:p-8 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Accountability</h3>
            <p className="text-sm md:text-base text-gray-600">Taking ownership and delivering promises.</p>
          </div>
        </Card>
      </CarouselItem>

      <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 md:p-8 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Keep Promises</h3>
            <p className="text-sm md:text-base text-gray-600">Ensuring trust through commitment and action.</p>
          </div>
        </Card>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious className="hidden md:flex -left-12" />
    <CarouselNext className="hidden md:flex -right-12" />
  </Carousel>
</div>


        {/* Features Section */}
      <div className='bg-blue-50 py-12 md:py-16 mt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10'>
            Why Choose Us?
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>⚡</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Quick Discharge</h4>
            </div>
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>🔬</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Advanced Equipment</h4>
            </div>
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👨‍⚕️</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Expert Specialists</h4>
            </div>
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>💰</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Affordable Treatment</h4>
            </div>
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>💉</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>Painless Procedures</h4>
            </div>
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>💵</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>No Cost EMI&apos;s</h4>
            </div>
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👨‍🏫</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>All insurance Covered</h4>
            </div>
            <div className='bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👨</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'>State-of-Art</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-blue-50 py-12 md:py-16'>
  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='text-center mb-12'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
        Get in Touch
      </h2>
      <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
        Have questions? We&apos;re here to help. Reach out to us anytime and our team will get back to you.
      </p>
    </div>

    <div id='Contact' className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      
      {/* Call Us */}
      <div className='bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow'>
        <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
          <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
          </svg>
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>Call Us</h3>
        <p className='text-blue-600 font-medium text-lg mb-1'>+91 9999756758</p>
        <p className='text-sm text-gray-500'>Available 24/7</p>
      </div>

      {/* Email Us */}
      <div className='bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow'>
        <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
          <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
          </svg>
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>Email Us</h3>
        <p className='text-blue-600 font-medium text-lg mb-1'>info@eyevascsolution.com</p>
        <p className='text-sm text-gray-500'>Response within 24 hours</p>
      </div>

      {/* Visit Us */}
      <div className='bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow'>
        <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
          <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
          </svg>
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>Visit Us</h3>
        <p className='text-gray-700 font-medium mb-1'>Multiple Locations</p>
        <p className='text-sm text-gray-500'>Mumbai, Delhi, Bangalore, Pune</p>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
      <footer className='bg-gray-900 text-white py-8 md:py-12'>
  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
      
      {/* Company Info */}
      <div>
        <h3 className='text-xl font-bold text-blue-400 mb-4'>Eyevasc Solution</h3>
        <p className='text-gray-400 text-sm mb-4'>
          Providing quality healthcare services across India with expert doctors and advanced facilities.
        </p>
        <div className='flex space-x-4'>
          <a href='#' className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
            </svg>
          </a>
          <a href='#' className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
            </svg>
          </a>
          <a href='#' className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
        <ul className='space-y-2 text-gray-400 text-sm'>
          <li><a href='#home' className='hover:text-blue-400 transition-colors'>Home</a></li>
          <li><a href='#aboutus' className='hover:text-blue-400 transition-colors'>About Us</a></li>
          <li><a href='#treatment' className='hover:text-blue-400 transition-colors'>Treatments</a></li>
          <li><a href='#Contact' className='hover:text-blue-400 transition-colors'>Contact Us</a></li>
          <li><a href='#book' className='hover:text-blue-400 transition-colors'>Book Appointment</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className='text-lg font-semibold mb-4'>Contact</h4>
        <ul className='space-y-3 text-gray-400 text-sm'>
          <li className='flex items-start space-x-2'>
            <svg className='w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
            <span>+91 9999756758</span>
          </li>
          <li className='flex items-start space-x-2'>
            <svg className='w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
            </svg>
            <span>info@eyevascsolution.com</span>
          </li>
          <li className='flex items-start space-x-2'>
            <svg className='w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            <span>Mumbai, Delhi, Bangalore, Pune</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className='border-t border-gray-800 pt-6 mt-6'>
      <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        <p className='text-gray-400 text-sm text-center md:text-left'>
          © 2026 Eyevasc Solution. All rights reserved.
        </p>
        <div className='flex space-x-6 text-sm text-gray-400'>
          <a href='#' className='hover:text-blue-400 transition-colors'>Privacy Policy</a>
          <a href='#' className='hover:text-blue-400 transition-colors'>Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Page;