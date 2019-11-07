import React from "react";
import NavItem from "./nav-item";
import cagliari from "../images/cagliari.jpg";

const Header = props => {
  return (
    <div>
      <h1 className="text-center">XPRAG.it 2019</h1>
      <nav className="navbar navbar-expand-md navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="xprag navbar-nav mx-auto">
            <NavItem to="./">HOME</NavItem>
            <NavItem to="./invited-speakers">INVITED SPEAKERS</NavItem>
            <NavItem to="./call-for-papers">CALL FOR PAPERS</NavItem>
            <NavItem to="./program">PROGRAM</NavItem>
            <NavItem to="./award">AWARD</NavItem>
            <NavItem to="./venue">VENUE</NavItem>
            <NavItem to="./gender-policy">GENDER POLICY</NavItem>
            <NavItem to="./abstracts">ABSTRACTS</NavItem>
            <NavItem to="./further-info">FURTHER INFO</NavItem>
          </ul>
        </div>
      </nav>
      <div className="header-container">
        <img src={cagliari} className="img-fluid" alt="Cagliari" />
        <div className="bottom-right">September 19-20, 2019 </div>
      </div>
    </div>
  );
};

export default Header;
