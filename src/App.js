import React, { useState, useEffect } from "react";
import Results from "./Results";
import Form from "./Form";
import MapWrapper from "./MapWrapper";
import Footer from "./Footer";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
    coordinates: [37.40599, -122.078514]
  });

  const getIpAddress = async (ipAddress = "") => {
    try {
      const res = await fetch(`/api/getIpInfo`, {
        method: "POST",
        body: JSON.stringify({
          address: ipAddress
        })
      });
      const ipInfo = await res.json();
      setIpAddress(ipInfo.data.ip);
      setIpData({
        ip: ipInfo.data.ip,
        location: `${ipInfo.data.location.city}, ${ipInfo.data.location.region} ${ipInfo.data.location.postalCode}`,
        timezone: `UTC${ipInfo.data.location.timezone}`,
        isp: ipInfo.data.isp,
        coordinates: [ipInfo.data.location.lat, ipInfo.data.location.lng]
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
