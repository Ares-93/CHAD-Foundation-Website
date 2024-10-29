import React from "react";
import "./DonateMain.css";
import DonateNavigation from "../DonateNavigation";
import DonateSection from "../1-DonateSection/DonateSection";
import ChadMissionSupport from "../2-ChadMissionSupport/ChadMissionSupport";

const DonateMain = () => {
  return (
    <section className="DonateMain">
      <DonateNavigation currentPage="donate-main" />
      <DonateSection />
      <ChadMissionSupport />
    </section>
  );
};

export default DonateMain;
