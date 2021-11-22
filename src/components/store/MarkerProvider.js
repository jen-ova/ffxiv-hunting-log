import React, { createContext, useState } from "react";
import constants from "../../data/constants";
import ffxivhuntinglogdata from "../../data/ffxiv-hunting-log-data.json";

export const MarkerContext = createContext();

const MarkerProvider = ({ children }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(constants.jobs.length).fill(false)
  );
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

  const handleMarkers = (e, position) => {
    e.preventDefault();
    
    const updatedCheckedState = checkedState.map((item, index) => index === position ? !item : item);
    
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
    setCheckedState(updatedCheckedState);
    console.log(e.target.value);
  };

  const markerData = { markerFilter, setMarkerFilter, handleMarkers, checkedState };

  return (
    <MarkerContext.Provider value={markerData}>
      {children}
    </MarkerContext.Provider>
  );
};

export default MarkerProvider;
