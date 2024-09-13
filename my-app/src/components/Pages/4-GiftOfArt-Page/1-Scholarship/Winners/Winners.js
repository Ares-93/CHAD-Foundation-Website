import React from "react";
import { useNavigate } from "react-router-dom";
import "./Winners.css";
import GiftOfArtNavigation from "../../GiftOfArtNavigation";
import WinnersImg from "../../../../../images/GiftOfArt-Images/winners-image.jpg";

const Winners = () => {
  const navigate = useNavigate();

  return (
    <section className="Winners">
      <GiftOfArtNavigation currentPage="scholarship" />
      <div className="main-container">
        <div className="winner-section">
          <h2 className="winners-header">Best Student Story</h2>
          <div className="winner-content">
            <img
              src={WinnersImg}
              alt="Best Student Story"
              className="winner-image"
            />
            <div className="winner-text">
              <p className="winner-name">Title</p>
              <p className="winner-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                malesuada arcu nec dui gravida, a aliquet libero suscipit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam malesuada arcu nec dui gravida,
                a aliquet libero suscipit. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada
                arcu nec dui gravida, a aliquet libero suscipit. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas
              </p>
            </div>
          </div>
        </div>

        <div className="winner-section">
          <h2 className="winners-header">Best Athlete</h2>
          <div className="winner-content">
            <img src={WinnersImg} alt="Best Athlete" className="winner-image" />
            <div className="winner-text">
              <p className="winner-name">Title</p>
              <p className="winner-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                malesuada arcu nec dui gravida, a aliquet libero suscipit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam malesuada arcu nec dui gravida,
                a aliquet libero suscipit. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada
                arcu nec dui gravida, a aliquet libero suscipit. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/gift-of-art/scholarship")}
        className="exit-winners-button"
      >
        Exit Winners
      </button>
    </section>
  );
};

export default Winners;
