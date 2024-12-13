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
      <SectionOneComponent />
      <SectionTwoComponent />
      <SectionThreeComponent />
      <FooterComponent />
    </main>
  );
};

export default HomePage;
