import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { MapContext } from "./store/MapProvider";
import { MarkerContext } from "./store/MarkerProvider";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { CRS } from "leaflet";
import huntIcon from "../helpers/huntIcon.js";
import "../styles/map.css";

const Map = () => {
  const { mapOverlayImage } = useContext(MapContext);
  const { markerFilter } = useContext(MarkerContext);
  console.log(markerFilter);

  const regionMarkers = markerFilter.filter(
    (regionMarker) => regionMarker.map === mapOverlayImage.title
  );
  console.log(regionMarkers);

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
            url={mapOverlayImage.src && mapOverlayImage.src}
          />
          {regionMarkers !== undefined
            ? regionMarkers.map((regionMark) => (
                <Marker
                  key={regionMarkers.index}
                  position={toLatLong([regionMark.x, regionMark.y])}
                  icon={huntIcon}>
                  <Popup>
                    {/* <img src={arc.mobIcon} alt={arc.mobName} /> */}
                    <p>{regionMark.mobName}</p>
                    <p>
                      X: {regionMark.x}, Y: {regionMark.y}
                    </p>
                  </Popup>
                </Marker>
              ))
            : null}
        </MapContainer>
      </div>
    </Wrapper>
  );
};

export default Map;
