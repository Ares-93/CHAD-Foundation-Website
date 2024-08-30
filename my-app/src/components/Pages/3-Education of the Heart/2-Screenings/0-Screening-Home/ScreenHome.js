import React from "react";
import Stats from "../1-Statistics/Stats";
import Importance from "../2-Importance/Importance"; //THIS COMPONENT BREAKS THE PAGE
import HSS from "../3-Heart-Screen-Stats/HSS";
import EduOfTheHeartNav from "../../EduOfTheHeartNav";


const ScreenHome = () => {
  return (
    <section className="ScreeningPage">
      <EduOfTheHeartNav currentPage="screening-home" />
      <Stats />
      <Importance />
      <HSS />
    </section>
  );
};

export default ScreenHome;
