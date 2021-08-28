import React, { useState, useEffect } from "react";
import Results from "./Results";
import Form from "./Form";
import MapWrapper from "./MapWrapper";
import Footer from "./Footer";

function App() {
  // const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_IP_API_KEY;

  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
    coordinates: [37.40599, -122.078514]
  });

  const getIpAddress = async (ipAddress = "") => {
    let ipExtension = "";
    if (ipAddress) {
      ipExtension = `&ipAddress=${ipAddress}`;
    }
    try {
      const res = await fetch(`/cors-proxy/${apiKey}${ipExtension}`);
      const data = await res.json();
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
    await getIpAddress(ipAddress);
  };

  return (
    <div className="h-screen">
      <header className="pt-6 lg:pt-8 h-72 lg:h-68 text-center pattern relative">
        <h1 className="text-2xl lg:text-3xl font-medium text-white mb-7">
          IP Address Tracker
        </h1>
        <Form
          ipAddress={ipAddress}
          setIpAddress={setIpAddress}
          handleSubmit={handleSubmit}
        />
        <Results ipData={ipData} />
      </header>
      <MapWrapper ipData={ipData} />
      <Footer />
    </div>
  );
}

export default App;
