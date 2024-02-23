import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./PeopleNav.css";

const PeopleNav = ({ currentPage }) => {
  const [activeNav, setActiveNav] = useState(currentPage);

  useEffect(() => {
    setActiveNav(currentPage);
  }, [currentPage]);

  const pageTitleMap = {
    tributes: "Tributes",
    survivors: "Survivors",
  };

  return (
    <section className="PeopleNav">
      <div className="PeopleNav-banner">
        <h2 className="PeopleNav-banner-h2">{pageTitleMap[currentPage]}</h2>
        <h3 className="PeopleNav-banner-h3">People We Love</h3>
      </div>
      <div className="main-container">
        <p className="PeopleNav-banner-p">
          We honor the memory of those lost to heart disease, celebrating their
          strength and courage, and continuously share their stories.
          Additionally, we share the stories of survivors who have overcome
          heart disease, spreading their unwavering determination and hope.
        </p>
        <div className="PeopleNav-menu">
          <ul>
            <li>
              <NavLink
                to="/people-we-love/tributes"
                className={`people-menu-item ${
                  activeNav === "tributes" ? "people-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("tributes")}
              >
                Tributes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/people-we-love/survivors"
                className={`people-menu-item ${
                  activeNav === "survivors" ? "people-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("survivors")}
              >
                Survivors
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PeopleNav;
