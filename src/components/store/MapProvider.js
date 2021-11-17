import React, { createContext, useState } from "react";
import mapImages from "../../data/mapImages.json";

export const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [mapOverlayImage, setMapOverlayImage] = useState({
    title: "Middle La Noscea",
    src: "assets/maps/middle-la-noscea.jpg",
  });

  const handleImageUrl = (e) => {
    e.preventDefault();
    const dropdownOverlay = mapImages.filter(
      (mapImage) => mapImage.slug === e.target.value
    );
    setMapOverlayImage({
      title: dropdownOverlay[0].title,
      src: dropdownOverlay[0].src,
    });
    console.log(mapOverlayImage.src);
  };

  const mapData = { mapOverlayImage, setMapOverlayImage, handleImageUrl };

  return <MapContext.Provider value={mapData}>{children}</MapContext.Provider>;
};

export default MapProvider;
