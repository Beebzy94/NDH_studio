import React from "react";
import "../styles/SectionOneComponent.css";

const SectionOneComponent = () => {
  return (
    <div className="new-layout">
      <div className="image-left">
        <img src="/WhoWeAre.png" alt="Left side image" />
      </div>
      <div className="image-center">
        <img src="/Element.png" alt="Center image" />
      </div>
      <div className="text-right">
        <h1>Who We Are</h1>
        <p id="ndh">
          NDH is more than design—it's emotion. Marrying luxury with meaning, we
          shape spaces that mirror individual narratives and foster connections.
          Each room becomes an echo of personal stories and dreams realized.
        </p>
        <a href="#" className="read-more">
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default SectionOneComponent;
