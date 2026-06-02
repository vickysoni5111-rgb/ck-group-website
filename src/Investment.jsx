import React from "react";
import "./Investment.css";
import Footer from "./Footer";
import heroImg from "./assets/investment-hero.jpeg";

const process = [
  {
    title: "Your Invest",
    desc: "Choose your investment plan and invest securely",
  },
  {
    title: "We Purchase Machine",
    desc: "We procure high-quality industrial equipment",
  },
  {
    title: "We Rent in Africa",
    desc: "Machines are deployed in African markets for rental",
  },
  {
    title: "You Earn Monthly Income",
    desc: "Receive stable monthly returns on your investment",
  },
];

const benefits = [
  "High ROI potential",
  "Monthly passive income",
  "Secure investment model",
  "Transparent operations",
  "Asset-backed investment",
  "Professional management",
  "Global market exposure",
  "Risk diversification",
];

const plans = [
  {
    name: "Basic",
    price: "₹5,00,000",
    roi: "10–12% p.a.",
    features: [
      "Quarterly statements",
      "Standard liquidity windows",
      "Email support desk",
    ],
  },
  {
    name: "Standard",
    recommended: true,
    price: "₹12,00,000",
    roi: "14–16% p.a.",
    features: [
      "Priority machine allocation",
      "Monthly distribution option",
      "Dedicated relationship manager",
      "Enhanced performance reporting",
    ],
  },
  {
    name: "Premium",
    price: "₹25,00,000",
    roi: "16–18% p.a.",
    features: [
      "Custom mandate & co-invest rights",
      "Quarterly strategy calls",
      "First look at new deployments",
      "Tax documentation pack",
    ],
  },
];

function Investment() {
  return (
    <>
      <section className="investment-page">

        {/* HERO */}
        <div
          className="investment-hero"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span>CK GROUP CAPITAL</span>

            <h1>
              Invest Smart.
              <br />
              <span>Earn Consistent Returns.</span>
            </h1>

            <p>
              Build passive income through machinery investments —
              structured programs, documented reporting,
              and asset-backed exposure.
            </p>

            <div className="hero-buttons">
              <button>Invest Now</button>
              <button className="secondary-btn">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="section-title">
          <span>PROCESS</span>
          <h2>How Investment Works</h2>
        </div>

        <div className="process-grid">
          {process.map((item, index) => (
            <div className="process-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
{/* SLIDING MARQUEE */}
<div className="marquee-container">
  <div className="marquee-track">
    <span>ASSET BACKED INVESTMENTS</span> • <span>GLOBAL MARKET EXPOSURE</span> • 
    <span>TRANSPARENT OPERATIONS</span> • <span>STABLE RETURNS</span> •
    <span>ASSET BACKED INVESTMENTS</span> • <span>GLOBAL MARKET EXPOSURE</span>
  </div>
</div>
        {/* BENEFITS */}
        <div className="section-title">
          <span>ADVANTAGES</span>
          <h2>Investment Benefits</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              {item}
            </div>
          ))}
        </div>

        {/* PLANS */}
        <div className="section-title">
          <span>PROGRAMS</span>
          <h2>Investment Plans</h2>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              className={`plan-card ${
                plan.recommended
                  ? "recommended"
                  : ""
              }`}
              key={index}
            >
              {plan.recommended && (
                <div className="badge">
                  Recommended
                </div>
              )}

              <h3>{plan.name}</h3>

              <h2>{plan.price}</h2>

              <p>
                Target ROI ~ {plan.roi}
              </p>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button>
                Invest Now
              </button>
            </div>
          ))}
        </div>

        <div className="disclaimer">
          Illustrative targets only. Capital at risk.
          Read offering documents before investing.
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Investment;