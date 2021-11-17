import React, { createContext, useState } from "react";
import ffxivhuntinglogdata from "../../data/ffxiv-hunting-log-data.json";

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
    const jobMarkers = ffxivhuntinglogdata
      .filter((logData) => logData.class === e.target.value)
      .map((jobMarker) => ({
        title: jobMarker.title,
        mobName: jobMarker.mobName,
        map: jobMarker.map,
        x: jobMarker.x,
        y: jobMarker.y,
        rank: jobMarker.rank,
      }));

    setMarkerFilter(jobMarkers);
    console.log(e.target.value);
  };

  const markerData = { markerFilter, setMarkerFilter, handleMarkers };

  return (
    <MarkerContext.Provider value={markerData}>
      {children}
    </MarkerContext.Provider>
  );
};

export default MarkerProvider;
