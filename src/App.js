import { useState, useEffect } from "react";

function App() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "https://geo.ipify.org/api/v1?apiKey=";
  const apiKey = process.env.REACT_APP_IP_API_KEY;

  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: ""
  });

  const getIpAddress = async () => {
    try {
      const res = await fetch("data.json");
      const data = await res.json();
      console.log(data);
      setIpAddress(data.ip);
      setIpData({
        ip: data.ip,
        location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
        timezone: `UTC${data.location.timezone}`,
        isp: data.isp
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
      <header className="pt-7 px-6 h-2/5 text-center pattern md:pt-9">
        <h1 className="text-3xl text-bold text-white mb-8 md:text-4xl">
          IP Address Tracker
        </h1>
        <form
          action="#"
          className="w-full max-w-xl mx-auto flex"
          onSubmit={handleSubmit}
        >
          <input
            className="flex-auto py-4 px-6 rounded-l-xl text-xl"
            type="text"
            placeholder="Search for any IP address or domain"
            value={ipAddress || ""}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button className="bg-black rounded-r-xl px-4">
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
      </header>
      <section className="px-6 absolute w-full">
        <div className="bg-white transform -translate-y-1/2 mt-6 mx-auto p-8 text-center rounded-xl max-w-6xl lg:mt-0 lg:flex lg:gap-8 lg:text-left">
          <div className="lg:pr-8 lg:border-r-2 lg:border-gray-200">
            <p className="text-sm font-medium text-gray-400 uppercase mb-2 lg:text-lg">
              IP Address
            </p>
            <p className="text-xl font-bold mb-4 lg:text-3xl lg:font-medium">
              {ipData.ip || "192.212.174.101"}
            </p>
          </div>
          <div className="lg:pr-8 lg:border-r-2 lg:border-gray-200">
            <p className="text-sm font-medium text-gray-400 uppercase mb-2 lg:text-lg">
              Location
            </p>
            <p className="text-xl font-bold mb-4 lg:text-3xl lg:font-medium">
              {ipData.location || "Brooklyn, NY 10001"}
            </p>
          </div>
          <div className="lg:pr-8 lg:border-r-2 lg:border-gray-200">
            <p className="text-sm font-medium text-gray-400 uppercase mb-2 lg:text-lg">
              Timezone
            </p>
            <p className="text-xl font-bold mb-4 lg:text-3xl lg:font-medium">
              {ipData.timezone || "UTC-05:00"}
            </p>
          </div>
          <div className="lg:pr-8">
            <p className="text-sm font-medium text-gray-400 uppercase mb-2 lg:text-lg">
              ISP
            </p>
            <p className="text-xl font-bold lg:text-3xl lg:font-medium">
              {ipData.isp || "SpaceX Starlink"}
            </p>
          </div>
        </div>
      </section>
      <section className="h-3/5">
        <div className="h-full bg-blue-200" id="map"></div>
      </section>
      <footer className="p-4 mt-auto text-center bg-blue-500 text-blue-200">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/GK-Hynes">Gerard Hynes</a>.
      </footer>
    </div>
  );
}

export default App;
