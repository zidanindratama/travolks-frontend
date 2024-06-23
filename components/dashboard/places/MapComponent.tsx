import React from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.icon({
  iconUrl: "/images/marker.svg",
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent: React.FC<{
  position: [number, number];
  handleClick: (e: any) => void;
}> = ({ position, handleClick }) => {
  return (
    <MapContainer
      className="w-full h-96 mt-2"
      center={position}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickHandler handleClick={handleClick} />
      <ChangeView center={position} zoom={10} />
      <Marker position={position} icon={customIcon}>
        <Popup>Your selected location</Popup>
      </Marker>
    </MapContainer>
  );
};

const ClickHandler: React.FC<{ handleClick: (e: any) => void }> = ({
  handleClick,
}) => {
  useMapEvents({
    click: (e: any) => {
      handleClick(e);
    },
  });
  return null;
};

// @ts-ignore
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

export default MapComponent;
