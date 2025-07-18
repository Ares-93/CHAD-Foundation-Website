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
            <img src={LindsayPhoto} alt="Lindsay Shoaff" className="lindsay-photo" />
          </div>
          <div className="survivorsPeople-text">
            <p>
              "I've been playing water polo since I was 11 years old, and I never had any reason to believe I wasn't healthy or was in any danger other than an injury from the game. When I was 13, my Mom took some of us to the Chad 16th Volleyball fundraiser. She assured me the heart screening they were offering wouldn't hurt. She was right, but my life has changed forever after that screening. I like to think that was the moment I had to start being responsible for my future. I was diagnosed with aortic valve regurgitation and abnormality with stenosis. My doctor encouraged me to continue playing water polo to stay healthy, and I have continued playing it during my collegiate years at Whittier. I am currently majoring in Child Development and minoring in Business Administration and will continue on through Grad school, earning my Masters and credentials in education. After this, I hope to make my childhood dream since I was four come true and become a Kindergarten teacher."
            </p>

            {showFullText && (
              <>
                <p>
                  I will continue to be monitored and have been told I will require a heart valve transplant at some point in my life, but because I am armed with this knowledge and have control and awareness of my body, this may not happen until I am much older. I don't know where I would be without the knowledge I have about my heart. My dreams may never have been possible or seen by my family. I will forever be thankful to Arista for bringing the CHAD Foundation to not only me but so many other people. My support and love will always be with this special group, and I will continue to share my experience and knowledge in hopes that I can help someone understand the importance of these screenings, especially in young children and young athletes. Thank you CHAD Foundation, I have great appreciation and love for being a part of your community!
                </p>
                <p style={{ marginTop: "40px" }}>
                  With love, <br /><br /> Lindsay Shoaff
                </p>
              </>
            )}

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
