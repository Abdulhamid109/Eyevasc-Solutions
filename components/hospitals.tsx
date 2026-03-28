import React, { useState } from 'react';

const cities = [
    { name: 'Mumbai', tag: 'Maharashtra' },
    { name: 'Delhi', tag: 'NCR' },
    { name: 'Navi Mumbai', tag: 'Maharashtra' },
    { name: 'Pune', tag: 'Maharashtra' },
    { name: 'Uttar Pradesh', tag: 'North India' },
    { name: 'Ahmedabad', tag: 'Gujarat' },
];

const AllHospitals = () => {
    const [activeCity, setActiveCity] = useState<string>('Mumbai');

    

    return (
        <div className="w-full font-[DM_Sans]">
            <section className="flex flex-col p-6 sm:p-10 gap-1">

                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-400">
                    Operating Locations
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl font-normal text-gray-900 leading-tight">
                    Where we operate
                </h1>
                

                <div className="grid grid-cols-3 gap-2.5">
                    {cities.map((city) => (
                        <button
                            key={city.name}
                            className={`relative text-left border rounded-xl p-4 transition-all duration-200 overflow-hidden
                               
                                     bg-white  hover:bg-gray-50 hover:-translate-y-px
                                `}
                        >
                            <div className={`w-1.5 h-1.5 rounded-full mb-2 
                               bg-gray-300`}
                            />
                            <span className={`block text-[20px] font-medium mb-0.5 text-gray-800`}>
                                {city.name}
                            </span>
                            <span className={`text-[10px] uppercase tracking-wide
                                text-gray-400`}>
                                {city.tag}
                            </span>

                            <div className={`absolute bottom-0 left-0 right-0 h-0.5  transition-transform duration-200
                                ${activeCity === city.name ? 'scale-x-100' : 'scale-x-0'}`}
                            />
                        </button>
                    ))}
                </div>

                

            </section>
        </div>
    );
};

export default AllHospitals;