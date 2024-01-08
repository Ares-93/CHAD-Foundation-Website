import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./EduOfHeartNav.css";

const EduOfHeartNav = ({ currentPage }) => {
  const [activeNav, setActiveNav] = useState(currentPage);

  useEffect(() => {
    setActiveNav(currentPage);
  }, [currentPage]);

  const pageTitleMap = {
    "heart-facts": "Heart Facts",
    screenings: "Screenings",
    emergencies: "Emergencies",
    "expert-health-tips": "Expert Health Tips",
  };

  return (
    <section className="EduOfHeartNav">
      <div className="EduOfHeartNav-banner">
        <h2 className="EduOfHeartNav-banner-h2">{pageTitleMap[currentPage]}</h2>
        <h3 className="EduOfHeartNav-banner-h3">Education of the Heart</h3>
      </div>
      <div className="main-container">
        <p className="EduOfHeart-Text">
          “Education of the Heart” raises awareness of Sudden Cardiac Death in
          Young Athletes and Students, promotes 'heart-healthy living' through
          educational lectures, videos, books, and provides "Cardiovascular
          Screenings to High Schools, Colleges, Athletic Organizations and the
          Disenfranchised" to prevent Sudden Cardiac Death, and identify early
          cardiovascular risk factors.
        </p>
        <div className="EduOfHeartNav-menu">
          <ul>
            {/*Heart Facts*/}
            <li>
              <NavLink
                to="/EduOfHeart/Heart-Facts"
                className={`edu-of-heart-item ${
                  activeNav === "heart-facts" ? "edu-of-heart-item-active" : ""
                }`}
                onClick={() => setActiveNav("heart-facts")}
              >
                Heart Facts
              </NavLink>
            </li>
            {/*Screenings*/}
            <li>
              <NavLink
                to="/EduOfHeart/screenings"
                className={`edu-of-heart-item ${
                  activeNav === "screenings" ? "edu-of-heart-item-active" : ""
                }`}
                onClick={() => setActiveNav("screenings")}
              >
                Screenings
              </NavLink>
            </li>
            {/*Emergencies*/}
            <li>
              <NavLink
                to="/EduOfHeart/emergencies"
                className={`edu-of-heart-item ${
                  activeNav === "emergencies" ? "edu-of-heart-item-active" : ""
                }`}
                onClick={() => setActiveNav("emergencies")}
              >
                Emergencies
              </NavLink>
            </li>
            {/*Expert Health Tips*/}
            <li>
              <NavLink
                to="/EduOfHeart/expert-health-tips"
                className={`edu-of-heart-item ${
                  activeNav === "expert-health-tips"
                    ? "edu-of-heart-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("expert-health-tips")}
              >
                Expert Health Tips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EduOfHeartNav;
