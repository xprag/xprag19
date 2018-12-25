import React, { Component } from "react";
import fondazione from "../images/fondazione-sardegna.jpg";
import univ from "../images/universita-cagliari.jpg";

const Footer = () => (
  <div className="container">
  <hr />
    <div className="row mb-2">
      <div className="col-sm">
        <div className="media">
          <img
            className="mr-3"
            src={fondazione}
            alt="Generic placeholder image"
          />
          <div className="media-body">
            <h2 className="mt-4">
              Fondazione <br />
              di Sardegna
            </h2>
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="media">
          <div className="media-body media-body__right">
            <h2 className="mt-4 mr-3">
              Università
              <br />
              di Cagliari
            </h2>
            <p className="mt-0; mr-4">
              Dipartimento di
              <br />
              Pedagogia, Psicologia, Filosofia
            </p>
          </div>
          <img className="mr-5" src={univ} alt="Generic placeholder image" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
