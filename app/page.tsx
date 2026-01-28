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
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';



const Page = () => {

  const [UserName, setUserName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [treatment, setTreatment] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');
  const [otherCity, setOtherCity] = useState<string | null>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name :" + UserName);
    console.log("phone no : " + phone);
    console.log("Treatment : " + treatment);
    console.log("City : " + city);
    console.log('Form submitted:',);
    console.log("Othercity"+otherCity)
    let cityset = "";
    cityset = city;
    if(city.match("other")){
      cityset = otherCity!;
      console.log("City-set:"+cityset);
    }

    if (error !== "") {
      console.log("Still some error is there " + error)
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/user/bookings", {
        "name": UserName,
        phone,
        treatment,
        cityset
      });

      if (response.status === 200) {
        setUserName('');
        setCity('');
        setError('');
        setTreatment('');
        setPhone('');
        setOtherCity('')
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
    <div className='min-h-screen bg-gradient-to-br bg-[url(/bgimage.png)] bg-cover bg-repeat-none h-[200vh] from-blue-50 via-white to-blue-50'>
      <Navbar />

      {/* Hero Section */}
      <div id='home' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16'>
        {/* Hero Content - Shows first on mobile */}
        <div className='lg:hidden space-y-6 mb-8'>
          <div className='space-y-2'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
              Trusted care, Right here
              <p className='text-sm'>Advanced Specialized Care at <span className=' text-blue-800 mt-2'>Eyevasc Solution</span> </p>

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

          <div>Your <b>health,</b> Our Priority!</div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-4 border p-3 rounded-md shadow-2xl shadow-black'>
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
        <div className='hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-1 items-start justify-between'>
          {/* Left Content - Desktop only */}
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Trusted care, Right place
                <p className='text-[17px] font-thin'>Advanced Specialized Care at <span className=' text-blue-800 mt-2 font-bold'>EyeVasc Solution</span> </p>
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
              <div>Your <b>health,</b> Our Priority!</div>


              {/* Stats - Desktop */}
              <div className='grid grid-cols-3 gap-4 p-3 border shadow-2xl shadow-black items-center rounded-md'>
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
          </div>

          <div className='h-screen  flex justify-center items-center w-[35vw]'>
            <Image
              src={"/man.png"}
              alt=""
              width={900}
              height={100}
            // className='w-[100px]'
            />
          </div>
          {/* Form - Desktop Right Side */}
          <div>
            <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 '>
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

                  <select
                    name='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white'
                  >
                    <option value=''>Select City</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='delhi'>Delhi</option>
                    <option value='gurgaon'>Gurgaon</option>
                    <option value='pune'>Pune</option>
                    <option value='bihar'>Bihar</option>
                    <option value='uttarpradesh'>Uttar Pradesh</option>
                    <option value='bangalore'>Bangalore</option>
                    <option value='other'>Other</option>
                  </select>

                  {city === "other" && (
                    <input
                      type="text"
                      placeholder="Enter your city"
                      value={otherCity!}
                      onChange={(e) => setOtherCity(e.target.value)}
                      className='mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                      required
                    />
                  )}
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

                  <select
                    name='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white'
                  >
                    <option value=''>Select City</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='delhi'>Delhi</option>
                    <option value='gurgaon'>Gurgaon</option>
                    <option value='pune'>Pune</option>
                    <option value='bihar'>Bihar</option>
                    <option value='uttarpradesh'>Uttar Pradesh</option>
                    <option value='bangalore'>Bangalore</option>
                    <option value='other'>Other</option>
                  </select>

                  {city === "other" && (
                    <input
                      type="text"
                      placeholder="Enter your city"
                      value={otherCity!}
                      onChange={(e) => setOtherCity(e.target.value)}
                      className='mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                      required
                    />
                  )}
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
              <h4 className='font-semibold text-sm md:text-base text-gray-900'><Link href={"/lasik"}>Lasik Treatment</Link></h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👁</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'><Link href={"/cataract"}>Cataract</Link></h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👃🏻</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'><Link href={"/Sinus"}>Sinus Treatment</Link></h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>🏥</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'><Link href={"/Tonsillectomy"}>Tonsillectomy</Link></h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>💉</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'><Link href={"/Septoplasty"}>Septoplasty</Link></h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>💵</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'><Link href={"/Ear"}>Ear perforation</Link></h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👨‍🏫</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'><Link href={"/Rhinoplasty"}>Rhinoplasty</Link></h4>
            </div>
            <div className='bg-blue-200 p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow'>
              <div className='text-3xl md:text-4xl mb-3'>👨</div>
              <h4 className='font-semibold text-sm md:text-base text-gray-900'><Link href={"/Gynecomastia"}>Gynecomastia</Link></h4>
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

      {/* under developement */}
      <div id='insurance' className='flex flex-col justify-center items-center w-full py-12 px-4 bg-gray-50'>
        <div className="max-w-4xl w-full">
          <div className='text-center mb-12'>
            <h2 className='font-bold text-3xl text-gray-800 mb-2'>Our Trusted Insurance Partners</h2>
            <p className='text-lg text-gray-600'>Because you and your loved ones deserve the best care and protection.</p>
          </div>

          <ul className='list-disc grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 pl-6 text-lg text-gray-700'>
            <li>Acko General Insurance</li>
            <li>Aditya Birla Health Insurance</li>
            <li>Bajaj Allianz</li>
            <li>Bharti AXA</li>
            <li>Care Health (Religare) Insurance</li>
            <li>Cholamandalam MS</li>
            <li>Edelweiss</li>
            <li>Future Generali India Insurance</li>
            <li>Go Digit General Insurance</li>
            <li>HDFC ERGO / ERGO Health</li>
            <li>ICICI LOMBARD</li>
            <li>Kotak Mahindra</li>
            <li>IFFCO TOKIO</li>
            <li>Liberty General Insurance</li>
            <li>Magma HDI GIC Ltd.</li>
            <li>Manipal Cigna</li>
            <li>Max Bupa Health Insurance Co.</li>
            <li>Navi General Insurance Co. Ltd.</li>
            <li>National Insurance Co. Ltd.</li>
            <li>Reliance GIC Ltd</li>
            <li>Royal Sundaram GIC Ltd.</li>
            <li>SBI General</li>
            <li>Star Health</li>
            <li>Tata AIG</li>
            <li>The New India Assurance Co. Ltd</li>
            <li>The Oriental Insurance Co. Ltd.</li>
            <li>United India Insurance Co. Ltd.</li>
            <li>Universal Sompo GIC Ltd.</li>
          </ul>
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
      <Footer />

    </div>
  );
};

export default Page;