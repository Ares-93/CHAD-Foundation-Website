import React from "react";
import "./DonateMain.css";
import DonateNavigation from "../DonateNavigation";


const DonateMain = () => {
  return (
    <section className="DonateMain">
      <DonateNavigation currentPage="donate-main" />
      <div className="main-container">
          <h2 className="donate-h2">hello world</h2>
      </div>
    </section>
  );
};

export default DonateMain;
