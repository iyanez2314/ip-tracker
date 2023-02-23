import React, { useState } from "react";
import axios from "axios";
import IpInfoBanner from "./Components/IpInfoBanner";
import MapContainer from "./Components/MapComponent";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
  const API =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_p5cKbnGcCUjfca8bQmyHRBLLRK55d&ipAddress=8.8.8.8";
  const [ipAdress, setIpAdress] = useState("");
  const [ipAddressData, setIpAddressData] = useState([]);

  // This is the function that will allow us to receive any information from out child so we can pass it to our children.
  const handleSeach = async (ipAdress) => {
    try {
      const response = await axios.get(API);
      setIpAddressData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSeach} />
      <IpInfoBanner ipAddressData={ipAddressData} />
      <MapContainer />
    </div>
  );
}

export default App;
