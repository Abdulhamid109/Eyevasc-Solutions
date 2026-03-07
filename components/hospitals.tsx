import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Data {
    _id: string;
    hospitalName: string;
    hospitalAddress: string;
    hospitalPic: string;
    location: string;
}

const AllHospitals = () => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const cities = ['Mumbai', 'Navi Mumbai', 'Pune', 'Uttar Pradesh', 'Ahmedabad'];
    const [activeCity, setActiveCity] = useState<string>('Mumbai');

    const displayHospitals = async (location: string) => {
        setActiveCity(location);
        setLoading(true);

        try {
            const response = await axios.get(`/api/admin/hospitals?city=${location.toLowerCase()}`);
            if (response.status === 200) {
                setData(response.data.hospitals);
            }
        } catch (error) {
            console.log('Failed to perform the functionality=>' + JSON.stringify(error));
            if (error instanceof AxiosError) {
                console.log('Error' + JSON.stringify(error));
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        displayHospitals('Mumbai');
    }, []);

    return (
        <div className="w-full">
            <section className="flex flex-col justify-center items-center gap-4 p-4 sm:p-6">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold p-2 text-center leading-tight">
                    Our Top Accredited Hospitals
                </h1>

                <div className="w-full overflow-x-auto scrollbar-hide">
                    <div className="flex gap-2 px-3 pb-2 w-max mx-auto sm:w-full sm:flex-wrap sm:justify-center">
                        {cities.map((city) => (
                            <button
                                key={city}
                                onClick={() => displayHospitals(city)}
                                className={`px-3 py-1.5 rounded-2xl border-2 cursor-pointer whitespace-nowrap transition-all duration-200 text-sm sm:text-base
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

                {loading ? (
                    <div className="w-full overflow-x-auto scrollbar-hide">
                        <div className="flex gap-4 px-3 pb-3 w-max">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-2 p-3 bg-blue-50 rounded-md shadow-lg w-64 flex-shrink-0 animate-pulse"
                                >
                                    <div className="w-full h-36 bg-gray-200 rounded-md" />
                                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                                    <div className="h-4 bg-gray-200 rounded w-full" />
                                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                                    <div className="h-9 bg-gray-200 rounded w-full mt-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="w-full overflow-x-auto scrollbar-hide">
                        <div className="flex flex-row gap-4 px-3 pb-3 w-max">
                            {data.map((hospital, index) => (
                                <div
                                    key={hospital._id}
                                    className="flex flex-col p-3 gap-2 bg-blue-50 rounded-md shadow-lg
                                               w-64 flex-shrink-0"
                                >
                                    <div className="rounded-md w-full overflow-hidden">
                                        <Image
                                            src={hospital.hospitalPic}
                                            alt={hospital.hospitalName}
                                            loading={index < 3 ? 'eager' : 'lazy'}
                                            decoding={index < 3 ? 'sync' : 'async'}
                                            fetchPriority={index === 0 ? 'high' : 'auto'}
                                            width={256}
                                            height={144}
                                            className="w-full h-36 object-cover rounded-md"
                                            style={{ aspectRatio: '16/9' }}
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <h2 className="text-lg sm:text-xl font-bold px-1 truncate w-full">
                                        {hospital.hospitalName}
                                    </h2>
                                    <p className="px-1 text-sm text-gray-500 line-clamp-2">
                                        {hospital.hospitalAddress}
                                    </p>

                                    {/* Spacer pushes button to bottom */}
                                    <div className="flex-1" />

                                    {/* Book Button — centered */}
                                    <Link
                                        href="/booknow"
                                        className="flex items-center justify-center p-2 w-full text-white text-sm font-medium
                                                   bg-blue-500 rounded-md hover:bg-blue-600
                                                   transition-all duration-200 hover:scale-105 text-center"
                                    >
                                        Book Appointment
                                    </Link>
                                </div>
                            ))}

                            <div className="flex flex-col justify-center items-center p-3 gap-3 bg-blue-50 rounded-md shadow-lg
                                            w-64 flex-shrink-0
                                            min-h-[240px] md:h-auto md:self-stretch
                                            border-2 border-dashed border-blue-300">
                                <p className="text-gray-400 text-sm text-center">
                                    Explore our complete network
                                </p>
                                <Link
                                    href="/allhospitals"
                                    className="flex items-center justify-center p-2 px-4 text-white text-sm font-medium
                                               bg-blue-500 rounded-md hover:bg-blue-600
                                               transition-all duration-200 hover:scale-105"
                                >
                                    Find All Hospitals
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

            </section>
        </div>
    );
};

export default AllHospitals;