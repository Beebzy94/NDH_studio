import React from "react";
// import "../styles/HomePage.css";
import { NavLink } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import SectionOneComponent from "../components/SectionOneComponent";
import SectionTwoComponent from "../components/SectionTwoComponent";
import SectionThreeComponent from "../components/SectionThreeComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
  return (
    <main>
      <HeaderComponent />
      <SectionOneComponent
        title="Who We Are"
        description="NDH is more than design—it's emotion. Marrying luxury with meaning, we
          shape spaces that mirror individual narratives and foster connections.
          Each room becomes an echo of personal stories and dreams realized."
      />
      <SectionTwoComponent title="Design Principles, Life Values" />
      <SectionThreeComponent />
      <FooterComponent />
    </main>
  );
};

export default HomePage;
