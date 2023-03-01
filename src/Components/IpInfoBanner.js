import React from "react";

const IpInfoBanner = ({ ipAddressData }) => {
  return (
    <div className="ip-info">
      {ipAddressData.length === 0 ? (
        <h1></h1>
      ) : (
        <div className="ip-info-text">
          <div>
            <p className="info-section-title">IP Address</p>
            <p className="info">{ipAddressData.ip}</p>
          </div>
          <div className="vl"></div>
          <div>
            <p className="info-section-title">location</p>
            <p className="info">
              {ipAddressData.location.city} {ipAddressData.location.region}{" "}
              {ipAddressData.location.postalCode}
            </p>
          </div>
          <div className="vl"></div>
          <div>
            <p className="info-section-title">Timezone</p>
            <p className="info"> UTC {ipAddressData.location.timezone}</p>
          </div>
          <div className="vl"></div>
          <div>
            <p className="info-section-title">ISP</p>
            <p className="info">{ipAddressData.isp}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IpInfoBanner;
