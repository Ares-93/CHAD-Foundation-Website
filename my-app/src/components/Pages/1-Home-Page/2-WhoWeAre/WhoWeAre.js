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
              CHAD’s mission is dual: The Gift of Heart raises awareness of
              Sudden Cardiac Death and Heart Anomalies in Young Athletes and
              Students, promotes preventive heart screenings, CPR, and AEDS, and
              advocates a “Heart-Healthy” Lifestyle through monthly diet tips
              and Health Professional interviews.
            </p>

            <p className="story-text">
              The Gift Art, creates, produces, and sponsors art - film, theatre,
              and books that celebrate stories of all heritages, addresses
              societal issues like anti-substance abuse and bullying, and
              provides “CHAD Annual Scholarships for the “Best
              Scholar-Leader-Athlete,” and “Best Story of the Heart.”
            </p>
            <p className="story-text">
              <strong>
                “Healthy Body, Mind and Spirit” – How Chad Lived his Life
              </strong>
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
