import React from "react";
import PeopleNav from "../../PeopleNav";
import "./Tributes.css";
import HonoringLives from "../1-HonoringLives/HL";

const Tributes = () => {
  return (
    <section className="Tributes">
      <PeopleNav currentPage="tributes" />
      <HonoringLives />
    </section>
  );
};

export default Tributes;
