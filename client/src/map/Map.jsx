import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const ChangeMapView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
};
function Map({ position }) {
  return (
    <MapContainer
      center={[37.2774, 9.8749]}
      zoom={12}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        eventHandlers={{
          click: () => {
            console.log("marker clicked!");
          },
        }}
        position={[position.lat || 0, position.lon || 0]}
      >
        <Popup>
          <b>
            Country:{" "}
            <strong style={{ color: "red" }}>{position.country}</strong>
          </b>
          <br />
          <b>
            City: <strong style={{ color: "red" }}>{position.city}</strong>
          </b>
          <br />
          <b>
            Latitude: <strong style={{ color: "red" }}>{position.lat}</strong>
          </b>
          <br />
          <b>
            Longitude: <strong style={{ color: "red" }}>{position.lon}</strong>
          </b>
        </Popup>
      </Marker>
      <ChangeMapView center={[position.lat || 0, position.lon || 0]} />
    </MapContainer>
  );
}

export default Map;
