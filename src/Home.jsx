
import React from "react";
import "./Home.css";
import heroImage from "./assets/pic1.jpeg";
import Operations from "./Operations";
import Services from "./Services";
import StatsCards from "./StatsCards";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-border"></div>

        <div className="hero-content">
          <p className="sub-heading">INDUSTRIAL SOLUTIONS & GLOBAL NETWORK</p>

          <h1>
            Clarity at Scale.
            <br />
            <span>Capital, Supply & Trust.</span>
          </h1>

          <p className="description">
            A corporate group built for disciplined growth — investments,
            industrial services, and global corridors with governance you can
            brief to your board.
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-box">
            <h2>180+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <h2>2400+</h2>
            <p>Global Partners</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <h2>890+</h2>
            <p>Deliveries</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <h2>18</h2>
            <p>Countries Served</p>
          </div>
        </div>
      </section>

      {/* ===== SLIDING TICKER ===== */}
      <section className="ticker-section">
        <div className="ticker-track">
          <div className="ticker-content">
            <span className="ticker-item">Compliance-first delivery</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Procurement</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Mining rental</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">China door-to-door</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Cashew export</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Compliance-first delivery</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Procurement</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Mining rental</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">China door-to-door</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Cashew export</span>
            <span className="ticker-dot">●</span>
          </div>
          <div className="ticker-content" aria-hidden="true">
            <span className="ticker-item">Compliance-first delivery</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Procurement</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Mining rental</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">China door-to-door</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Cashew export</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Compliance-first delivery</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Procurement</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Mining rental</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">China door-to-door</span>
            <span className="ticker-dot">●</span>
            <span className="ticker-item">Cashew export</span>
            <span className="ticker-dot">●</span>
          </div>
        </div>
      </section>

      {/* ===== OPERATIONS ===== */}
      <Operations />

      {/* ===== SERVICES ===== */}
      <Services />

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-left">
            <span className="about-label">ABOUT CK GROUP</span>
            <h3 className="about-subtitle">
              We build infrastructure, trust, clarity, and momentum.
            </h3>
            <p className="about-text">
              Procurement, rental, logistics, and agri-export — delivered with
              discretion, measurable milestones, and long-term alignment.
            </p>
          </div>

          <div className="about-right">
            <h2 className="about-main-heading">
              Partnerships engineered <br />
              <span className="gold">for decades, not quarters.</span>
            </h2>
            <p className="about-text">
              A global trading and investment group with corridors across Africa,
              India, China, and the UAE — unified by governance, documentation,
              and execution you can brief to any board.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS CARDS ===== */}
      <StatsCards />

      {/* ===== CONTACT + GOOGLE MAP ===== */}
      <section className="contact-section">
        <div className="contact-wrapper">
          {/* Left Side - Form */}
          <div className="contact-right">
            <ContactSection/>
          </div>

          {/* Right Side - Google Map */}
          <div className="contact-right">
            <div className="map-container">
              <iframe
                title="CK Group Location - Udaipur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115579.15691498498!2d73.62291058671873!3d24.571324799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56c3e77f995%3A0xb4d5c1e8c3b08e89!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-details">
              <div className="map-detail-item">
                <span className="map-detail-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Udaipur, Rajasthan, India</p>
                </div>
              </div>
              <div className="map-detail-item">
                <span className="map-detail-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>info@ckgroup.com</p>
                </div>
              </div>
              <div className="map-detail-item">
                <span className="map-detail-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 000 000 0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
};

export default Home;

