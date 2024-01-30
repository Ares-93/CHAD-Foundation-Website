import React from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import "./Films.css";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import FilmsOne from "../../../../images/GiftOfArt-Images/films-image-one.png";
import FilmsTwo from "../../../../images/GiftOfArt-Images/films-image-two.png";

const Films = () => {
  return (
    <section className="Films">
      <GiftOfArtNavigation currentPage="films" />
      <div className="main-container">
        {/* ONE */}
        <div className="films-content">
          <div className="films-content-left">
            <div className="films-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="films-header">Earthen</h2>
            </div>
            <div className="films-subtext-box">
              <h4 className="films-subtext">Date: TBD</h4>
            </div>
            <p className="films-p">
              The indie screenplay, EARTHEN, is a romantic dramedy and a
              contemporary love story with a beautiful Cherokee thread woven
              within. It is a poignant, funny story about a southern,
              down-to-earth cowboy who brings a NY cocktail waitress away from
              the glitz, materialism and promiscuity... Read More
            </p>
          </div>
          <div className="films-image-box">
            <img src={FilmsOne} alt="Films" className="films-image" />
          </div>
        </div>
        {/* TWO */}
        <div className="films-content">
          <div className="films-image-box">
            <img src={FilmsTwo} alt="Films" className="films-image" />
          </div>
          <div className="films-content-right">
            <div className="films-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="films-header">USA</h2>
            </div>
            <div className="films-subtext-box">
              <h4 className="films-subtext">Date: TBD</h4>
            </div>
            <p className="films-p">
              In NYC alone, 38,000 homeless individuals use the shelter system
              every night. Until I had the privilege to get to know these
              individuals, I, too, only saw the vacant stares and stooped
              shoulders. They taught me what it feels like to have fallen to the
              deepest part of the barrel, and how excruciating... Read More
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Films;
