import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./EduOfTheHeartNav.css";

const EduOfTheHeartNav = ({ currentPage }) => {
  const [activeNav, setActiveNav] = useState(currentPage);

  useEffect(() => {
    if (currentPage === "screening-home") {
      setActiveNav("screening-home");
    } else if (currentPage === "emergency-main") {
      setActiveNav("emergency-main");
    } else if (currentPage === "tips-main") {
      setActiveNav("tips-main");
    } else {
      setActiveNav(currentPage);
    }
  }, [currentPage]);

  const pageTitleMap = {
    "heart-fact-page": "Heart Facts",
    "screening-home": "Screenings",
    "emergency-main": "Emergencies",
    "tips-main": "Expert Health Tips",
  };

  return (
    <section className="EduOfTheHeartNav">
      <div className="EduOfTheHeartNav-banner">
        <h2 className="EduOfTheHeartNav-banner-h2">
          {pageTitleMap[activeNav]}
        </h2>
        <h3 className="EduOfTheHeartNav-banner-h3">Education of the Heart</h3>
      </div>
      <div className="main-container">
        <p className="EduOfTheHeartNav-banner-p">
          “Education of the Heart” raises awareness of Sudden Cardiac Death in
          Young Athletes and Students, promotes 'heart-healthy living' through
          monthly healthy recipes and interviews from health professions, and
          provides life-saving information on Heart Screenings to High Schools
          and Colleges, knowledge of CPR and AED p“Education of the Heart”
          raises awareness of Sudden Cardiac Death in Young Athletes and
          Students and Early Cardiovascular Risk Factors, promotes
          'heart-healthy living' through monthly heart- healthy recipes,
          exercise, and interviews with top health professions. It provides
          life-saving information on Heart Screenings to High Schools, and
          knowledge of CPR and AED placement to prevent SCD.
        </p>
        <div className="EduOfTheHeartNav-menu">
          <ul>
            <li>
              <NavLink
                to="/education-of-the-heart/heart-fact-page"
                className={`eduOfHeart-menu-item ${
                  activeNav === "heart-fact-page"
                    ? "eduOfHeart-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("heart-fact-page")}
              >
                Heart Facts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education-of-the-heart/screening-home"
                className={`eduOfHeart-menu-item ${
                  activeNav === "screening-home"
                    ? "eduOfHeart-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("screening-home")}
              >
                Screenings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education-of-the-heart/emergency-main"
                className={`eduOfHeart-menu-item ${
                  activeNav === "emergency-main"
                    ? "eduOfHeart-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("emergency-main")}
              >
                Emergencies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education-of-the-heart/tips-main"
                className={`eduOfHeart-menu-item ${
                  activeNav === "tips-main" ? "eduOfHeart-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("tips-main")}
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

export default EduOfTheHeartNav;
