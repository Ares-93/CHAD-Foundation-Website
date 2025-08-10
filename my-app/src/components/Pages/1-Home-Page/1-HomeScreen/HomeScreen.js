import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./HomeScreen.css";

function HomeScreen() {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    navigate("/education-of-the-heart/heart-fact-page"); 
  };

  return (
    <section className="homeScreen">
      <div className="main-container homeScreen-container">
        <h2 className="homeScreen-subheader">
          THE CHAD FOUNDATION FOR ATHLETES AND ARTISTS
        </h2>
        <h1 className="homeScreen-header">
          RAISING AWARENESS OF HEART-RELATED ABNORMALITIES
        </h1>
        <p className="homeScreen-paragraph">
          Ready to take control of your heart health and prevent sudden cardiac
          death?
        </p>
        <button className="homeScreen-button" onClick={handleExploreClick}>
          Let's Explore
        </button>
      </div>
    </section>
  );
}

export default HomeScreen;
