import React from "react";
import "./GlobalNetwork.css";
import networkHero from "./assets/network1.jpeg";

import ghana from "./assets/gana.jpeg";
import china from "./assets/china.jpeg";
import togo from "./assets/togo.jpeg";
import uae from "./assets/uae.jpeg";

import CountriesSection from "./CountriesSection";
import Footer from "./Footer";

const cards = [
  {
    title: "GHANA",
    subtitle: "West Africa Hub",
    image: ghana,
    description: "Trade and project operations across Ghana corridors",
    extra: "Engineering plans and built environment",
  },
  {
    title: "CHINA",
    subtitle: "Sourcing Hub",
    image: china,
    description: "Any product, any quantity, we deliver worldwide",
    extra: "Industrial operations and manufacturing floor",
  },
  {
    title: "TOGO",
    subtitle: "Regional Operations",
    image: togo,
    description: "Regional logistics and partner operations in Togo",
    extra: "Financial data and trading screens",
  },
  {
    title: "UAE",
    subtitle: "Trading Hub",
    image: uae,
    description: "Global trading & business solutions",
    extra: "International business and investment network",
  },
];

const GlobalNetwork = () => {
  return (
    <>
      <section className="network-section">

        {/* Hero */}
        <div
          className="network-hero"
          style={{ backgroundImage: `url(${networkHero})` }}
        >
          <div className="network-overlay"></div>

          <div className="network-hero-content">
            <span className="network-tag">
              OUR GLOBAL NETWORK
            </span>

            <h1>
              Global <span>Network</span>
            </h1>

            <p>
              Strategic hubs across Africa, the Middle East and Asia
              powering sourcing, operations and international trade.
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="network-header">
          <h2>Regional Hubs</h2>
          <p>Where we operate</p>
        </div>

        {/* Cards */}
        <div className="network-grid">
          {cards.map((card, index) => (
            <div className="network-card" key={index}>
              <img
                src={card.image}
                alt={card.title}
                className="network-image"
              />

              <div className="network-content">
                <span>{card.title}</span>
                <h3>{card.subtitle}</h3>
                <p>{card.description}</p>
                <small>{card.extra}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Countries */}
        <CountriesSection />

      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default GlobalNetwork;