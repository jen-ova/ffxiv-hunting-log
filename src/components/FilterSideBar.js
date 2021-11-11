import React from "react";
import Wrapper from "./Wrapper";
import "../styles/filterSideBar.css";

const FilterSideBar = () => {
  return (
    <Wrapper>
      <div className="filterSideBar-container">
        <div className="filterSideBar__job">
          <p>Select your job(s)</p>
          <p>GLD PUG MRD LNC ARC ROG CNJ THM ACN</p>
        </div>
        <div className="filterSideBar__region">
          <label htmlFor="region">Select a region</label>
          <select name="region" id="region">
            <option value="middle-la-noscea">Middle La Noscea</option>
            <option value="lower-la-noscea">Lower La Noscea</option>
            <option value="eastern-la-noscea">Eastern la Noscea</option>
            <option value="western-la-noscea">Western La Noscea</option>
            <option value="upper-la-noscea">Upper La Noscea</option>
            <option value="outer-la-noscea">Outer La Noscea</option>
            <option value="central-shroud">Central Shroud</option>
            <option value="east-shroud">East Shroud</option>
            <option value="south-shroud">South Shroud</option>
            <option value="north-shroud">North Shroud</option>
            <option value="Western Thanalan">Western Thanalan</option>
            <option value="Central Thanalan">Central Thanalan</option>
            <option value="Eastern Thanalan">Eastern Thanalan</option>
            <option value="Southern Thanalan">Southern Thanalan</option>
            <option value="Northern Thanalan">Northern Thanalan</option>
            <option value="coerthas-central-highlands">
              Coerthas Central Highlands
            </option>
            <option value="mor-dhona">Mor Dhona</option>
          </select>
        </div>
        <div className="filterSideBar__rank">
          <label htmlFor="rank">Select a rank</label>
          <select name="rank" id="rank">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

export default FilterSideBar;
