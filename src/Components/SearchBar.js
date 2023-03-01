import React, { useState, useEffect } from "react";
import arrowImage from "../Images/Arrow-right.png";

const SearchBar = ({ onSearch }) => {
  const [ipAdress, setIpAdress] = useState("");

  const handleUserInput = (event) => {
    setIpAdress(event.target.value);
  };

  const handleSeach = async () => {
    onSearch(ipAdress);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for IP address or domain"
        value={ipAdress}
        onChange={handleUserInput}
      />
      <button onClick={handleSeach}>
        <img
          src={arrowImage}
          style={{ width: "25px", height: "25px", color: "red" }}
          alt="arrow pointing right"
        />
      </button>
    </div>
  );
};

export default SearchBar;
