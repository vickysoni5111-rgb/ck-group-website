import React from "react";
import "./Sliding.css"; // Apni CSS file import karein

const items = [
  "Compliance-first delivery",
  "Procurement",
  "Mining rental",
  "China door-to-door",
  "Cashew export"
];

function Sliding() {
  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        {/* Items ko 2 baar map karein taaki infinite scroll smooth lage */}
        {[...items, ...items].map((text, index) => (
          <div key={index} className="item">
            <span className="diamond">◆</span> {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliding;