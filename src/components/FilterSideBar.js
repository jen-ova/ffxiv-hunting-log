import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { FilterContext } from "./store/FilterProvider";
import "../styles/filterSideBar.css";
import mapImages from "../data/mapImages.json";
import constants from "../data/constants";

const FilterSideBar = () => {
  const { handleImageUrl, checkedState, handleChange, handleRank } =
    useContext(FilterContext);

  return (
    <Wrapper>
      <div className="filterSideBar-container">
        <div className="filterSideBar__job">
          <p className="filterSideBar__job-title">Class</p>
          <div className="filterSideBar__job_container">
          {constants.jobs.map((job, index, e) => (
            <div className="filterSideBar__job-item" key={job}>
              <input
                type="checkbox"
                value={job}
                id={job}
                checked={checkedState[index]}
                onChange={() => {
                  handleChange(job);
                }}
              />
              <label htmlFor={job}>{job}</label>
            </div>
          ))}
          </div>
        </div>
        <div className="filterSideBar__region">
          <label htmlFor="region" className="filterSideBar__region-title">Region</label>
          <select id="imageUrl" onChange={handleImageUrl}>
            {mapImages.map((mapImage) => (
              <option value={mapImage.slug} key={`option-${mapImage.slug}`}>
                {mapImage.title}
              </option>
            ))}
          </select>
        </div>
        <div className="filterSideBar__rank">
          <label htmlFor="rank" className="filterSideBar__rank-title">Rank</label>
          <select name="rank" id="rank" onChange={handleRank}>
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
