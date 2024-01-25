import React from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import "./Scholarship.css";
import StudentPhoto from "../../../../images/GiftOfArt-Images/scholarship-image.png";
import HeartIcon from "../../../../images/GiftOfArt-Images/scholarship-heart-icon.png";

const Scholarship = () => {
  return (
    <section className="Scholarship">
      <GiftOfArtNavigation currentPage="scholarship" />
      <div className="main-container">
        <div className="scholarship-content">
          <div className="scholarship-content-left">
            <div className="scholarship-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60}/>
              <h2 className="scholarship-header">Gift of Art Scholarship</h2>
            </div>
            <p className="scholarship-p">
              Lorem ipsum dolor sit amet consectetur. Tellus dictum mattis
              pretium at tristique morbi nunc. Erat aliquet morbi suspendisse
              amet purus montes semper in rhoncus. Malesuada accumsan enim porta
              et nulla pretium dui. Non justo arcu adipiscing consectetur
              curabitur luctus est. Augue aenean porttitor elit elementum. Ac
              consequat sagittis tellus justo justo nibh quam ac. Diam a
              penatibus
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
