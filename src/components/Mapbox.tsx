"use client";

import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker } from "react-map-gl";
import { Property } from "@prisma/client";

interface MapboxProps {
  properties: Array<Property> | Property;
  mapbox_key: string;
  rounded?: boolean;
}

export const Mapbox = ({ properties, mapbox_key, rounded = false }: MapboxProps) => {
  return (
    <Map
      mapboxAccessToken={mapbox_key}
      initialViewState={{
        longitude: Array.isArray(properties) ? -98.5795 : properties.lng,
        latitude: Array.isArray(properties) ? 39.8283 : properties.lat,
        zoom: 4,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={rounded ? {
        borderRadius: "0.75rem"
      } : {}}
    >
      {Array.isArray(properties) ? (
        properties.map((prop: Property) => (
          <Marker
            className="marker-custom"
            key={prop.id}
            longitude={prop.lng}
            latitude={prop.lat}
            color="#00487c"
            anchor="bottom"
          ></Marker>
        ))
      ) : (
        <Marker
          className="marker-custom"
          key={properties.id}
          longitude={properties.lng}
          latitude={properties.lat}
          color="#00487c"
          anchor="bottom"
        />
      )}
    </Map>
  );
};
