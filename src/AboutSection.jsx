import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        <p className="about-tag">
          About CK Group
        </p>

        <h2>
          Partnerships engineered
          <br />
          <span>for decades, not quarters.</span>
        </h2>

        <h3>
          We build infrastructure, trust, clarity, and momentum.
        </h3>

        <p className="about-text">
          A global trading and investment group with corridors across
          Africa, India, China, and the UAE — unified by governance,
          documentation, and execution you can brief to any board.
        </p>

        <p className="about-text">
          Procurement, rental, logistics, and agri-export — delivered
          with discretion, measurable milestones, and long-term alignment.
        </p>

      </div>

    </section>
  );
}

export default AboutSection;