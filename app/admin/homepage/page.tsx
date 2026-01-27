"use client"
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";


interface Data{
    _id:string;
    name:string;
    phoneno:string;
    treatment:string;
    city:string;
    date:string;
}

const AdminPanel = () => {
  const [data, setdata] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true); // Start with true
  const [searchTerm, setSearchTerm] = useState('');

  const getALLUsers = async()=>{
    setLoading(true);
    try {
        const response = await axios.get("/api/admin/allusers");
        if(response.status===200){
            console.log(response.data);
            
            setdata(response.data.users || []);
            toast.success(response.data.message || "Users loaded successfully");
        }
    } catch (error) {
        console.log("Failed to perform the functionality", error);
        if(error instanceof AxiosError){
            toast.error(error.response?.data.error || "Failed to load users");
        }
        setdata([]);
    } finally {
        setLoading(false);
    }
  }
  const router = useRouter();

  const logoutButton = async()=>{
    try {
        const response = await axios.get("/api/admin/logout");
        if(response.status===200){
            console.log("Loggedd out!!");

            toast.success(response.data.message);
            router.push("/");
        }
    } catch (error) {
        console.log("Failed to logout "+error);
        if(error instanceof AxiosError){
            toast.error("Failed to logout!!")
        }
    }
  }

  const deleteRecord = async(id:string)=>{
    try {
      const response = await axios.get(`/api/deleteuser/${id}`);
      if(response.status===200 && response.data.success){
        //updating the state
        toast.success(response.data.message);
        updateTheStateAfterDelete(id);
      }
    } catch (error) {
      console.log("Failed to perform the functionality");
      if(error instanceof AxiosError){
        toast.error("Failed to delete the user");
        console.log("Error=>"+JSON.stringify(error));
      }
    }
  }

  const updateTheStateAfterDelete = (id:string)=>{
    const updatedUsers = data.filter(d => d._id !== id);
    console.log("Updated the user");
    setdata(updatedUsers);
  }

  useEffect(()=>{
    getALLUsers();
  },[])

  const filteredAppointments = data.filter(apt => {
    if (!apt) return false;
    const matchesSearch = apt.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.phoneno?.includes(searchTerm) ||
                         apt.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.treatment?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className='min-h-screen bg-gray-50 text-black'>
      {/* Header */}
      <div className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16 md:h-20'>
            <div>
              <h1 className='text-xl md:text-2xl font-bold text-blue-600'>Eyevasc Solution</h1>
              <p className='text-xs md:text-sm text-gray-500'>Admin Panel</p>
            </div>
            <button onClick={logoutButton} className='px-4 py-2 md:px-6 md:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm md:text-base font-medium'>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8'>
        {/* Header Section */}
        <div className='mb-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>Appointment Requests</h2>
          <p className='text-gray-600'>
            {loading ? 'Loading...' : `Total: ${data.length} appointments`}
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className='flex flex-col items-center justify-center py-20'>
            <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600'></div>
            <p className='mt-4 text-gray-600 font-medium'>Loading appointments...</p>
          </div>
        ) : (
          <>
            {/* Search */}
            <div className='bg-white text-black rounded-xl shadow-md p-4 md:p-6 mb-6'>
              <input
                type='text'
                placeholder='Search by name, phone, city, or treatment...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
              />
            </div>

            {data.length > 0 ? (
              <>
                <div className='hidden lg:block bg-white rounded-xl shadow-md overflow-hidden'>
                  <div className='overflow-x-auto'>
                    <table className='w-full'>
                      <thead className='bg-blue-600 text-white'>
                        <tr>
                          <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>#</th>
                          <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>Patient Name</th>
                          <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>Phone Number</th>
                          <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>Treatment</th>
                          <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>City</th>
                          <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>Date</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-gray-200'>
                        {filteredAppointments.map((apt, index) => (
                          <tr key={apt._id} className='hover:bg-gray-50 transition-colors'>
                            <td className='px-6 py-4 text-gray-600 font-medium'>{index + 1}</td>
                            <td className='px-6 py-4'>
                              <div className='font-semibold text-gray-900'>{apt.name}</div>
                            </td>
                            <td className='px-6 py-4 text-gray-700'>{apt.phoneno}</td>
                            <td className='px-6 py-4 text-gray-700'>{apt.treatment}</td>
                            <td className='px-6 py-4 text-gray-700'>{apt.city}</td>
                            <td className='px-6 py-4 flex gap-5 justify-center items-center'>
                              <div className='text-gray-700'>{apt.date}</div>
                              <p><MdDelete onClick={()=>deleteRecord(apt._id)} className='text-red-500 hover:scale-105 transition-all duration-200' /></p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Appointments Cards - Mobile & Tablet */}
                <div className='lg:hidden space-y-4'>
                  {filteredAppointments.map((apt, index) => (
                    <div key={apt._id} className='bg-white rounded-xl shadow-md p-5'>
                      <div className='flex items-start justify-between mb-4'>
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold'>
                            {index + 1}
                          </div>
                          <div>
                            <h3 className='font-bold text-gray-900 text-lg'>{apt.name}</h3>
                            <p className='text-sm text-blue-600 font-medium'>{apt.phoneno}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className='space-y-2 pl-13'>
                        <div className='flex items-start'>
                          <span className='text-gray-600 font-medium min-w-24 text-sm'>Treatment:</span>
                          <span className='text-gray-900 text-sm'>{apt.treatment}</span>
                        </div>
                        <div className='flex items-start'>
                          <span className='text-gray-600 font-medium min-w-24 text-sm'>City:</span>
                          <span className='text-gray-900 text-sm'>{apt.city}</span>
                        </div>
                        <div className='flex items-start'>
                          <span className='text-gray-600 font-medium min-w-24 text-sm'>Date:</span>
                          <span className='text-gray-900 text-sm'>{apt.date}</span>
                        </div>
                        <div className='flex items-start '>
                          <MdDelete onClick={()=>deleteRecord(apt._id)} className='text-red-500'/>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* No search results */}
                {filteredAppointments.length === 0 && (
                  <div className='bg-white rounded-xl shadow-md p-12 text-center'>
                    <svg className='w-16 h-16 text-gray-400 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                    </svg>
                    <h3 className='text-lg font-medium text-gray-900 mb-2'>No appointments found</h3>
                    <p className='text-gray-600'>Try adjusting your search criteria</p>
                  </div>
                )}
              </>
            ) : (
              /* No data at all */
              <div className='bg-white rounded-xl shadow-md p-12 text-center'>
                <svg className='w-16 h-16 text-gray-400 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                </svg>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>No appointments yet</h3>
                <p className='text-gray-600'>Appointments will appear here when patients book</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;