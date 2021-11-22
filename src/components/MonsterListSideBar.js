import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { MapContext } from "./store/MapProvider";
import { MarkerContext } from "./store/MarkerProvider";
import { RankContext } from "./store/RankProvider";
import "../styles/monsterListSideBar.css";

const MonsterListSideBar = () => {
  const { mapOverlayImage } = useContext(MapContext);
  const { markerFilter } = useContext(MarkerContext);
  const { rank } = useContext(RankContext);

  const monsterList = markerFilter.filter(
    (regionMarker) =>
      regionMarker.map === mapOverlayImage.title && regionMarker.rank === rank
  );
  console.log(monsterList.mobName);

  return (
    <Wrapper>
      <div className="monsterList">
        <p>Monster List</p>
        <div>
          <>
            {monsterList.map((monster) => (
              <>
                <p>
                  <input
                    type="checkbox"
                    id={monster.mobName}
                    name={monster.mobName}
                    value={monster.mobName}
                  />
                  <label htmlFor={monster.mobName}>{monster.mobName}</label>
                </p>
              </>
            ))}
          </>
        </div>
      </div>
    </Wrapper>
  );
};

export default MonsterListSideBar;
