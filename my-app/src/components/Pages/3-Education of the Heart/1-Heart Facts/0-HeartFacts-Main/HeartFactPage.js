import React from "react";
import HeartFacts from "../1-About-Sudden-Cadiac-Death/AboutCardiacDeath";
import CausesSection from "../2-Causes-Warnings-Risks/Causes";
import CountriesWScreening from "../3-Countries-With-Screening/CountriesWScreening";

const HeartFactPage = () => {
  return (
    <section className="HeartFactPage">
      <HeartFacts />
      <CausesSection />
      <CountriesWScreening />
    </section>
  );
};

export default HeartFactPage;
