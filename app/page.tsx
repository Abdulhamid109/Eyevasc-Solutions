"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    city: ''
  });

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Appointment request submitted! We will contact you soon.');
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      {/* Navigation */}
      <nav className='w-full bg-white shadow-md sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16 md:h-20'>
            <div className='font-bold text-xl md:text-2xl text-blue-600'>
              Eyevasc Solution
            </div>
            <Link href={"/admin/login"} className='px-4 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base font-medium shadow-md'>
              Admin Login
            </Link>
          </div>
        </div>
      </nav>

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

          {/* Right Form */}
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
                    value={formData.name}
                    onChange={handleChange}
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
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='+91 XXXXX XXXXX'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Treatment Looking For *
                  </label>
                  <select
                    name='treatment'
                    value={formData.treatment}
                    onChange={handleChange}
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
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='Enter your city'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                >
                  Book Appointment
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