"use client"
import AdminNavbar from '@/components/AdminNavbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


interface EditDataFormat {
  hospitalName: string;
  hospitalAddress: string;
  hospitalPic: string;
  location: string;
  link: string;


}

const Page = () => {
  const { id } = useParams();
  const [prevData, setPrevData] = useState<EditDataFormat | null>(null);

  const [ImageLink, setImageLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formloading, setFormloading] = useState<boolean>(false);


  const handleFileData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      FileToURL(e.target.files?.[0], e.target.files?.[0].name)
    }
  }

  const FileToURL = async (file: File, fileName: string) => {
    setLoading(true);
    try {
      const formdata = new FormData();
      formdata.append('file', file);
      formdata.append('fileName', fileName);
      const response = await axios.post("/api/admin/uploadImage", formdata);
      if (response.status === 200) {
        console.log("URL=>" + response.data.url);
        setImageLink(response.data.url)
      }
    } catch (error) {
      console.log("Failed to perform the functionality" + error);
      if (error instanceof AxiosError) {
        console.log("A-Err" + error);
      }

    } finally {
      setLoading(false);
    }
  }

  const getHospitalData = async () => {
    setFormloading(true)
    try {
      const response = await axios.get(`/api/admin/allhospitals/${id}`);
      if (response.status === 200) {
        setPrevData(response.data.hospital)
      }
    } catch (error) {
      console.log("Failed to perform the functionality" + error);
      if (error instanceof AxiosError) {
        console.log("A-Err" + error);
      }
    } finally {
      setFormloading(false)
    }
  }


  const onEditData = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const response = await axios.put(`/api/admin/edithospital/${id}`, {

        hospitalName: prevData?.hospitalName,
        hospitalAddress: prevData?.hospitalAddress,
        hospitalPic: ImageLink ?ImageLink:prevData?.hospitalPic,
        location: prevData?.location,
      });

      if (response.status === 200) {
        setPrevData(response.data.hospital);
        // toast.success(response.data.message);
        setPrevData({
          hospitalAddress: "",
          hospitalName: "",
          hospitalPic: "",
          location: "",
          link: ""
        })
      }


    } catch (error) {
      console.log("Failed to perform the functionality" + error);
      if (error instanceof AxiosError) {
        console.log("A-Err" + error);
      }
    } finally {
      // setFormloading(false);
    }
  }

  // const [imagePreview, setImagePreview] = useState<string | null>(null);

  //     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //         const file = e.target.files?.[0];
  //         if (file) {
  //             const url = URL.createObjectURL(file);
  //             setImagePreview(url);
  //         }
  //     };

  useEffect(() => {
    const displayHospitalData = async () => await getHospitalData();

    displayHospitalData();
  }, [])
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

        {
          formloading ? <p className='w-screen h-screen flex justify-center items-center font-semibold animate-pulse text-red-500'>Loading Form.......</p>
            :
            <section className="w-full max-w-md md:max-w-2xl bg-white border rounded-xl p-5 md:p-6 shadow-xl shadow-gray-200">
              <form onSubmit={onEditData} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Hospital Name</label>
                  <input
                    type="text"
                    value={prevData?.hospitalName}
                    onChange={(e) => setPrevData({ ...prevData!, hospitalName: e.target.value })}

                    placeholder="Enter Hospital Name"
                    className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Hospital Address</label>
                  <input
                    type="text"
                    value={prevData?.hospitalAddress}
                    onChange={(e) => setPrevData({ ...prevData!, hospitalAddress: e.target.value })}
                    placeholder="Enter Hospital Address"
                    className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Hospital Image</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      onChange={handleFileData}
                      className="p-2 border border-gray-200 rounded-lg flex-grow"
                    />
                    <Dialog>
                      <DialogTrigger><button
                        type="button"
                        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Preview Image
                      </button></DialogTrigger>
                      <DialogContent>
                        <DialogTitle><p>Image Preview</p></DialogTitle>
                        {loading ? <p className='flex justify-center items-center max-w-full max-h-full'>Loading Preview</p> :
                          <div className='h-[20vh] w-[20vw] p-2'>
                            <Image
                              src={ImageLink}
                              alt="no image"
                              width={400}
                              height={400}
                            />
                          </div>
                        }
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Hospital Location</label>
                  <select
                    value={prevData?.location}
                    onChange={(e) => setPrevData({ ...prevData!, location: e.target.value })}

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
        }
      </main>
      <Footer />
    </div>
  );
};

export default Page;
