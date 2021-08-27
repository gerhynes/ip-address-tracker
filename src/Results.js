import React from "react";

export default function Results({ ipData }) {
  const { ip, location, timezone, isp } = ipData;
  return (
    <div>
      <div
        id="results"
        className="absolute top-43 lg:top-50 inset-x-0 z-20 mx-auto bg-white p-6 lg:p-8 text-center rounded-xl w-custom results-width flex flex-col lg:flex-row gap-5 lg:gap-8 lg:text-left shadow-md"
      >
        <div className="lg:pr-8 lg:border-r-2 lg:border-gray-200 flex-1">
          <p className="text-xxs lg:text-sm tracking-widest font-bold text-gray-400 uppercase mb-2 lg:mb-2">
            IP Address
          </p>
          <p className="text-xl font-medium lg:text-2xl lg:font-medium">
            {ip || "192.212.174.101"}
          </p>
        </div>
        <div className="lg:pr-8 lg:border-r-2 lg:border-gray-200 flex-1">
          <p className="text-xxs lg:text-sm tracking-widest font-bold text-gray-400 uppercase mb-2 lg:mb-2">
            Location
          </p>
          <p className="text-xl font-medium lg:text-2xl lg:font-medium">
            {location || "Brooklyn, NY 10001"}
          </p>
        </div>
        <div className="lg:pr-8 lg:border-r-2 lg:border-gray-200 flex-1">
          <p className="text-xxs lg:text-sm tracking-widest font-bold text-gray-400 uppercase mb-2 lg:mb-2">
            Timezone
          </p>
          <p className="text-xl font-medium lg:text-2xl lg:font-medium">
            {timezone || "UTC-05:00"}
          </p>
        </div>
        <div className="lg:pr-8 flex-1">
          <p className="text-xxs lg:text-sm tracking-widest font-bold text-gray-400 uppercase mb-2 lg:mb-2">
            ISP
          </p>
          <p className="text-xl font-medium lg:text-2xl lg:font-medium">
            {isp || "SpaceX Starlink"}
          </p>
        </div>
      </div>
    </div>
  );
}
