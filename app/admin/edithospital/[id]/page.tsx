"use client"
import AdminNavbar from '@/components/AdminNavbar';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const { id } = useParams();

// const [imagePreview, setImagePreview] = useState<string | null>(null);

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             const url = URL.createObjectURL(file);
//             setImagePreview(url);
//         }
//     };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminNavbar />
      <main className="flex-grow flex flex-col justify-center items-center p-4 md:p-6 h-screen ">
        <h1 className="font-bold text-3xl md:text-5xl p-4 md:p-5 text-center text-gray-800">
          Edit Hospital Data
        </h1>

        {/* {imagePreview && (
          <section className="flex justify-center items-center my-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-thin text-xl p-2 text-center">Image Preview</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-[80vw] md:max-w-[30vw] max-h-[35vh] rounded-md object-cover"
              />
            </div>
          </section>
        )} */}

        <section className="w-full max-w-md md:max-w-2xl bg-white border rounded-xl p-5 md:p-6 shadow-xl shadow-gray-200">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Hospital Name</label>
              <input
                type="text"
                placeholder="Enter Hospital Name"
                className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Hospital Address</label>
              <input
                type="text"
                placeholder="Enter Hospital Address"
                className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Hospital Image</label>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  // onChange={handleImageChange}
                  className="p-2 border border-gray-200 rounded-lg flex-grow"
                />
                <button
                  type="button"
                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Preview Image
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Hospital Location</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select Hospital Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="noida">Noida</option>
                <option value="pune">Pune</option>
                <option value="uttarpradesh">Uttar Pradesh</option>
                <option value="bangalore">Bangalore</option>
                <option value="navimumbai">Navi Mumbai</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Save Changes
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
