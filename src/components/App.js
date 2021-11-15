import React from "react";
import "../styles/App.css";
import FilterSideBar from "./FilterSideBar";
import Map from "./Map";
import MonsterListSideBar from "./MonsterListSideBar";
import NavBar from "./NavBar";
import MapProvider from "./store/MapProvider";
import MarkerProvider from "./store/MarkerProvider";

function App() {
  // const [region, setRegion] = useState({ region: "Middle La Noscea" });

  // const handleCurrentZone = (event) => {
  //   event.preventDefault();
  //   setRegion({ region: event.target.value });
  // };

  return (
    <MapProvider>
      <MarkerProvider>
        <div className="app">
          <div className="navBar">
            <NavBar />
          </div>
          <div className="sideBar__filter">
            {/* <FilterSideBar region={region} handleCurrentZone={handleCurrentZone} /> */}
            <FilterSideBar />
          </div>
          <div className="map">
            <Map />
          </div>
          <div className="sideBar__list">
            <MonsterListSideBar />
          </div>
        </div>
      </MarkerProvider>
    </MapProvider>
  );
}

export default App;
