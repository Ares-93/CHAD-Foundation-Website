import React from "react";
import COS from "../1-Chain-Of-Survival/COS";
import LSA from "../2-Life-Saving-Actions/LSA";
// import LSA from "../2-Life-Saving-Actions/LSA";

const Emergency = () => {
  return (
    <section className="emergency-main">
      <COS />
      <LSA />
    </section>
  );
};

export default Emergency;
