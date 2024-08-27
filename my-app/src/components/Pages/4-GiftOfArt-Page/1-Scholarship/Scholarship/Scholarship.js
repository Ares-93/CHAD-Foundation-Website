import React from "react";
import GiftOfArtNavigation from "../../GiftOfArtNavigation";
import "./Scholarship.css";
import StudentPhoto from "../../../../../images/GiftOfArt-Images/scholarship-image.jpg";
import HeartIcon from "../../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import FriendsLetters from "../FriendsLetters/FriendsLetters";
import WishListTwo from "../WishListTwo/WishlistTwo";

const Scholarship = () => {
  return (
    <section className="Scholarship">
      <GiftOfArtNavigation currentPage="scholarship" />
      <div className="main-container">
        <div className="scholarship-content">
          <div className="scholarship-content-left">
            <div className="scholarship-header-box">
              <img src={HeartIcon} alt="heart" width={40} height={40} />
              <h2 className="scholarship-header">
                The Annual CHAD Scholarship Program
              </h2>
            </div>
            <p className="scholarship-p">
              When Chad saw you, he only saw you. He never saw color, heritage,
              or sexual orientation. He looked deep within and saw your unique
              potential and encouraged it. He cared about your fondest dreams,
              your talents, and unique potential. The Chad Foundation
              Scholarship exists for Each of You – It’s Chad’s Gift to You!
            </p>
            <p className="scholarship-p">
              <strong>How the Chad Scholarship Program works </strong>
            </p>
            <p className="scholarship-p">
              Every year, The Chad Foundation for Athletes and Artists will
              offer two $1,000 scholarships for High School graduating Seniors,
              nominated by our peers.
            </p>
            <p className="scholarship-p">
              One for “The Best Athlete, Scholar and Community Volunteer,” and
              One for “The Best Story of the Heart”
            </p>
            <p className="scholarship-p">
              Stay tuned for details and deadlines!
            </p>
            <div className="scholarship-btns">
              <button className="scholarship-btn">Submit Application</button>
              <button className="scholarship-btn-submit">Winners</button>
            </div>
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
      <div className="main-container">
        <FriendsLetters />
      </div>
      <div className="main-container">
        <WishListTwo />
      </div>
    </section>
  );
};

export default Scholarship;
