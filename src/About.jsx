import React from "react";
import "./About.css";
import Footer from "./Footer";

import partnership from "./assets/partnership.jpeg";
import ownership from "./assets/ownership.jpeg";

const stats = [
  {
    number: "10+",
    title: "Track Record",
    text: "Years of experience across trading, rental, and corridor programs.",
  },
  {
    number: "7+",
    title: "Presence",
    text: "Countries & regional desks.",
  },
  {
    number: "100+",
    title: "Relationships",
    text: "Clients & counterparties served.",
  },
  {
    number: "500+",
    title: "Deployment",
    text: "Machines & assets mobilised.",
  },
];

const benefits = [
  "Experience & Expertise",
  "Strong Global Network",
  "Transparent Dealings",
  "On-Time Delivery",
  "After Sales Support",
];

function About() {
  return (
    <>
      <section className="about-page">

        {/* HERO */}
        <div
          className="about-hero"
          style={{
            backgroundImage: `url(${partnership})`,
          }}
        >
          <div className="about-overlay"></div>

          <div className="about-hero-content">
            <span>ABOUT CK GROUP</span>

            <h1>
              Trust Built
              <br />
              <span>Across Borders</span>
            </h1>

            <p>
              We build infrastructure, trust, clarity,
              and momentum.
            </p>
          </div>
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-container">

          <div className="about-image">
            <img
              src={ownership}
              alt="Ownership"
            />
          </div>

          <div className="about-content">
            <h2>About CK Group</h2>

            <p>
              CK Group of Companies is a global trading
              and investment company with strong presence
              in Africa, India, China & UAE.
            </p>

            <p>
              We provide end-to-end solutions in heavy
              machinery, mining rental, global sourcing
              and cashew trade.
            </p>

            <p>
              Our mission is to build long-term
              partnerships through trust,
              transparency and quality service.
            </p>
          </div>

        </div>
        {/* TICKER / MARQUEE SECTION */}
        <div className="ticker-wrapper">
          <div className="ticker-content">
            <span>GOVERNANCE</span> • <span>TRANSPARENCY</span> • <span>EXECUTION</span> • 
            <span>LONG-TERM ALIGNMENT</span> • <span>QUIET CONFIDENCE</span> •
            <span>GOVERNANCE</span> • <span>TRANSPARENCY</span> • <span>EXECUTION</span>
          </div>
        </div>

        {/* STATS */}
        <div className="section-title">
          <span>OUR STRENGTH</span>
          <h2>Company Overview</h2>
        </div>

        <div className="stats-grid">

          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}

        </div>

        {/* BENEFITS */}
        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>A Partner You Can Trust</h2>
        </div>

        <div className="benefits-grid">

          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              {item}
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;