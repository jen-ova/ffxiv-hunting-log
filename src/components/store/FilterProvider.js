import React, { createContext, useState, useEffect } from "react";
import mapImages from "../../data/mapImages.json";
import ffxivhuntinglogdata from "../../data/ffxiv-hunting-log-data.json";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  // default unchecked job filter
  const [checkedState, setCheckedState] = useState({
    GLD: false,
    PUG: false,
    MRD: false,
    LNC: false,
    ARC: false,
    ROG: false,
    CNJ: false,
    THM: false,
    ACN: false,
  });
  // default map
  const [mapOverlayImage, setMapOverlayImage] = useState({
    title: "Middle La Noscea",
    src: "assets/maps/middle-la-noscea.jpg",
  });
  // default rank
  const [rank, setRank] = useState(1);
  // default marker list - empty
  const [markerList, setMarkerList] = useState([]);

  //  handler to update checked job list & set marker list to relevant selected job(s), current map & current rank
  const handleChange = (jobName) => {
    setCheckedState({ ...checkedState, [jobName]: !checkedState[jobName] });
  };

  useEffect(() => {
    const jobMarkers = ffxivhuntinglogdata
      .filter((logData) => checkedState[logData.class] === true)
      .map((jobMarker) => ({
        title: jobMarker.title,
        mobName: jobMarker.mobName,
        map: jobMarker.map,
        x: jobMarker.x,
        y: jobMarker.y,
        rank: jobMarker.rank,
      }))
      .filter(
        (regionMarker) =>
          regionMarker.map === mapOverlayImage.title &&
          regionMarker.rank === rank
      );

    setMarkerList(jobMarkers);
  }, [checkedState, rank, mapOverlayImage.title]);

  const handleImageUrl = (e) => {
    e.preventDefault();
    const dropdownOverlay = mapImages.filter(
      (mapImage) => mapImage.slug === e.target.value
    );
    setMapOverlayImage({
      title: dropdownOverlay[0].title,
      src: dropdownOverlay[0].src,
    });
  };

  const handleRank = (e) => {
    e.preventDefault();
    setRank(parseInt(e.target.value));
  };

  const filterData = {
    checkedState,
    setCheckedState,
    markerList,
    setMarkerList,
    mapOverlayImage,
    setMapOverlayImage,
    rank,
    setRank,
    handleChange,
    handleImageUrl,
    handleRank,
  };

  return (
    <FilterContext.Provider value={filterData}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
