import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface Data {
    _id: string
    hospitalName: string;
    hospitalAddress: string;
    hospitalPic: string;
    location: string;
}

const AllHospitals = () => {
    const [data, setdata] = useState<Data[]>([]);
    const cities = ['Mumbai', 'Delhi', 'Navi Mumbai', 'Pune', 'Bangalore','Lucknow' ,'Ahmedabad']
    const [activeCity, setActiveCity] = useState<string>('Mumbai');

    const displayHospitals = async (location: string) => {
        setActiveCity(location); 

        try {
            const response = await axios.get(`/api/admin/hospitals?city=${location.toLowerCase()}`);
            if (response.status === 200) {
                setdata(response.data.hospitals);
            }
        } catch (error) {
            console.log("Failed to perform the functionality=>" + JSON.stringify(error));
            if (error instanceof AxiosError) {
                console.log("Error" + JSON.stringify(error))
            }
        }
    }

    useEffect(() => {
        const displayIntialHospitals = async()=>{
            await displayHospitals("Mumbai");
        }

        displayIntialHospitals();
    }, [])

    return (
        <div className='w-full'>
            <section className='flex flex-col justify-center items-center gap-4 p-4'>

                <h1 className='md:text-4xl text-2xl font-bold p-2 text-center'>
                    Our Top Accredited Hospitals
                </h1>

                <div className='w-full overflow-x-auto'>
                    <div className='flex justify-evenly gap-2 px-3 pb-1 w-full'>
                        {cities.map((city) => (
                            <button
                                key={city}
                                onClick={() => displayHospitals(city)}
                                className={`px-3 py-1 rounded-2xl border-2 cursor-pointer whitespace-nowrap transition-all duration-200
                                    ${activeCity === city  
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-gray-200 text-black border-transparent hover:bg-gray-300'
                                    }`}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='w-full overflow-x-auto'>
                    <div className='flex gap-4 px-3 pb-3 w-max'>
                        {data.map((hospital) => (
                            <div
                                key={hospital._id}
                                className='flex flex-col justify-start items-start p-3 gap-2 bg-blue-50 rounded-md shadow-lg w-64 flex-shrink-0'
                            >
                                <div className='rounded-md w-full'>
                                    <img
                                        src={hospital.hospitalPic}
                                        alt={hospital.hospitalName}
                                        className='w-full h-36 object-cover rounded-md'
                                    />
                                </div>
                                <h2 className='text-xl font-bold px-1 truncate w-full'>{hospital.hospitalName}</h2>
                                <p className='px-1 text-sm text-gray-500'>{hospital.hospitalAddress}</p> 
                                <Link href={"/booknow"} className='p-2 w-full text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-200 hover:scale-105'>
                                    Book Appointment
                                </Link>
                            </div>
                        ))}

                        <div className='flex flex-col justify-center items-center p-3 gap-2 bg-blue-50 rounded-md shadow-lg w-64 flex-shrink-0 h-[50vh] border-2 border-dashed border-blue-300'>
                            <p className='text-gray-400 text-sm text-center'>Explore our complete network</p>
                            <Link href={"/allhospitals"} className='p-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-200 hover:scale-105'>
                                Find All Hospitals
                            </Link>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default AllHospitals