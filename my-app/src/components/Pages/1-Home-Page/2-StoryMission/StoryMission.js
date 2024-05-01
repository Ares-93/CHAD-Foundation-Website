import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./StoryMission.css";
import CHAD from "../../../../images/HomePage-Images/CHAD.jpg";

const StoryMission = () => {
  const navigate = useNavigate(); // Create navigate function instance

  // Function to handle button click
  const handleLearnMoreClick = () => {
    navigate("/about/who-we-are"); // Navigate to the path
  };

  return (
    <section className="StoryMission">
      <div className="main-container">
        <h2 className="storyMission-header">Who Are We: Our Story & Mission</h2>
        <div className="storyMission-content">
          <div className="storyMission-content-left">
            <p className="storyMission-p">
              CHAD’s mission is dual: The Gift of Heart raises awareness of
              Sudden Cardiac Death and Heart Anomalies in Young Athletes and
              Students, promotes preventive heart screenings, CPR, and AEDS, and
              advocates a “Heart-Healthy” Lifestyle through monthly diet tips
              and Health Professional interviews.
              <br /> <br />
              The Gift Art, creates, produces, and sponsors art - film, theatre,
              and books that celebrate stories of all heritages, addresses
              societal issues like anti-substance abuse and bullying, and
              provides “CHAD Annual Scholarships for the “Best
              Scholar-Leader-Athlete,” and “Best Story of the Heart.”
              <br />
              <br />
              <strong>
                “Healthy Body, Mind and Spirit” – How Chad Lived his Life
              </strong>
            </p>
            <button className="storyMission-btn" onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </div>
          <div className="storyMission-image-box">
            <img src={CHAD} alt="Chad" className="storyMission-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryMission;
