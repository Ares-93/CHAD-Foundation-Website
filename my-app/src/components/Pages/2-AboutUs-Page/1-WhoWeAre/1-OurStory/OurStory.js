import React, { useState, useEffect } from "react";
import "./OurStory.css";
import ChadPhoto from "../../../../../images/AboutUs-Images/chad-photo.png";
import ChadPhotoResized from "../../../../../images/AboutUs-Images/chad-photo-resized.png";

const OurStory = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSource = windowWidth < 1160 ? ChadPhotoResized : ChadPhoto;

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
            One day he went to play in his football league in the City of
            Angels. It was a glorious, sunny day – a great day for a game. But
            God, the grand Coach of Everything, had other plans that day, April
            23, 1994, and drafted him to the Highest Team for a Higher Purpose.
            This was to be his last game, his last day on Earth. Coming out of a
            huddle, he collapsed and died suddenly of an undiagnosed heart
            abnormality, Dilated Hypertrophic Cardiomyopathy. Chad was just 26
            years old. He had no history of heart disease nor did his family.
            <br />
            <br />
            To prevent this from happening to other young people, Chad’s mom,
            Arista, formed a non-profit organization,{" "}
            <em>The Chad Foundation for Athletes and Artists</em>, which raises
            awareness of Heart Anomalies, promotes heart screenings to prevent
            Sudden Cardiac Death in Athletes, and through the Gift of Art- film,
            theatre, and books expresses the needs of the ‘inner heart’ through
            Art. Chad truly cared about everyone’s most precious dreams,
            regardless of age, heritage, or orientation. His foundation
            continues his legacy. – “Healthy Body, Mind, and Spirit.” – The Gift
            of Heart and Art.
          </div>
          <div className="ourStory-photo">
            <img src={imageSource} alt="Chad" className="chad-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurStory;
