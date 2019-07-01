import React, { Component } from "react";
import wilson from "../images/wilson.jpg";
import gibbs from "../images/gibbs.jpg";
import norbury from "../images/norbury.png";
import pickering from "../images/pickering.png";

class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.value };
  }
  render() {
    const { name, from, img, ref, talk } = this.props.value;
    return (
      <li className="media">
        <img className="mr-3 rounded" alt="Generic placeholder" src={img} />
        <div className="media-body">
          <h5 className="mt-0 mb-0">{name}</h5>
          <h6 className="mb-0">{from}</h6>
          <a
            className="text-warning"
            href="https://en.wikipedia.org/wiki/Raymond_W._Gibbs_Jr."
          >
            {ref}
          </a>
          <h6 className="mt-1">
            Title of his talk: <br />
            <em>{talk}</em>
          </h6>
        </div>
      </li>
    );
  }
}

export default Speaker;
