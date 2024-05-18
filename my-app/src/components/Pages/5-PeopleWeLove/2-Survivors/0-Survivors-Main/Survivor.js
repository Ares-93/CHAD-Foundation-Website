import React from "react";
import PeopleNav from "../../PeopleNav";
import SurvivorsPeople from "../1-Survivors -People/SP";
import SurvivorStoriesGrid from "../2-More-Survivor-Stories/MSS";

const Survivors = () => {
  return (
    <section className="Survivors">
      <PeopleNav currentPage="survivors" />
      <SurvivorsPeople />
      <SurvivorStoriesGrid />
    </section>
  );
};

export default Survivors;
