import React from "react";
import COS from "../1-Chain-Of-Survival/COS";
import LSA from "../2-Life-Saving-Actions/LSA";
// import LSA from "../2-Life-Saving-Actions/LSA";
import EduOfTheHeartNav from "../../EduOfTheHeartNav";

const Emergency = () => {
  return (
    <section className="emergency-main">
      <EduOfTheHeartNav currentPage="emergency-main" />
      <COS />
      <LSA />
    </section>
  );
};

export default Emergency;
