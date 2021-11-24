import React from "react";
import Wrapper from "./Wrapper";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="navBar__container">
        <p>FFXIV Hunting Log</p>
        Login / Logout / Register
      </div>
    </Wrapper>
  );
};

export default NavBar;
