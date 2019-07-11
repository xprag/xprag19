import React from "react";
import xprag_beach from "../images/xprag-beach.jpg";

const FurtherInfo = () => (
  <main className="container">
    <h2 className="mb-4">Further Info</h2>

    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h3>Where to sleep</h3>
          <p>
            Here below you can find a list of B&amp;B and hotels located in
            Cagliari.
          </p>
          <h6>Bed &amp; Breakfast</h6>
          <ul className="text-warning">
            <li>
              <a href="http://www.centrostoricoviamanno.it/cagliari/">
                Centro storico Via Manno
              </a>
            </li>
            <li>
              <a href="http://www.ilgirasole.sardegna.it/">Il Girasole</a>
            </li>
            <li>
              <a href="https://www.sardiniadomus.it/">Sardinia Domus</a>
            </li>
            <li>
              <a href="http://www.sadomucheta.it/">Sa Domu cheta</a>
            </li>
            <li>
              <a href="https://www.biancadimora.it/">Bianca Dimora</a>
            </li>
            <li>
              <a href="http://www.cerdenarooms.it/cagliaribedandbreakfast/en/">
                Cerdena Rooms
              </a>
            </li>
            <li>
              <a href="http://www.villacao.it/?lang=en">Villa Cao</a>
            </li>
            <li>
              <a href="http://www.elizabethbb.com/">Elizabeth B&amp;B</a>
            </li>
            <li>
              <a href="http://www.bbreginaelena.it/ing_html/index.htm">
                Regina Elena
              </a>
            </li>
            <li>
              <a href="http://www.anticatorrebb.it/">L’Antica Torre</a>
            </li>
            <li>
              <a href="http://www.locandadeibuoniecattivi.it/">Locanda dei buoni e dei cattivi</a>
            </li>
          </ul>
          <h6>Hotels</h6>
          <ul className="text-warning">
            <li>
              <a href="https://www.thotel.it/en/home.html">THotel</a>
            </li>
            <li>
              <a href="https://www.hotelpanorama.it/en/">Panorama</a>
            </li>
            <li>
              <a href="https://www.sardegnahotelcagliari.it/en/hotel/">
                Sardegna
              </a>
            </li>
            <li>
              <a href="http://www.caesarshotel.it/">Caesar’s</a>
            </li>
            <li>
              <a href="https://www.hotelreginamargherita.com/en/">
                Regina Margherita
              </a>
            </li>
            <li>
              <a href="http://www.hoteldedoni.it/">Hotel Dedoni</a>
            </li>
            <li>
              <a href="https://www.hotelquadrifoglio.net/">Quadrifoglio</a>
            </li>
            <li>
              <a href="http://www.uliviepalme.it/en/">Ulivi &amp; Palme</a>
            </li>
            <li>
              <a href="https://www.hotelitaliacagliari.com/">Italia</a>
            </li>
            <li>
              <a href="http://www.laterrazzahotel.com/en/">La Terrazza</a>
            </li>
            <li>
              <a href="http://www.hotel4mori.it/">4 Mori</a>
            </li>
            <li>
              <a href="https://l-ambasciata-hotel-de-charme-cagliari.hotelmix.it/">
                Hotel L’Ambasciata
              </a>
            </li>
            <li>
              <a href="https://www.hotel2colonne.it/">Hotel Due Colonne</a>
            </li>
          </ul>
        </div>
        <div className="col-sm">
          <h3>Where to eat</h3>
          <p>
            Here below you can find a list of café/restaurants located near the
            conference venue.
          </p>
          <p>
            <li>L'osteria di Castello, Via Lamarmora 62 </li>
            <li>Pablo Caffè, Via Martini 20</li>
            <li>Caffè Libarium Nostrum, Via Santa Croce 33</li>
            <li>Pani e Casu, Via Santa Croce 51 </li>
            <li>Luchia di Claudio Ara, Viale Buon Cammino 5 </li>
            <li>4 Mori, Via Corte D'Appello 37 </li>
            <li>Milestone Pizzorante, Via Corte D'Appello 33</li>
            <li>Caffè De Candia, Via Mario de Candia 5</li>
          </p>
          <h3>Where to swim</h3>
          <p>
            There are a few beautiful beaches in Cagliari, and some incredible
            ones in the immediate surroundings. <br />
            In Cagliari, Poetto (8 km long!), Calamosca and Cala Fighera are
            easily reached by bus: take the bus PF or PQ to Poetto, 5 or 11 to
            Calamosca and Cala Fighera (walking from Calamosca). <br />
            For other beaches in the surroundings, please visit the following
            website:{" "}
            <a
              className="text-warning"
              href="https://www.sardegnaturismo.it/en/southern-seas-carribean-waters-and-african-soul"
            >
              www.sardegnaturismo.it
            </a>
          </p>
          <img src={xprag_beach} alt="" />
        </div>
      </div>
    </div>
  </main>
);

export default FurtherInfo;
