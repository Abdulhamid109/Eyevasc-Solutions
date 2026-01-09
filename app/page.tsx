"use client"
import Navbar from '@/components/Navbar';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';



const Page = () => {

  const [UserName,setUserName] = useState<string>('');
  const [phone,setPhone] = useState<string>('');
  const [treatment,setTreatment] = useState<string>('');
  const [city,setCity] = useState<string>('');
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState<string|null>('');

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();
    console.log("Name :"+UserName);
    console.log("phone no : "+phone);
    console.log("Treatment : "+treatment);
    console.log("City : "+city);
    console.log('Form submitted:',);

    if(error!==""){
      console.log("Still some error is there "+error)
    }

    setLoading(true);

   try {
     const response = await axios.post("/api/user/bookings",{
      "name":UserName,
      phone,
      treatment,
      city
    });

    if(response.status===200){
      setUserName('');
      setCity('');
      setError('');
      setTreatment('');
      setPhone('');
      toast.success(response.data.message);
    }
   } catch (error) {
    console.log("Failed to perform the functionality"+error);
    if(error instanceof AxiosError){
      console.log("Error occured "+JSON.stringify(error));
      toast.error(error.response?.data.error);
    }
    throw error;
   }finally{
    setLoading(false);
   }


    
  };


  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <Navbar/>

      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          
          {/* Left Content */}
          <div className='space-y-6 order-2 lg:order-1'>
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

            {/* CTA Button for Mobile */}
            <div className='lg:hidden pt-4'>
              <a href='#appointment-form' className='block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg'>
                Book Free Appointment
              </a>
            </div>
          </div>

          <div id='appointment-form' className='order-1 lg:order-2'>
            <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100'>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center'>
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
                    onChange={(e)=>setUserName(e.target.value)}
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
                    onChange={(e)=>{
                      if(e.target.value.length<10){
                        setError("Invalid Phone no")
                      }
                      if(e.target.value.length===10 &&(e.target.value.startsWith("9") || e.target.value.startsWith("8") || e.target.value.startsWith("7"))){
                        setError('')
                        
                      }else{
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
                    onChange={(e)=>setTreatment(e.target.value)}
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
                    onChange={(e)=>setCity(e.target.value)}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='Enter your city'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                >
                  {loading?"Booking...":"Book Appointment"}
                </button>

                <p className='text-xs text-gray-500 text-center mt-4'>
                  By submitting this form, you agree to our terms and privacy policy
                </p>
              </form>
            </div>
          </div>
        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;