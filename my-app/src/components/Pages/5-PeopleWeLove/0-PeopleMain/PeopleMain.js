import React from "react";
import Tributes from "../1-Tributes/0-Tribute-Main/Tributes";
import PeopleNav from "../PeopleNav";

const PeopleMain = () => {
  return (
    <section className="PeopleWeLove">
      <PeopleNav currentPage="people-we-love" />
      <Tributes />
    </section>
  );
};

export default PeopleMain;
