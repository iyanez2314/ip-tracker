import React from "react";

const IpInfoBanner = ({ ipAddressData }) => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      {ipAddressData.length === 0 ? (
        <h1> nothing here</h1>
      ) : (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <p>IP address</p>
            <p>{ipAddressData.ip}</p>
          </div>
          <div>
            <p>Timezone</p>
            <p>{ipAddressData.location.timezone}</p>
          </div>
          <div>
            <p>location</p>
            <p>
              {ipAddressData.location.city} {ipAddressData.location.region}{" "}
              {ipAddressData.location.postalCode}
            </p>
          </div>
          <div>
            <p>ISP</p>
            <p>{ipAddressData.isp}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IpInfoBanner;
