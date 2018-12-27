import React from "react";
import wilson from "../images/wilson.jpg";
import gibbs from "../images/gibbs.jpg";
import norbury from "../images/norbury.png";
import pickering from "../images/pickering.png";

const Invited = () => (
  <main class="container">
    <h2 class="mb-4">Invited Speakers</h2>

    <ul class="list-unstyled mt-5">
      <li class="media">
        <img class="mr-3 rounded" src={gibbs} alt="Generic placeholder image" />
        <div class="media-body">
          <h5 class="mt-0 mb-1">
            Raymond Gibbs (University of California, Santa Cruz)
          </h5>
          <a
            class="text-warning"
            href="https://en.wikipedia.org/wiki/Raymond_W._Gibbs_Jr."
          >
            https://en.wikipedia.org/wiki/Raymond_W._Gibbs_Jr
          </a>
          <h6 class="mt-3">
            Title of his talk: <br />
            <em>TBA</em>
          </h6>
        </div>
      </li>
      <li class="media">
        <img
          class="mr-3 rounded"
          src={norbury}
          alt="Generic placeholder image"
        />
        <div class="media-body">
          <h5 class="mt-2">Courtenay Norbury (University College London)</h5>
          <a
            class="text-warning"
            href="https://www.ucl.ac.uk/pals/people/courtenay-norbury"
          >
            https://www.ucl.ac.uk/pals/people/courtenay-norbury
          </a>
          <h6 class="mt-2">
            Title of her talk: <br />
            <em>
              Connections between pragmatics and structural language skills in
              typical and atypical development
            </em>
          </h6>
        </div>
      </li>
      <li class="media my-4">
        <img
          class="mr-3 rounded"
          src={pickering}
          alt="Generic placeholder image"
        />
        <div class="media-body">
          <h5 class="mt-0 mb-1">Martin Pickering (University of Edinburgh)</h5>
          <a
            class="text-warning"
            href="https://www.ed.ac.uk/profile/martin-pickering"
          >
            https://www.ed.ac.uk/profile/martin-pickering
          </a>
          <h6 class="mt-3">
            Title of his talk: <br />
            <em>Understanding dialogue: Language use and social interaction</em>
          </h6>
        </div>
      </li>
      <li class="media">
        <img
          class="mr-3 rounded"
          src={wilson}
          alt="Generic placeholder image"
        />
        <div class="media-body">
          <h5 class="mt-0 mb-1">
            Deirdre Wilson (University College London & CSMN, Oslo)
          </h5>
          <a
            class="text-warning"
            href="https://www.researchgate.net/profile/Deirdre_Wilson"
          >
            https://www.researchgate.net/profile/Deirdre_Wilson
          </a>
          <h6 class="mt-3">
            Title of her talk: <br />
            <em>Understanding Metonymy</em>
          </h6>
        </div>
      </li>
    </ul>
  </main>
);

export default Invited;
