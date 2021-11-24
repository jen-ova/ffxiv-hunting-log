import React from "react";
import "../styles/App.css";
import FilterSideBar from "./FilterSideBar";
import Map from "./Map";
import MonsterListSideBar from "./MonsterListSideBar";
import NavBar from "./NavBar";
import FilterProvider from "./store/FilterProvider";

function App() {
  return (
    <FilterProvider>
      <div className="app">
        <div className="navBar">
          <NavBar />
        </div>
        <div className="sideBar__filter">
          <FilterSideBar />
        </div>
        <div className="map">
          <Map />
        </div>
        <div className="sideBar__list">
          <MonsterListSideBar />
        </div>
      </div>
    </FilterProvider>
  );
}

export default App;
