"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
    const [UserName, setUserName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [treatment, setTreatment] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');
  const [otherCity, setOtherCity] = useState<string | null>("");

  const validatePhone = (phone: string): boolean => {
    return phone.length === 10 && ['9', '8', '7'].includes(phone[0]);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name :" + UserName);
    console.log("phone no : " + phone);
    console.log("Treatment : " + treatment);
    console.log("City : " + city);
    console.log('Form submitted:',);
    console.log("Othercity" + otherCity)
    let cityset = "";
    cityset = city;
    if (city.match("other")) {
      cityset = otherCity!;
      console.log("City-set:" + cityset);
    }
     if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit Indian mobile number starting with 7, 8, or 9');
      return;
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
    <div>
        <Navbar/>
        <div className=' '>
            

      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Book Free Appointment
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.length > 10) return;
                  setPhone(val);
                  if (!validatePhone(val) && val.length === 10) {
                    setError('Please enter a valid 10-digit Indian mobile number starting with 7, 8, or 9');
                  } else {
                    setError(null);
                  }
                }}
                required
                maxLength={10}
                className={`w-full px-4 py-3 border ${error ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="Enter your 10-digit mobile number"
              />
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>

            <div>
              <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                Treatment Looking For *
              </label>
              <select
                id="treatment"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select Treatment</option>
                <option value="lasik">LASIK Treatment</option>
                <option value="cataract">Cataract Treatment</option>
                <option value="icl">ICL Procedure</option>
                <option value="sinus">Sinus Treatment</option>
                <option value="septoplasty">Septoplasty</option>
                <option value="tonsillectomy">Tonsillectomy</option>
                <option value="ear">Ear Drum Perforation</option>
                <option value="rhinoplasty">Rhinoplasty</option>
                <option value="gynecomastia">Gynecomastia Treatment</option>
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select City</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="pune">Pune</option>
                <option value="bihar">Bihar</option>
                <option value="uttarpradesh">Uttar Pradesh</option>
                <option value="bangalore">Bangalore</option>
                <option value="other">Other</option>
              </select>

              {city === 'other' && (
                <input
                  type="text"
                  value={otherCity!}
                  onChange={(e) => setOtherCity(e.target.value)}
                  required={city === 'other'}
                  className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your city"
                />
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Book Free Appointment'}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to our terms and privacy policy
            </p>
          </form>
        </div>
      </div>
    
        </div>
        <Footer/>
    </div>
  )
}

export default Page