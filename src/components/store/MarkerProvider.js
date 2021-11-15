import React, { createContext, useState } from "react";
import ffxivhuntinglogdata from "../../data/ffxiv-hunting-log-data.json";

export const MarkerContext = createContext();

const MarkerProvider = ({ children }) => {
  const [markerFilter, setMarkerFilter] = useState();

  const handleMarkers = (e) => {
    e.preventDefault();
    const arcanistData = ffxivhuntinglogdata.filter(
      (logData) => logData.class === "ACN"
    );
    const arcanistMarkers = arcanistData.map((arcMarker) => ({
      title: arcMarker.title,
      map: arcMarker.map,
      x: arcMarker.x,
      y: arcMarker.y,
    }));
    setMarkerFilter(arcanistData);
    console.log(arcanistMarkers);
  };

  const markerData = { markerFilter, setMarkerFilter, handleMarkers };

  return (
    <MarkerContext.Provider value={markerData}>
      {children}
    </MarkerContext.Provider>
  );
};

export default MarkerProvider;
