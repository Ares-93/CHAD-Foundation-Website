import React from "react";
import HeartFacts from "../1-About-Sudden-Cadiac-Death/AboutCardiacDeath";
import CausesSection from "../2-Causes-Warnings-Risks/Causes";
import CountriesWScreening from "../3-Countries-With-Screening/CountriesWScreening";
import EduOfTheHeartNav from "../../EduOfTheHeartNav";


const HeartFactPage = () => {
  return (
    <section className="HeartFactPage">
      <EduOfTheHeartNav currentPage="heart-fact-page" />
      <HeartFacts />
      <CausesSection />
      <CountriesWScreening />
    </section>
  );
};

export default HeartFactPage;
