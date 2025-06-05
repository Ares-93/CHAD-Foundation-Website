import React from "react";
import { useNavigate } from "react-router-dom";
import GiftOfArtNavigation from "../../GiftOfArtNavigation";
import "./Scholarship.css";
import StudentPhoto from "../../../../../images/GiftOfArt-Images/scholarship-image.jpg";
import HeartIcon from "../../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import FriendsLetters from "../FriendsLetters/FriendsLetters";
import WishListTwo from "../WishListTwo/WishlistTwo";

const Scholarship = () => {
  const navigate = useNavigate();

  // const handleApplicationClick = () => {
  //   window.open("https://forms.gle/VmkcTnfdUuV8tppD8", "_blank");
  // };

  const handleApplicationClick = () => {
     navigate("/gift-of-art/scholarship/guidelines");
  };

  const handleWinnersClick = () => {
    navigate("/gift-of-art/scholarship/winners");
  };

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
              Every year, The Chad Foundation for Athletes and Artists will
              award six $500 scholarships for high school graduating seniors to
              be used for continuing education in an accredited college,
              university, vocational, or trade school. Qualifying factors will
              be the student’s goals, an essay, and nominations from teachers,
              peers, and community leaders.
            </p>

            <p className="scholarship-p">
              Three scholarships will be awarded for “The Best Athlete, Scholar,
              and Community Volunteer/Leader” and three for “The Best Story of
              the Heart.”
            </p>

            <p className="scholarship-p">
              Stay tuned for details and deadlines!
            </p>
            <div className="scholarship-btns">
              <button
                className="scholarship-btn"
                onClick={handleApplicationClick}
              >
                Submit Application
              </button>
              <button
                className="scholarship-btn-submit"
                onClick={handleWinnersClick}
              >
                Winners
              </button>
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
