import React, {useState} from "react";
import Wrapper from "./Wrapper";
import "../styles/navBar.css";

const NavBar = () => {

  return (
    <Wrapper>
      <div className="navBar-container">
        <h1 className="navBar-container__title">FFXIV Hunting Log</h1>
        <div className="navBar-container__account">
          {/* <i className="fas fa-filter"></i> */}
          {/* <i className="fas fa-bullseye"></i> */}
          {/* <i className="fas fa-user"></i> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
