import React from "react";
import "../styles/SectionThreeComponent.css";

const SectionThreeComponent = () => {
  return (
    <section className="signature-creations">
      <h2 className="section-title">Signature Creations</h2>
      <div className="creation">
        <img src="/Oceanic.png" alt="Oceanic Elegance" />
        <div className="creation-description">
          <h3>Oceanic Elegance</h3>
          <p id="embrace"></p>
          <a href="#" className="learn-more">
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="creation">
        <img src="/Urban.png" alt="Urban Sophistication" />
        <div className="creation-description">
          <h3>Urban Sophistication</h3>
          <p id="modern"></p>
          <a href="#" className="learn-more">
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="creation">
        <img src="/Rustic.png" alt="Rustic Revival" />
        <div className="creation-description">
          <h3>Rustic Revival</h3>
          <p id="charm"></p>
          <a href="#" className="learn-more">
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionThreeComponent;
