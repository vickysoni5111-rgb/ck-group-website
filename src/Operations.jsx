import React from "react";
import { Carousel } from "react-bootstrap";
import "./Operations.css";

import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import pic4 from "./assets/pic4.jpeg";

function Operations() {
  return (
    <section className="operations-section">

      <div className="operations-header">
        <h2>Our Core Operations</h2>
        <p>
          Strategic industrial, logistics, and export solutions built for
          sustainable growth and global excellence.
        </p>
      </div>

      <Carousel
        fade
        indicators
        controls
        interval={6000}
        pause={false}
      >

        {/* Slide 1 */}

        <Carousel.Item>
          <div className="operation-card">

            <img
              className="operation-image"
              src={pic1}
              alt="Industrial Procurement"
            />

            <div className="operation-content">
              <span className="pillar">Pillar 01</span>

              <h3>Industrial Procurement</h3>

              <p>
                Sourcing, specification, and supplier governance for heavy
                machinery and industrial assets — built for uptime and
                audit-ready documentation.
              </p>
            </div>

          </div>
        </Carousel.Item>

        {/* Slide 2 */}

        <Carousel.Item>
          <div className="operation-card">

            <img
              className="operation-image"
              src={pic2}
              alt="Industrial Procurement"
            />

            <div className="operation-content">
              <span className="pillar">Pillar 02</span>

              <h3>Industrial Solutions</h3>

              <p>
                Advanced industrial operations and asset management designed
                for efficiency, scalability, and long-term growth.
              </p>
            </div>

          </div>
        </Carousel.Item>

        {/* Slide 3 */}

        <Carousel.Item>
          <div className="operation-card">

            <img
              className="operation-image"
              src={pic3}
              alt="International Trade Corridor"
            />

            <div className="operation-content">
              <span className="pillar">Pillar 03</span>

              <h3>International Trade Corridor</h3>

              <p>
                Door-to-door import programs and corridor logistics —
                coordinated milestones, transparent handoffs, and
                compliance-first execution.
              </p>
            </div>

          </div>
        </Carousel.Item>

        {/* Slide 4 */}

        <Carousel.Item>
          <div className="operation-card">

            <img
              className="operation-image"
              src={pic4}
              alt="Agri Export"
            />

            <div className="operation-content">
              <span className="pillar">Pillar 04</span>

              <h3>Agri Export & Quality Trade</h3>

              <p>
                Premium cashew and agricultural export desks with grading
                rigor, traceability, and long-term buyer relationships.
              </p>
            </div>

          </div>
        </Carousel.Item>

      </Carousel>

    </section>
  );
}

export default Operations;