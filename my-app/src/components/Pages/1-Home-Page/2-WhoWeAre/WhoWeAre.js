import React from "react";
import "./WhoWeAre.css";
import CHAD from "../../../../images/HomePage-Images/CHAD.png";

const WhoWeAre = () => {
  return (
    <section className="story-mission">
      <div className="main-container">
        <div className="header-container">
          <h2 className="story-subheader">Who Are We: Our Story & Mission</h2>
        </div>
        <div className="content-container">
          <div className="text-container">
            <p className="story-text">
              The mission of The Chad Foundation for Athletes and Artists is
              two-fold: First, to raise awareness of Sudden Cardiac Death in
              Young Athletes and Students.
            </p>

            <p className="story-text">
              Secondly, as artists our mission is to create/produce/sponsor art
              - film, theatre, and books that celebrate American stories of all
              heritages.
            </p>
            <button className="Learn-More-Btn">Learn More</button>
          </div>
          <div className="image-container">
            <img className="story-chad" src={CHAD} alt="Chad's Story" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
