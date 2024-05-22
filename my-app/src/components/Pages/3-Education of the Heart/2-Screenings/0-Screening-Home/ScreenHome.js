import React from "react";
import Stats from "../1-Statistics/Stats";
import Importance from "../2-Importance/Importance";
import HSS from "../3-Heart-Screen-Stats/HSS";

const ScreenHome = () => {
  return (
    <section className="ScreeningPage">
      <Stats />
      <Importance />
      <HSS />
    </section>
  );
};

export default ScreenHome;
