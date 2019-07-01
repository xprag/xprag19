import React from "react";
import NavItem from "./nav-item";
import cagliari from "../images/cagliari.jpg";

const Header = props => {
  return (
    <div>
      <h1 className="text-center">XPRAG.it 2019</h1>
      <nav className="navbar navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="xprag navbar-nav mx-auto">
            <NavItem to="/">HOME</NavItem>
            <NavItem to="/invited-speakers">INVITED SPEAKERS</NavItem>
            <NavItem to="/call-for-papers">CALL FOR PAPERS</NavItem>
            <NavItem to="/program" isDisabled="1">
              PROGRAM
            </NavItem>
            <NavItem to="/award">AWARD</NavItem>
            <NavItem to="/venue">VENUE</NavItem>
            <NavItem to="#" isDisabled="1">
              HOW TO GET THERE
            </NavItem>
            <NavItem to="/gender-policy">GENDER POLICY</NavItem>
          </ul>
        </div>
      </nav>
      <img src={cagliari} className="img-fluid" alt="Cagliari" />
    </div>
  );
};

export default Header;
