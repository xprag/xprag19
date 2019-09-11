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
      Piazza Arsenale, 1. The elevators placed near Piazza Yenne (behind Santa
      Chiara Church), at Bastione Saint Remy and at Terrapieno in viale Regina
      Elena bring to the old centre of Cagliari ("Castello").
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
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
    <br />
    <h4>How to get there</h4>
    <p>
      Cagliari-Elmas airport is easily reached by plane (
      <a className="text-warning" href="http://www.sogaer.it/en">
        www.sogaer.it/en
      </a>
      ). It is connected by daily flights to most of the principal cities of
      mainland Italy and Europe and by several daily flights to Rome and Milan.
      The Cagliari-Elmas airport is about 8 km from Cagliari city centre. There
      are several modes of transport available to travel from the airport to the
      city centre and viceversa. Trains offer the cheapest option of public
      transport.
    </p>
    <h6> By train </h6>
    <p>
      The airport train station is just a 5 minutes’ walk from the air terminal.
      The journey to and from downtown takes 5-7 mins (with 20 mins. average
      frequency), single fare is 1.30€. Tickets are sold by Trenitalia at the
      vending machine located inside the station, online and by official ticket
      counters and authorized dealers.
    </p>
    <h6>By taxi </h6>
    <p>
      Taxis can be obtained from the taxi ranks outside the terminal. Taxis
      offer a more flexible means of getting to the city center. Taxis are
      slightly more expensive but offer a 24-hour service (around 15-20€).
    </p>
    <h6>By bus</h6>
    <p>
      Two busses per hour connect the airport with the city centre of Cagliari.
      The ride takes about 10 minutes and will cost 4€.
    </p>

    <h6>From railway and bus stations to the venue </h6>
    <p>
      The railway and bus stations are near Piazza Giacomo Matteotti. From
      there, take the number 8 bus towards “Policlinico” and get off at the 6th
      stop (“Viale Buon Cammino - Polizia”) after approximately 8 minutes. At
      the bus stop, turn right towards the gate known as “Porta Cristina”. Go
      past the gate and on your left you will find the entrance to the Citadel
      of museums.
    </p>
    <p>
      Other buses going to the Citadel of museums are the numbers 7 and 10. For
      further information about public transport in Cagliari, see the CTM
      website: &nbsp;
      <a className="text-warning" href="http://www.ctmcagliari.it">
        www.ctmcagliari.it
      </a>
      &nbsp; or download the “BusFinder” application for mobile phone at &nbsp;
      <a
        className="text-warning"
        href="http://www.ctmcagliari.it/custom.php?nome=busfinder"
      >
        www.ctmcagliari.it/custom.php?nome=busfinder
      </a>
    </p>
  </main>
);

export default Venue;
