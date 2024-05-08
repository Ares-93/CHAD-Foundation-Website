import React from "react";
import PeopleNav from "../../PeopleNav";
import "./Tributes.css";
import HonoringLives from "../1-HonoringLives/HL";
import StoriesGrid from "../2-More-Stories/MS";

const Tributes = () => {
  return (
    <section className="Tributes">
      <PeopleNav currentPage="tributes" />
      <HonoringLives />
      <StoriesGrid />
    </section>
  );
};

export default Tributes;
