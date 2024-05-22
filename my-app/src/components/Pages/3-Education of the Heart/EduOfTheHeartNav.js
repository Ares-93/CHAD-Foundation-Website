import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./EduOfTheHeartNav.css";

const EduOfTheHeartNav = ({ currentPage }) => {
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
    <section className="EduOfTheHeartNav">
      <div className="EduOfTheHeartNav-banner">
        <h2 className="EduOfTheHeartNav-banner-h2">
          {pageTitleMap[currentPage]}
        </h2>
        <h3 className="EduOfTheHeartNav-banner-h3">Education of the Heart</h3>
      </div>
      <div className="main-container">
        <p className="EduOfTheHeartNav-banner-p">
          “Education of the Heart” raises awareness of Sudden Cardiac Death in
          Young Athletes and Students, promotes 'heart-healthy living' through
          monthly healthy recipes and interviews from health professions, and
          provides life-saving information on Heart Screenings to High Schools
          and Colleges, knowledge of CPR and AED placement to prevent SCD, and
          identify early cardiovascular risk factors.
        </p>
        <div className="EduOfTheHeartNav-menu">
          <ul>
            <li>
              <NavLink
                to="/education-of-heart/heart-facts"
                className={`eduOfHeart-menu-item ${
                  activeNav === "heart-facts"
                    ? "eduOfHeart-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("heart-facts")}
              >
                Heart Facts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education-of-heart/screenings"
                className={`eduOfHeart-menu-item ${
                  activeNav === "screenings"
                    ? "eduOfHeart-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("screenings")}
              >
                Screenings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education-of-heart/emergencies"
                className={`eduOfHeart-menu-item ${
                  activeNav === "emergencies"
                    ? "eduOfHeart-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("emergencies")}
              >
                Emergencies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education-of-heart/expert-health-tips"
                className={`eduOfHeart-menu-item ${
                  activeNav === "expert-health-tips"
                    ? "eduOfHeart-menu-item-active"
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

export default EduOfTheHeartNav;
