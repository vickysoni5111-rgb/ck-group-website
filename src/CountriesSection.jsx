import React from "react";
import "./CountriesSection.css";

import ghana from "./assets/Liberia.jpeg";
import benin from "./assets/banin.jpeg";
import togo from "./assets/ganaflag1.jpeg";
import india from "./assets/india1.jpeg";
import uae from "./assets/uae1.jpeg";
import china from "./assets/china1.jpeg";
import vietnam from "./assets/vietnum.jpeg";

function CountriesSection() {
  return (
    <section className="countries-section">

      <div className="countries-card">

        <span className="countries-tag">
          GLOBAL REACH
        </span>

        <h2>
          Countries We Serve
        </h2>

        <p>
          Active corridors and partner markets across
          three continents.
        </p>

       <div className="flags-container">

  <div className="flag-item">
    <img src={ghana} alt="Liberia" />
    <h6>Liberia</h6>
  </div>

  <div className="flag-item">
    <img src={benin} alt="Benin" />
    <h6>Benin</h6>
  </div>

  <div className="flag-item">
    <img src={togo} alt="Ghana" />
    <h6>Ghana</h6>
  </div>

  <div className="flag-item">
    <img src={india} alt="India" />
    <h6>India</h6>
  </div>

  <div className="flag-item">
    <img src={uae} alt="UAE" />
    <h6>UAE</h6>
  </div>

  <div className="flag-item">
    <img src={china} alt="China" />
    <h6>China</h6>
  </div>

  <div className="flag-item">
    <img src={vietnam} alt="Vietnam" />
    <h6>Vietnam</h6>
  </div>

</div>
      </div>

    </section>
  );
}

export default CountriesSection;