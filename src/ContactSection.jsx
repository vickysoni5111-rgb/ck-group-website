import React, { useState } from "react";
import "./ContactSection.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function ContactSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.fullName.value,
      email: e.target.workEmail.value,
      phone: e.target.phone.value,
      details: e.target.projectDetails.value,
      createdAt: new Date().toISOString(),
    };

    try {
      setLoading(true);

      await addDoc(collection(db, "contacts"), formData);

      e.target.reset();

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="success-popup">
          ✅ Your Message is Successfully Submitted in Firebase Database
        </div>
      )}

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="contact-label">CONTACT US</span>
          <h2 className="contact-heading">
            Let’s build something amazing
          </h2>
          <p className="contact-desc">
            Share your idea — we’ll respond within 1 hour and help you build it.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-row">
              <input type="text" name="fullName" placeholder="Full Name" required />
              <input type="email" name="workEmail" placeholder="Email Address" required />
            </div>

            <input type="tel" name="phone" placeholder="Phone Number" required />

            <textarea
              name="projectDetails"
              rows="5"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button className="c-submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;