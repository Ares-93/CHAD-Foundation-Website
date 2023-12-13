import React from "react";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <section className="homeScreen">
      <div className="main-container">
        <h2 className="homeScreen-subheader">THE CHAD FOUNDATION</h2>
        <h1 className="homeScreen-header">
          RAISING AWARENESS OF HEART-RELATED ABNORMALITIES
        </h1>
        <p className="homeScreen-paragraph">
          Ready to take control of your heart health and prevent sudden cardiac
          death?
        </p>
        <button className="homeScreen-button">Let's Explore</button>
      </div>
    </section>
  );
}

export default HomeScreen;
