import React from "react";
import "./SP.css";
import LindsayPhoto from "../../../../../images/PeopleWeLove-Images/Lindsay.png";

const SurvivorsPeople = () => {
  return (
    <section className="SurvivorsPeople">
      <div className="survivors-main-container">
        <h2 className="survivors-people-header">Survivors</h2>
        <div className="survivorsPeople-content">
          <div className="survivorsPeople-photo">
            <img src={LindsayPhoto} alt="Lindsay" className="Lindsay-photo" />
          </div>
          <div className="survivorsPeople-text">
            <p className="para1">
              “I will continue to be monitored and I will require at some point
              in my life a heart valve transplant. My dreams may never have been
              possible or seen by my family. I will forever be grateful to
              Arista for bringing the CHAD Foundation to not only me but so many
              people.”
            </p>
            <p>
              With love, <br />
              <br /> Lindsay Shoaff
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurvivorsPeople;
