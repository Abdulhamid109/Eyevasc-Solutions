"use client"
import AdminNavbar from '@/components/AdminNavbar';
import Footer from '@/components/Footer';
import axios, { AxiosError } from 'axios';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import toast from 'react-hot-toast';

const AddHospitalPage = () => {
   

    const [hospitalName,setHospitalName] = useState<string>("");
    const [hospitalAddress,setHospitalAddress] = useState<string>("");
    const [location,setlocation] = useState<string>("");
    const [fileName,setfileName] = useState<string>("");
    const [file,setFile] =useState<File|null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const [link,setlink] = useState<string|null>(null)
    const fileRef = useRef<HTMLInputElement>(null);
    


    const handleFileChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files?.[0]){
            setfileName(e.target.files?.[0].name);
            setFile(e.target.files?.[0])
        }
    }

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const formdata = new FormData();
            formdata.append('hospitalName',hospitalName);
            formdata.append('hospitalAddress',hospitalAddress);
            formdata.append('location',location);
            formdata.append('fileName',fileName);
            formdata.append('hospitalPicBlob',file!);
            formdata.append('link',link!);


            const response = await axios.post("/api/admin/addhospital",formdata);
            if(response.status===200){
                toast.success("Successfully uploaded the data");
                fileRef.current!.value = "";
                setfileName("");
                setHospitalAddress("");
                setlocation("");
                setHospitalName("");


            }
            

        } catch (error) {
            console.log("Error"+JSON.stringify(error));
            if(error instanceof AxiosError){
                console.log(error.response?.data.error);
            }
        }finally{
            setLoading(false);
        }
    }
  return (
    <div>
        <AdminNavbar/>
        <div className=' '>
            

      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Add Hospital data
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Name *
              </label>
              <input
                type="text"
                id="name"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter the Hospital Name"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Address *
              </label>
              <input
                type="text"
                id="address"
                value={hospitalAddress}
                onChange={(e) => setHospitalAddress(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter the Hospital Address"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Link 
              </label>
              <input
                type="text"
                id="link"
                value={link!}
                onChange={(e) => setlink(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Hospital link (eg:https://eyehealthcure.com)"
              />
            </div>

             <div>
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                  Hospital Image
                </label>
                <div className="relative">
                  <input
                    id="image"
                    ref={fileRef}
                    onChange={handleFileChange}
                    type="file"
                    accept="image/jpg,image/jpeg,image/png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer transition duration-200"
                    required
                  />
                </div>
              </div>

            

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                location *
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select Hospital location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="pune">Pune</option>
                <option value="bihar">Bihar</option>
                <option value="uttarpradesh">Uttar Pradesh</option>
                <option value="bangalore">Bangalore</option>
              </select>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Adding...' : 'Add Hospital'}
            </button>

          </form>
        </div>
      </div>
    
        </div>
        <Footer/>
    </div>
  )
}

export default AddHospitalPage