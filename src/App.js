import React, { useState } from "react";
import axios from "axios";
import IpInfoBanner from "./Components/IpInfoBanner";
import Map from "./Components/MapComponent";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import background from "./Images/pattern-bg-desktop.png";

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
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="header"
        style={{
          backgroundImage: `url(${background})`,
          height: "280px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="tracker-header" style={{ height: "50px" }}>
          <h1 style={{ color: "white" }}>IP Address Tracker</h1>
        </div>
        <SearchBar onSearch={handleSeach} />
      </div>
      <div
        className="info-banner-container"
        style={{
          background: "white",
          width: "255px",
          height: "294px",
          borderRadius: "10px",
          position: "absolute",
          zIndex: 99999,
          top: "224px",
          left: "50px",
        }}
      >
        <IpInfoBanner ipAddressData={ipAddressData} />
      </div>
      {latlong.length === 0 ? (
        <h1>No map to display</h1>
      ) : (
        <Map latlong={latlong} />
      )}
    </div>
  );
}

export default App;
