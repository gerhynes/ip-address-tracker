import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const marker = L.icon({
  iconUrl: require("./images/icon-location.svg"),
  iconSize: 50
});

export default function MapWrapper({ ipData }) {
  const { location, coordinates } = ipData;
  return (
    <section className="h-3/5 relative">
      <Map
        className="h-full z-10"
        center={coordinates}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/gerhynes/cksrl5lc32bu318lja60yfmlm/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_API_KEY}`}
        />
        <Marker position={coordinates} icon={marker}>
          <Popup>{location}</Popup>
        </Marker>
      </Map>
    </section>
  );
}
