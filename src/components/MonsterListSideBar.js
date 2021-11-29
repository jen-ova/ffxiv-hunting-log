import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { FilterContext } from "./store/FilterProvider";
import "../styles/monsterListSideBar.css";

const MonsterListSideBar = () => {
  const { mapOverlayImage, markerList, rank } = useContext(FilterContext);

  const monsterList = markerList.filter(
    (regionMarker) =>
      regionMarker.map === mapOverlayImage.title && regionMarker.rank === rank
  );

  const jobTitle = [...new Set(monsterList.map((monster) => monster.class))];

  return (
    <Wrapper>
      <div className="monsterList">
        <p className="monsterList__title">Monster List</p>
        <div className="monsterList__byJob">
          {jobTitle.map((name) => (
            <>
              <h4>{name}</h4>
              {monsterList
                .filter((monster) => monster.class === name)
                .map((monster, i) => (
                  <div key={`${monster}-${i}`}>
                    <input
                      type="checkbox"
                      id={monster.mobName}
                      name={monster.mobName}
                      value={monster.mobName}
                    />
                    <label htmlFor={monster.mobName}>{monster.mobName}</label>
                  </div>
                ))}
            </>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MonsterListSideBar;
