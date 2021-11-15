import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { MapContext } from "./store/MapProvider";
import { MarkerContext } from "./store/MarkerProvider";
import "../styles/filterSideBar.css";
import mapImages from "../data/mapImages.json";

const FilterSideBar = () => {
  const { handleImageUrl } = useContext(MapContext);
  const { handleMarkers } = useContext(MarkerContext);

  return (
    <Wrapper>
      <div className="filterSideBar-container">
        <div className="filterSideBar__job">
          <p>Select your job(s)</p>
          <p>
            GLD PUG MRD LNC
            <button type="button" onClick={handleMarkers}>
              ARC
            </button>
            ROG CNJ THM ACN
          </p>
        </div>
        <div className="filterSideBar__region">
          <label htmlFor="region">Select a region</label>
          <select id="imageUrl" onChange={handleImageUrl}>
            {mapImages.map((mapImage) => (
              <option value={mapImage.slug} key={`option-${mapImage.slug}`}>
                {mapImage.title}
              </option>
            ))}
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
