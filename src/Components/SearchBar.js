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
        type="text"
        placeholder="8.8.8.8"
        value={ipAdress}
        onChange={handleUserInput}
      />
      <button onClick={handleSeach}>Search</button>
    </div>
  );
};

export default SearchBar;
