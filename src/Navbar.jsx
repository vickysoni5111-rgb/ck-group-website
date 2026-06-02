import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/companies" onClick={() => setMenuOpen(false)}>
              Companies
            </NavLink>
          </li>

          <li>
            <NavLink to="/investment" onClick={() => setMenuOpen(false)}>
              Investment
            </NavLink>
          </li>

          <li>
            <NavLink to="/network" onClick={() => setMenuOpen(false)}>
              Network
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="quote-btn"
              onClick={() => setMenuOpen(false)}
            >
              Get Quote
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;