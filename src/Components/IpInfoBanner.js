import React from "react";

const IpInfoBanner = ({ ipAddressData }) => {
  console.log(ipAddressData);
  return (
    <div>
      {ipAddressData.length === 0 ? (
        <div>
          <h1>No Info to display at this time</h1>
        </div>
      ) : (
        <div>
          <h1>IP address</h1>
          <h1>{ipAddressData.ip}</h1>
          <h1>location</h1>
          <h1>
            {ipAddressData.location.city} {ipAddressData.location.region}{" "}
            {ipAddressData.location.postalCode}
          </h1>
          <h1>ISP</h1>
          <h1>{ipAddressData.isp}</h1>
        </div>
      )}
    </div>
  );
};

export default IpInfoBanner;
