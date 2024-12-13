import React, { useState } from "react";
import "../styles/SectionThreeComponent.css";

const SectionThreeComponent = () => {
  const [catelog, setCatelog] = useState([
    {
      img: "/Oceanic.png",
      img_alt: "Oceanic Elegance",
      title: "Oceanic Elegance",
      description:
        "Embrace the tranquility of coastal living with oceanic elements.",
    },
    {
      img: "/Urban.png",
      img_alt: "Urban Sophistication",
      title: "Urban Sophistication",
      description:
        "Modern and minimalist design in a contemporary urban setting.",
    },
    {
      img: "/Rustic.png",
      img_alt: "Rustic Revival",
      title: "Rustic Revival",
      description: "The charm of a country house with raw, earthy aesthetics.",
    },
  ]);
  return (
    <section className="signature-creations">
      <h2 className="section-title">Signature Creations</h2>
      {catelog.map((cate) => (
        <div className="creation">
          <img src={cate.img} alt="" />
          <div className="creation-description">
            <h3>{ cate.title }</h3>
            <p id="embrace">{ cate.description }</p>
            <a href="#" className="learn-more">
              LEARN MORE
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionThreeComponent;
