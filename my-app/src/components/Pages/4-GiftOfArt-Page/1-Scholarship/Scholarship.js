import React from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import "./Scholarship.css";
import StudentPhoto from "../../../../images/GiftOfArt-Images/scholarship-image.png";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";

const Scholarship = () => {
  return (
    <section className="Scholarship">
      <GiftOfArtNavigation currentPage="scholarship" />
      <div className="main-container">
        <div className="scholarship-content">
          <div className="scholarship-content-left">
            <div className="scholarship-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="scholarship-header">Gift of Art Scholarship</h2>
            </div>
            <p className="scholarship-p">
              Today our youth’s “inner hearts” are endangered as well. The three
              leading causes of death in children are 1) Firearms, 2) Motor
              Vehicles, 3) Suicides and other Accidents. The “Gift of Heart”
              provides a platform for high school students to express their
              fears, challenges, hopes and dreams through stories, plays, and
              athletics. Here they can share, express, and inform, and we can
              hear their inner heart speaking, effecting a better way for
              change, growth, understanding, and solutions. Chad’s Annual
              Scholarship Program will award an athlete who his peers honor as
              the best “Scholar, Athlete & Leader,” and an artist for the “Best
              Story of the Heart.” - Healthy Body, Mind & Spirit, the way in
              which Chad lived his life
            </p>
            <button className="scholarship-btn">Learn More</button>
          </div>
          <div className="scholarship-image-box">
            <img
              src={StudentPhoto}
              alt="Student"
              className="scholarship-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Scholarship;
