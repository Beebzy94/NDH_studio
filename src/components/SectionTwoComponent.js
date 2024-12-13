import React from "react";
import "../styles/SectionTwoComponent.css";

const SectionTwoComponent = () => {
  return (
    <section className="new-section">
      <div className="section-title">Design Principles, Life Values</div>
      <div className="section-arrows">
        <img
          src="/Left.png"
          alt="Previous"
          className="arrow"
        />
        <img src="/Right.png" alt="Next" className="arrow" />
      </div>
      <div className="images-row">
        <img src="/Card1.png" alt="Principle 1" />
        <img src="/Card2.png" alt="Principle 2" />
        <img src="/Card3.png" alt="Principle 3" />
        <img src="/Card4.png" alt="Principle 4" />
      </div>
    </section>
  );
};

export default SectionTwoComponent;
