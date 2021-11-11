import React from "react";
import Wrapper from "./Wrapper";
import "../styles/monsterListSideBar.css";

const MonsterListSideBar = () => {
  return (
    <Wrapper>
      <div className="monsterList">
        <p>Monster List</p>
        <div>
          <input
            type="checkbox"
            id="littleladybug"
            name="littleladybug"
            value="littleladybug"
            checked
          />
          <label for="littleladybug">Little Ladybug</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="wharfrat"
            name="wharfrat"
            value="wharfrat"
            checked
          />
          <label for="wharfrat">Wharf Rat</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="lostlamb"
            name="lostlamb"
            value="lostlamb"
          />
          <label for="lostlamb">Lost Lamb</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="windsprite"
            name="windsprite"
            value="windsprite"
          />
          <label for="windsprite">Wind Sprite</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="pukhatchling"
            name="pukhatchling"
            value="pukhatchling"
          />
          <label for="pukhatchling">Puk Hatchling</label>
        </div>
      </div>
    </Wrapper>
  );
};

export default MonsterListSideBar;
