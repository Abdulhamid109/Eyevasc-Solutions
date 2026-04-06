const cities = [
  { name: 'Mumbai', tag: 'Maharashtra' },
  { name: 'Delhi', tag: 'NCR' },
  { name: 'Navi Mumbai', tag: 'Maharashtra' },
  { name: 'Pune', tag: 'Maharashtra' },
  { name: 'Uttar Pradesh', tag: 'North India' },
  { name: 'Ahmedabad', tag: 'Gujarat' },
];

const AllHospitals = () => {
  return (
    <div className="w-full font-sans px-8 py-10">

      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-gray-400 mb-2">
            Operating Locations
          </p>
          <h1 className="text-3xl font-medium text-gray-900 leading-tight">
            Where we operate
          </h1>
        </div>
        <span className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full whitespace-nowrap">
          6 cities
        </span>
      </div>

      <div className="h-px bg-gray-200 mb-8" />

      <div className="grid grid-cols-3 border border-gray-200 rounded-xl overflow-hidden divide-x divide-y divide-gray-200">
        {cities.map((city) => (
          <div key={city.name} className="bg-white px-5 py-5 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-[10px] font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                {city.tag}
              </span>
            </div>
            <p className="text-base font-medium text-gray-900">{city.name}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-5">
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <span className="text-xs text-gray-400">Active hospital location</span>
      </div>

    </div>
  );
};

export default AllHospitals;