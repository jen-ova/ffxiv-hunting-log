import "../styles/App.css";
import FilterSideBar from "./FilterSideBar";
import Map from "./Map";
import MonsterListSideBar from "./MonsterListSideBar";
import NavBar from "./NavBar";

function App() {
  return (
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
  );
}

export default App;
