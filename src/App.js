import React, { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import Form from "./Form";
import Results from "./Results";
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
  const [isError, setIsError] = useState(false);

  const getIpAddress = async (ipAddress = "") => {
    try {
      const res = await fetch(`/api/getIpInfo`, {
        method: "POST",
        body: JSON.stringify({
          searchTerm: ipAddress
        })
      });
      const ipInfo = await res.json();
      const { data } = ipInfo;
      setIsError(false);
      setIpAddress(data.ip);
      setIpData({
        ip: data.ip,
        location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
        timezone: `UTC${data.location.timezone}`,
        isp: data.isp,
        coordinates: [data.location.lat, data.location.lng]
      });
    } catch (err) {
      setIsError(true);
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
      {isError ? <ErrorMessage /> : null}
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
