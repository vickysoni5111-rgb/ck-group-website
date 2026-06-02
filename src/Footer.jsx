import React from "react";
import "./Footer.css";
import logo from "./assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Section */}
        <div className="footer-company">
          <img
            src={logo}
            alt="CK Group Logo"
            className="footer-logo"
          />

          <h3>CK Group of Companies</h3>

          <p>
            Trusted partner for smart investments,
            strategic services, and global business growth.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>CONTACT</h4>
          <p className="phone">+91 1800-000-PMR</p>
        </div>

        {/* Locations */}
        <div className="footer-locations">

          <div className="location-box">
            <h4>Libya (Tripoli)</h4>
            <p>
              Al Nasr Street, Building 12
              <br />
              Near Martyrs' Square
              <br />
              Tripoli, Libya
            </p>
          </div>

          <div className="location-box">
            <h4>Ghana (Accra)</h4>
            <p>
              No. 45 Independence Avenue
              <br />
              Osu District
              <br />
              Accra, Ghana
            </p>
          </div>

          <div className="location-box">
            <h4>UAE (Dubai)</h4>
            <p>
              Office 210, Al Fahidi Plaza
              <br />
              Al Fahidi Street, Bur Dubai
              <br />
              Dubai, UAE
            </p>
          </div>

        </div>

        {/* Follow */}
        <div className="footer-follow">
          <h4>FOLLOW</h4>

          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="#">YouTube</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CK Group. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;