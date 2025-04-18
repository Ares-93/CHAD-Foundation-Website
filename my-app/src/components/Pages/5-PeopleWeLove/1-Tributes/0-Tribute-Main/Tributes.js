import React from "react";
import PeopleNav from "../../PeopleNav";
import HonoringLives from "../1-HonoringLives/HL";
import StoriesGrid from "../2-More-Stories/MS";
import NeverForget from "../3-NeverForget/NeverForget";

const Tributes = () => {
  return (
    <section className="Tributes">
      <PeopleNav currentPage="tributes" />
      <HonoringLives />
      <StoriesGrid />
      <NeverForget />
    </section>
  );
};

export default Tributes;
