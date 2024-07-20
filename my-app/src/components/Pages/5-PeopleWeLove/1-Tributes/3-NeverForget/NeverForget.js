import React from "react";
import Arrow from "../../../../../images/PeopleWeLove-Images/ArrowDown.png";
import Memorial from "../../../../../images/PeopleWeLove-Images/NeverForget.png";
import "./NeverForget.css";

const NeverForget = () => {
  return (
    <section className="NeverForget">
      <div className="main-container">
        <div className="arrow-down">
          <img src={Arrow} alt="Arrow" className="Arrow" />
          <h3 className="nf-text">Never Forget</h3>
        </div>
        <div className="memorial">
          <img src={Memorial} alt="memorial" className="memorial" />
        </div>
      </div>
    </section>
  );
};

export default NeverForget;
