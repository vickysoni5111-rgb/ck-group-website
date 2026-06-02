import React, { useState } from "react";
import "./Services.css";

import machinery from "./assets/MachineryProcurement.jpeg";
import mining from "./assets/MiningEquipmentRental.jpeg";
import china from "./assets/ChinaDoor-to-DoorSupply.jpeg";
import cashew from "./assets/CashewTrade&Export.jpeg";

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      title: "Machinery Procurement",
      image: machinery,
      description:
        "Reliable sourcing of high-quality industrial machinery tailored to your business needs.",
    },
    {
      title: "Mining Equipment Rental",
      image: mining,
      description:
        "Affordable and efficient rental solutions for all types of mining operations.",
    },
    {
      title: "China Door-to-Door Supply",
      image: china,
      description:
        "Seamless import services from China with end-to-end delivery support.",
    },
    {
      title: "Cashew Trade & Export",
      image: cashew,
      description:
        "Premium quality cashew sourcing and global export services.",
    },
  ];

  return (
    <section className="services-section">

      <div className="services-heading">
        <h2>Our Services</h2>
        <p>
          Delivering excellence through industrial solutions, global trade,
          procurement, and export services.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              activeCard === index ? "active-card" : ""
            }`}
            onClick={() => setActiveCard(index)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;