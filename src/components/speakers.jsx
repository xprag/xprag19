import React, { Component } from "react";
import Speaker from "../components/speaker";
import wilson from "../images/wilson.jpg";
import gibbs from "../images/gibbs.jpg";
import norbury from "../images/norbury.png";
import pickering from "../images/pickering.png";

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [
        {
          id: 1,
          name: "Raymond Gibbs",
          from:
            "Cognitive Scientist and former Distinguished Professor of Psychology, University of California, Santa Cruz",
          img: gibbs,
          ref: "https://en.wikipedia.org/wiki/Raymond_W._Gibbs_Jr",
          talk:
            "The Past, Present and Future of Experimental Pragmatics: A Very Personal View"
        },
        {
          id: 2,
          name: "Pickering",
          from: "University of Edinburgh",
          img: gibbs,
          ref: "https://en.wikipedia.org/asdsasa",
          talk: "Title asda trtr"
        }
      ]
    };
  }
  render() {
    return (
      <main class="container">
        <h2 class="mb-4">Invited Speakers</h2>

        <ul class="list-unstyled mt-5">
          {this.state.speakers.map(speaker => (
            <Speaker key={speaker.id} value={speaker} />
          ))}
        </ul>
      </main>
    );
  }
}

export default Speakers;
