import React from "react";
import "../styles/SectionOneComponent.css";

const SectionOneComponent = ({ title, description }) => {
  return (
    <div className="new-layout">
      <div className="image-left">
        <img src="/WhoWeAre.png" alt="Left side image" />
      </div>
      <div className="image-center">
        <img src="/Element.png" alt="Center image" />
      </div>
      <div className="text-right">
        <h1>{title}</h1>
        <p id="ndh">
          {description}
        </p>
        <a href="#" className="read-more">
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default SectionOneComponent;
