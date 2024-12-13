import React from "react";
import "../styles/HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <div className="logo">NDH STUDIO</div>
        <ul className="nav-links">
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">BLOGS</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <div className="hero-content">
          <h1>
            Beyond Design:
            <br />
            It's a Lifestyle
          </h1>
          <p id="lux">
            With LuxVibe, every room becomes a statement, a reflection of
            elegance, personality, and the unique rhythm of your life.
          </p>
          <a href="#" className="cta">
            BEGIN YOUR DESIGN JOURNEY →
          </a>
        </div>
        <div className="image-gallery">
          <img
            src="/nathan-van-egmond-0IwypLLbHiA-unsplash 1.png"
            alt="Room design 1"
          />
          <img
            src="/kam-idris-_HqHX3LBN18-unsplash 1.png"
            alt="Room design 2"
          />
          <div className="arrow-navigation">
            <img src="/Left.png" alt="Previous" className="arrow" />
            <img src="/Right.png" alt="Next" className="arrow" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
