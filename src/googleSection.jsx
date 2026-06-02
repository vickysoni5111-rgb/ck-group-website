import React from "react";
import "./googleSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <form className="contact-form">
          <h2>Start your mobilization</h2>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Work email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Project details"></textarea>
          <button type="submit">Send request</button>
        </form>

        <div className="contact-info">
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?..." title="map"></iframe>
          </div>
          <div className="hotline-box">
            <h3>Need a faster line?</h3>
            <p>Enterprise hotline (demo): +91 1800-000-PMR</p>
            <button>Explore companies</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;