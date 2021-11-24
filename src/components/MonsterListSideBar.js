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

  return (
    <Wrapper>
      <div className="monsterList">
        <p>Monster List</p>
        <div>
          <>
            {monsterList.map((monster) => (
              <p>
                <input
                  type="checkbox"
                  id={monster.mobName}
                  name={monster.mobName}
                  value={monster.mobName}
                />
                <label htmlFor={monster.mobName}>{monster.mobName}</label>
              </p>
            ))}
          </>
        </div>
      </div>
    </Wrapper>
  );
};

export default MonsterListSideBar;
