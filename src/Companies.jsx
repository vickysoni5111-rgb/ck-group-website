
import React from "react";
import "./Companies.css";

import heroImage from "./assets/s.jpeg";

import machinery from "./assets/machine1.jpeg";
import mining from "./assets/Mining1.jpeg";
import china from "./assets/s.jpeg";
import cashew from "./assets/Cashew-Trade-Export.png";

import Footer from "./Footer";

const companiesData = [
  {
    title: "Machinery Procurement",
    image: machinery,
    description:
      "Reliable sourcing of high-quality industrial machinery tailored to your timelines, specifications, and compliance framework.",
    points: [
      "Global supplier network",
      "Quality assurance",
      "Cost-effective sourcing",
      "End-to-end support",
    ],
  },
  {
    title: "Mining Equipment Rental",
    image: mining,
    description:
      "Affordable and efficient rental solutions for all types of mining operations.",
    points: [
      "Flexible rental plans",
      "Well-maintained equipment",
      "On-site support",
      "Fast availability",
    ],
  },
  {
    title: "China Door-to-Door Supply",
    image: china,
    description:
      "Seamless import services from China with documentation and logistics support.",
    points: [
      "Direct sourcing from China",
      "Logistics handling",
      "Customs clearance",
      "Doorstep delivery",
    ],
  },
  {
    title: "Cashew Trade & Export",
    image: cashew,
    description:
      "Premium quality cashew sourcing and global export services.",
    points: [
      "Premium quality cashews",
      "Bulk export services",
      "Global distribution",
      "Competitive pricing",
    ],
  },
];

function Companies() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="companies-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span>OUR COMPANIES</span>

          <h1>Companies</h1>

          <p>
            End-to-end support across procurement,
            rental, international logistics, and
            agri-export - structured for clarity and scale.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="companies-section">
        <div className="companies-grid">
          {companiesData.map((item, index) => (
            <div className="company-card" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="company-image"
              />

              <div className="company-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Companies;