import React, { useState } from "react";
import axios from "axios";
import IpInfoBanner from "./Components/IpInfoBanner";
import Map from "./Components/MapComponent";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
  const API =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_p5cKbnGcCUjfca8bQmyHRBLLRK55d&ipAddress=";
  // const [ipAdress, setIpAdress] = useState("");
  const [ipAddressData, setIpAddressData] = useState([]);
  const [latlong, setLatLong] = useState([]);

  // This is the function that will allow us to receive any information from out child so we can pass it to our children.
  const handleSeach = async (ipAdress) => {
    try {
      const response = await axios.get(API + ipAdress);
      setIpAddressData(response.data);
      setLatLong([
        {
          lat: response.data.location.lat,
          lng: response.data.location.lng,
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSeach} />
      <IpInfoBanner ipAddressData={ipAddressData} />
      {latlong.length === 0 ? (
        <h1>No map to display</h1>
      ) : (
        <Map latlong={latlong} />
      )}
    </div>
  );
}

export default App;
