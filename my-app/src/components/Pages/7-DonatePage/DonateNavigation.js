import React from "react";
import "./DonateNavigation.css";

const DonateNavigation = ({ currentPage }) => {
  const pageTitleMap = {
    "donate-main": "Donate",
  };

  return (
    <section className="DonateNavigation">
      <div className="DonateNavigation-banner">
        <h2 className="DonateNavigation-banner-h2">
          {pageTitleMap[currentPage]}
        </h2>
      </div>
      <div className="main-container">
        <p className="DonateNavigation-banner-p">
        By donating to The Chad Foundation for Athletes and Artists, a non-profit, 501(c)(3) tax-exempt
         charitable organization, you receive the benefit of tax-deductible donations while supporting the
         foundation’s mission: to safeguard young hearts, instill a “Heart Healthy Lifestyle—Body, Mind,and Spirit,” 
         inspire young hearts and minds to be “the best” they can be through the GIFT of Art,and support young dreams 
         through the Annual Chad Scholarship Program.

        </p>
      </div>
    </section>
  );
};

export default DonateNavigation;
