import React, { useState, useEffect } from "react";

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
        style={{
          height: "58px",
          width: "261px",
          border: "none",
          borderRadius: "10px 0px 0px 10px",
          paddingLeft: "10px",
          fontSize: "16px",
        }}
        type="text"
        placeholder="8.8.8.8"
        value={ipAdress}
        onChange={handleUserInput}
      />
      <button
        style={{
          height: "60px",
          width: "58px",
          borde: "none",
          borderRadius: "0px 10px 10px 0px",
          color: "white",
          background: "black",
        }}
        onClick={handleSeach}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
