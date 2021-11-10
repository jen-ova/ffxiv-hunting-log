import "../styles/App.css";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { CRS } from "leaflet";
import arcanistmiddlelanoscea from "../data/arcanist-middlelanoscea.json";
import huntIcon from "../helpers/huntIcon.js";

function App() {
  console.log(arcanistmiddlelanoscea);
  const toLatLong = ([x, y]) => [42 - y, x];
  return (
    <div className="App">
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
          url="https://xivapi.com/m/s1f1/s1f1.00.jpg"
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
  );
}

export default App;
