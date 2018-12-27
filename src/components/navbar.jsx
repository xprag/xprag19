import React from "react";
import { NavLink } from "react-router-dom";
import cagliari from '../images/cagliari.jpg'

const Navbar = () => (
  <div>
    <h1 class="text-center">XPRAG.it 2019</h1>
    <nav className="navbar navbar-expand-md">
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="xprag navbar-nav mx-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/invited">
              INVITED SPEAKERS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/call">
              CALL FOR PAPERS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link disabled" to="/program">
              PROGRAM
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/award">
              AWARD
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link disabled" to="/venue">
              VENUE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link disabled" to="#">
              HOW TO GET THERE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gender">
              GENDER POLICY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <img src={cagliari} class="img-fluid" alt="Cagliari" />
  </div>
);

export default Navbar;
