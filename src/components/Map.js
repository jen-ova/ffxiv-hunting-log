import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { CRS } from "leaflet";
import arcanistmiddlelanoscea from "../data/arcanist-middlelanoscea.json";
import huntIcon from "../helpers/huntIcon.js";
import "../styles/map.css";
import mapImages from "../helpers/mapImages";
import middlelanoscea from "../data/assets/maps/middle-la-noscea.jpg";
import eastShroud from "../data/assets/maps/east-shroud.jpg";
import westernthanalan from "../data/assets/maps/western-thanalan.jpg";

const Map = () => {
  const [mapOverlay, setMapOverlay] = useState({
    imageUrl: middlelanoscea,
  });

  console.log(mapOverlay.imageUrl);
  console.log(mapImages.[0].src);

  const handleImageUrl = (e) => {
    // const region = e.target.getAttribute("data-region");
    // next step need to filter through mapImages same as nasa project
    setMapOverlay({
      // imageUrl: "../data/assets/maps/" + region + ".jpg",
    });
    // console.log(region);
  };

  const handleEastShroud = () => {
    setMapOverlay({ imageUrl: eastShroud });
  };

  const handleWesternThanalan = () => {
    setMapOverlay({ imageUrl: westernthanalan });
  };

  const toLatLong = ([x, y]) => [42 - y, x];
  return (
    <Wrapper>
      <button type="button" onClick={() => handleEastShroud}>
        East Shroud
      </button>
      <button type="button" onClick={handleWesternThanalan}>
        Western Thanalan
      </button>
      <select id="imageUrl" onChange={handleImageUrl}>
        <option data-region="lower-la-noscea" value="lower-la-noscea">
          Lower La Noscea
        </option>
        <option data-region="eastern-la-noscea" value="eastern-la-noscea">
          Eastern la Noscea
        </option>
        <option data-region="western-la-noscea" value="western-la-noscea">
          Western La Noscea
        </option>
      </select>

      <div className="map">
        <MapContainer
          bounds={[
            [1, 1],
            [42, 42],
          ]}
          maxBounds={[
            [1, 1],
            [42, 42],
          ]}
          attributionControl={false}
          crs={CRS.Simple}
          zoomSnap={0}
          minZoom={4}
          maxZoom={7}>
          <ImageOverlay
            bounds={[
              [1, 1],
              [42, 42],
            ]}
            url={mapOverlay.imageUrl}
          />

          {arcanistmiddlelanoscea.map((arc) => (
            <Marker
              key={arc.id}
              position={toLatLong([arc.x, arc.y])}
              icon={huntIcon}>
              <Popup>
                <img src={arc.mobIcon} alt={arc.mobName} />
                <p>{arc.mobName}</p>
                <p>
                  X: {arc.x}, Y: {arc.y}
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Wrapper>
  );
};

export default Map;
