import React, { createContext, useState } from "react";
import ffxivhuntinglogdata from "../../data/ffxiv-hunting-log-data.json";
// import mapImages from "../../data/mapImages.json";

export const MarkerContext = createContext();

const MarkerProvider = ({ children }) => {
  const [markerFilter, setMarkerFilter] = useState([
    {
      class: "",
      title: "",
      mobName: "",
      map: "",
      x: null,
      y: null,
      rank: null,
    },
  ]);

  const handleMarkers = (e) => {
    e.preventDefault();
    const arcanistMarkers = ffxivhuntinglogdata
      .filter((logData) => logData.class === "ACN")
      .map((arcMarker) => ({
        title: arcMarker.title,
        mobName: arcMarker.mobName,
        map: arcMarker.map,
        x: arcMarker.x,
        y: arcMarker.y,
      }));

    setMarkerFilter(arcanistMarkers);
  };

  const markerData = { markerFilter, setMarkerFilter, handleMarkers };

  return (
    <MarkerContext.Provider value={markerData}>
      {children}
    </MarkerContext.Provider>
  );
};

export default MarkerProvider;
