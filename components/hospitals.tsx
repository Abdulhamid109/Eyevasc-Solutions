import React from 'react';

const cities = [
  { name: 'Mumbai', tag: 'Maharashtra' },
  { name: 'Delhi', tag: 'NCR' },
  { name: 'Navi Mumbai', tag: 'Maharashtra' },
  { name: 'Pune', tag: 'Maharashtra' },
  { name: 'Uttar Pradesh', tag: 'North India' },
  { name: 'Ahmedabad', tag: 'Gujarat' },
];

const PinIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path
      d="M8 1.5C5.79 1.5 4 3.29 4 5.5c0 3.25 4 9 4 9s4-5.75 4-9c0-2.21-1.79-4-4-4z"
      fill="#378ADD"
    />
    <circle cx="8" cy="5.5" r="1.5" fill="#E6F1FB" />
  </svg>
);

const AllHospitals = () => {
  return (
    <section className="px-6 py-12 sm:px-10 sm:py-16 font-sans">

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-400">
            Operating locations
          </span>
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-400">
            India
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-tight mb-2">
          Where we operate
        </h1>
        <p className="text-sm text-gray-500">Hospitals across 6 cities nationwide</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {cities.map((city) => (
          <div
            key={city.name}
            className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <PinIcon />
            </div>
            <div>
              <p className="text-base font-medium text-gray-900 mb-1.5">{city.name}</p>
              <span className="text-[11px] font-medium tracking-wide text-blue-700 bg-blue-50 px-2 py-1 rounded-md">
                {city.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-6">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span className="text-xs text-gray-400">Active hospital location</span>
      </div>

    </section>
  );
};

export default AllHospitals;