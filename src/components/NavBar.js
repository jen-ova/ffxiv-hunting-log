import React from "react";
import Wrapper from "./Wrapper";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="navBar-container">
        <h1 className="navbar-container__title">FFXIV Hunting Log</h1>
        <p className="navbar-container__account">Login <span class="navbar-container__account-separator">|</span> Register</p>
      </div>
    </Wrapper>
  );
};

export default NavBar;
