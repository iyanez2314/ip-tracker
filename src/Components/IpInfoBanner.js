import React from "react";

const IpInfoBanner = ({ ipAddressData }) => {
  return (
    <div className="ip-info">
      {ipAddressData.length === 0 ? (
        <h1> nothing here</h1>
      ) : (
        <div className="ip-info-text">
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
