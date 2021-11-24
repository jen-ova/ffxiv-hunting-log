import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { FilterContext } from "./store/FilterProvider";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { CRS } from "leaflet";
import huntIcon from "../helpers/huntIcon.js";
import "../styles/map.css";

const Map = () => {
  const { mapOverlayImage, markerList } = useContext(FilterContext);

  const toLatLong = ([x, y]) => [42 - y, x];
  return (
    <Wrapper>
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
            url={mapOverlayImage.src}
          />
          {markerList !== undefined &&
            markerList.map((regionMark, i) => (
              <Marker
                key={i}
                position={toLatLong([regionMark.x, regionMark.y])}
                icon={huntIcon}>
                <Popup>
                  {/* <img src={arc.mobIcon} alt={arc.mobName} /> */}
                  <p>{regionMark.mobName}</p>
                  <p>{regionMark.title}</p>
                  <p>
                    X: {regionMark.x}, Y: {regionMark.y}
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
