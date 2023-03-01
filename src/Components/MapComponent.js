import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ key, latlong }) => {
  const [cords, setCords] = useState(latlong);
  useEffect(() => {
    setCords(latlong);
  }, [latlong]);
  return (
    <div>
      <MapContainer
        key={key}
        className="map-container"
        center={[cords[0].lat, cords[0].lng]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[cords[0].lat, cords[0].lng]}>
          <Popup>{[cords[0].lat, cords[0].lng]}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
