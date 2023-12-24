import React from "react";
import "./OurStory.css";
import ChadPhoto from "../../../../../images/AboutUs-Images/chad-photo.png";

const OurStory = () => {
  return (
    <section className="OurStory">
      <div className="main-container">
        <h2 className="ourStory-header">Our Story</h2>
        <div className="ourStory-content">
          <div className="ourStory-text">
            Once upon a time, there was a grand, strapping young man named Chad
            who loved athletics, history, people, and life. He believed in
            nurturing a healthy body, mind, and spirit. He never drank, smoked,
            or did drugs. He was loved by many friends and family members for
            his exuberance, optimism, curiosity, and joyfulness.
            <br />
            <br />
            One day he went out to play in his football league in the City of
            Angels. It was a glorious, sunny day – a great day for a game. But
            God, the grand Coach of Everything, had other plans for his fair Son
            that day, April 23, 1994, and drafted him to the Highest Team for a
            Higher Purpose. Chad was just 26 years old.{" "}
          </div>
          <div className="ourStory-photo">
            <img src={ChadPhoto} alt="Chad" className="chad-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurStory;
