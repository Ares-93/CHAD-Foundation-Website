import React from "react";
import PeopleNav from "../../PeopleNav";
import SurvivorsPeople from "../1-Survivors -People/SP";

const Survivors = () => {
  return (
    <section className="Survivors">
      <PeopleNav currentPage="survivors" />
      <SurvivorsPeople />
    </section>
  );
};

export default Survivors;
