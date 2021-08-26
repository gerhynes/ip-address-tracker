import React, { useState, useEffect } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const marker = L.icon({
  iconUrl: require("./images/marker.png"),
  iconSize: 100
});

function App() {
  const proxyUrl = process.env.REACT_APP_PROXY_URL;
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_IP_API_KEY;

  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
    coordinates: [37.40599, -122.078514]
  });

  const getIpAddress = async () => {
    try {
      // const res = await fetch(
      //   `${proxyUrl}${apiUrl}${apiKey}`
      // );
      const res = await fetch("data.json");
      const data = await res.json();
      console.log(data);
      setIpAddress(data.ip);
      setIpData({
        ip: data.ip,
        location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
        timezone: `UTC${data.location.timezone}`,
        isp: data.isp,
        coordinates: [data.location.lat, data.location.lng]
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getIpAddress();
  };

  return (
    <div className="h-screen">
      <header className="pt-6 lg:pt-8 h-72 lg:h-68 text-center pattern relative">
        <h1 className="text-2xl lg:text-3xl font-medium text-white mb-7">
          IP Address Tracker
        </h1>
        <form
          action="#"
          className="w-custom max-w-xl mx-auto flex"
          onSubmit={handleSubmit}
        >
          <input
            className="flex-auto py-3.5 px-6 rounded-l-xl text-lg text-gray-700"
            type="text"
            placeholder="Search for any IP address or domain"
            value={ipAddress || ""}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button
            className="bg-black rounded-r-xl px-4 hover:bg-gray-700"
            aria-label="Search for IP Address"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>
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
                {"192.212.174.101"}
              </p>
            </div>
            <div className="lg:pr-8 lg:border-r-2 lg:border-gray-200 flex-1">
              <p className="text-xxs lg:text-sm tracking-widest font-bold text-gray-400 uppercase mb-2 lg:mb-2">
                Location
              </p>
              <p className="text-xl font-medium lg:text-2xl lg:font-medium">
                {"Brooklyn, NY 10001"}
              </p>
            </div>
            <div className="lg:pr-8 lg:border-r-2 lg:border-gray-200 flex-1">
              <p className="text-xxs lg:text-sm tracking-widest font-bold text-gray-400 uppercase mb-2 lg:mb-2">
                Timezone
              </p>
              <p className="text-xl font-medium lg:text-2xl lg:font-medium">
                {"UTC-05:00"}
              </p>
            </div>
            <div className="lg:pr-8 flex-1">
              <p className="text-xxs lg:text-sm tracking-widest font-bold text-gray-400 uppercase mb-2 lg:mb-2">
                ISP
              </p>
              <p className="text-xl font-medium lg:text-2xl lg:font-medium">
                {"SpaceX Starlink"}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="h-3/5 relative bg-blue-400">
        {/* <Map
          className="h-full z-10"
          center={ipData.coordinates}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/gerhynes/cksrl5lc32bu318lja60yfmlm/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_API_KEY}`}
          />
          <Marker position={ipData.coordinates} icon={marker}>
            <Popup>{ipData.location}</Popup>
          </Marker>
        </Map> */}
      </section>
      <footer className="p-4 mt-auto text-center bg-blue-500 text-white">
        Challenge by{" "}
        <a
          className="text-blue-200"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-blue-200" href="https://github.com/GK-Hynes">
          Gerard Hynes
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
