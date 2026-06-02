import React from "react";
import "./StatsCards.css";

import inception from "./assets/Sinceinception.jpeg";
import reach from "./assets/Reach.jpeg";
import pillars from "./assets/Grouppillars.jpeg";
import network from "./assets/Network.jpeg";

function StatsCards() {
  const stats = [
    {
      image: inception,
      title: "Since Inception",
      number: "12+",
      description: "Years operating integrated group capabilities."
    },
    {
      image: reach,
      title: "Reach",
      number: "7+",
      description: "Active country corridors & desks."
    },
    {
      image: pillars,
      title: "Group Pillars",
      number: "4",
      description: "Core lines of business & service."
    },
    {
      image: network,
      title: "Network",
      number: "18+",
      description: "Regional hubs & partner nodes."
    }
  ];

  return (
    <section className="stats-cards-section">

      <div className="stats-title">
        <h2>Group Overview</h2>
      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <div className="stats-card" key={index}>

            <img
              src={item.image}
              alt={item.title}
              className="stats-image"
            />

            <div className="stats-content">

              <p className="stats-label">
                {item.title}
              </p>

              <h2 className="stats-number">
                {item.number}
              </h2>

              <p className="stats-description">
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default StatsCards;