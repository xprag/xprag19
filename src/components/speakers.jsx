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
          name: "Courtenay Norbury",
          from: "University College London",
          img: norbury,
          ref: "https://www.ucl.ac.uk/pals/people/courtenay-norbury",
          talk:
            "Connections between pragmatics and structural language skills in typical and atypical development"
        },
        {
          id: 3,
          name: "Martin Pickering",
          from: "University of Edinburgh",
          img: pickering,
          ref: "https://www.ed.ac.uk/profile/martin-pickering",
          talk: "Understanding dialogue: Language use and social interaction"
        },
        {
          id: 4,
          name: "Deirdre Wilson",
          from: "University College London & CSMN, Oslo",
          img: wilson,
          ref: "https://www.researchgate.net/profile/Deirdre_Wilson",
          talk: "Understanding Metonymy"
        }
      ]
    };
  }
  render() {
    return (
      <main className="container">
        <h2 className="mb-4">Invited Speakers</h2>

        <ul className="list-unstyled mt-5">
          {this.state.speakers.map(speaker => (
            <Speaker key={speaker.id} value={speaker} />
          ))}
        </ul>
      </main>
    );
  }
}

export default Speakers;
