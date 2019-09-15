import React, { Component } from "react";

class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.value };
  }
  render() {
    const { name, from, img, ref, talk, gender } = this.props.value;
    return (
      <li className="media">
        <img className="mr-3 rounded" alt="Generic placeholder" src={img} />
        <div className="media-body">
          <h5 className="mt-0 mb-0">{name}</h5>
          <h6 className="mb-0">{from}</h6>
          <a className="text-warning" href={ref}>
            {ref}
          </a>
          <h6 className="mt-1">
            Title of {gender} talk: <br />
            <em>{talk}</em>
          </h6>
        </div>
      </li>
    );
  }
}

export default Speaker;
