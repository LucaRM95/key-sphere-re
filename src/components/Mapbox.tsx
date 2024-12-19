"use client";

import React, { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker } from "react-map-gl";
import { Property } from "@prisma/client";

interface MapboxProps {
  properties: Array<Property>;
  mapbox_key: string;
}

export const Mapbox = ({ properties, mapbox_key }: MapboxProps) => {
  return (
    <Map
      mapboxAccessToken={mapbox_key}
      initialViewState={{
        longitude: -98.5795,
        latitude: 39.8283,
        zoom: 4,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {properties.map((prop: Property) => (
        <Marker
          className="marker-custom"
          key={prop.id}
          longitude={prop.lng}
          latitude={prop.lat}
          color="#00487c"
          anchor="bottom"
        ></Marker>
      ))}
    </Map>
  );
};