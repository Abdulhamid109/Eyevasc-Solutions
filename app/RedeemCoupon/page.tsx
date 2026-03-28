"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Spinner } from '@/components/ui/spinner';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
const [UserName, setUserName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [Coupon, setCoupon] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');
  const [status,setStatus] = useState<string>('')
  const [location,setlocation] = useState<string>("");

  const validatePhone = (phone: string): boolean => {
    return phone.length === 10 && ['9', '8', '7'].includes(phone[0]);
  };

  const handleSubmit =async(e:React.FormEvent)=>{
    e.preventDefault();
    console.log(UserName)
    setLoading(true);
    try {
        const response = await axios.post("/api/user/redeemCoupon",{
            "CouponString":Coupon,
            "UserName":UserName,
            "UserLoction": location,
            "UserPhone":phone,
            "InterestedInSurgery":status
        });

        if(response.status===200){
            setCoupon("");
            setUserName("");
            setlocation("");
            setPhone("");
            setStatus("");
            toast.success("Successfully claimed the eye check up of worth rupees 3000 and free consultation",{position:'top-center'})
        }
    } catch (error) {
        console.log("Something went wrong!"+JSON.stringify(error));
        if(error instanceof AxiosError){
            toast.error(error.response?.data.error || "Something went wrong!");
        }
    }finally{
        setLoading(false);
    }
  }

  return (
    <div>
        <Navbar/>
        <div className=' '>
            

      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Redeem Coupon
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
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                location *
              </label>
              
               <input
                type="text"
                id="name"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your Location"
              /> 
            </div>

            <div>
              <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                Coupon *
              </label>
              
               <input
                type="text"
                id="coupon"
                value={Coupon}
                onChange={(e) => setCoupon(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Coupon : eg EHC-XXXXXX"
              /> 
            </div>

             <div>
              <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                Interested In Surgery
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select Status</option>
                <option value="yes">Yes, I&lsquo;m Interested</option>
                <option value="no">I&lsquo;m just curios!</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <p className='flex justify-center items-center'><Spinner/></p> : 'Redeem Coupon'}
            </button>

            
          </form>
        </div>
      </div>
    
        </div>
        <Footer/>
    </div>
  )
}

export default Page