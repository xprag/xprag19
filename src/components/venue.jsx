import React from "react";
import citadelOfMuseums from "../images/citadel-of-museums.jpg";

const Venue = () => (
  <main className="container">
    <h2 className="mb-4">Venue</h2>
    <p>
      The conference will be held in Aula Roberto Coroneo (Aula Verde/Green
      Room) at the Citadel of Museums (Cittadella dei Musei) in Cagliari. The
      poster session will be held in Aula Rossa/Red Room, at the Citadel of
      Museums.
    </p>
    <p>
      The Citadel of Museums is the greatest art, history and culture complex in
      the whole of Sardinia. It is placed in the old centre of Cagliari, in
      Piazza Arsenale,
    </p>
    <p>
      Further info at:&nbsp;
      <a
        className="text-warning"
        href="https://www.sardegnaturismo.it/en/explore/cittadella-dei-musei"
      >
        https://www.sardegnaturismo.it/en/explore/cittadella-dei-musei
      </a>
    </p>
    <hr />

    <div className="container">
      <div className="row">
        <div className="col-md">
          {" "}
          <img src={citadelOfMuseums} alt="citadelOfMuseums" width="500px" />
        </div>
        <div className="col-md">
          {" "}
          <iframe
            title="citadelOfMuseums"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.929322658442!2d9.11439651502039!3d39.22177087952182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e7340e187c1fbf%3A0x701e830190acca93!2sPiazza+Arsenale%2C+1%2C+09123+Cagliari+CA%2C+Italy!5e0!3m2!1sen!2sfr!4v1561992774369!5m2!1sen!2sfr"
            width="500"
            height="350"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </main>
);

export default Venue;
