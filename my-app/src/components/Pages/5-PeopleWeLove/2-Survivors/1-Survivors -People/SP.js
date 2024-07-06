import React, { useState } from "react";
import "./SP.css";
import LindsayPhoto from "../../../../../images/PeopleWeLove-Images/Lindsay.png";

const SurvivorsPeople = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreToggle = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className="SurvivorsPeople">
      <div className="main-container">
        <h2 className="survivors-people-header">Survivors</h2>
        <div className="survivorsPeople-content">
          <div className="survivorsPeople-photo">
            <img src={LindsayPhoto} alt="Lindsay" className="Lindsay-photo" />
          </div>
          <div className="survivorsPeople-text">
            <p className="para1">
              “I’ve been playing water polo since I was 11. When I was 13 my Mom
              took us to the “Chad 16th Volleyball Benefit.” She assured me the
              heart screening wouldn’t hurt. She was right, but my life changed
              forever after that screening. I’d like to think that was the
              moment I had to start being responsible for my future. I was
              diagnosed with aortic valve regurgitation and abnormality with
              stenosis.
              {showFullText && (
                <>
                  {" "}
                  I will continue to be monitored and will require a heart valve
                  transplant at some point in my life. I don’t know where I
                  would be without the knowledge I have about my heart. My
                  dreams may never have been possible or seen by my family. I am
                  currently majoring in Child Development and minoring in
                  Business Administration and will continue on through Grad
                  School earning my Master’s and hope to make my childhood dream
                  since I was four come true and become a Kindergarten teacher.
                  Thank you CHAD Foundation, I have great appreciation and love
                  for being a part of your community!
                  <br />
                  <br /> With love, <br /> Lindsay Shoaff
                </>
              )}
            </p>
            <button className="readMore-btn" onClick={handleReadMoreToggle}>
              {showFullText ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurvivorsPeople;
