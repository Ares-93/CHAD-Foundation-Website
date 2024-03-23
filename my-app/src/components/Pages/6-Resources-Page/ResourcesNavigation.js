import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ResourcesNavigation.css";

const ResourcesNavigation = ({ currentPage }) => {
  const [activeNav, setActiveNav] = useState(currentPage);

  useEffect(() => {
    setActiveNav(currentPage);
  }, [currentPage]);

  const pageTitleMap = {
    "sca-and-training-resources": "SCA, Screenings, AED & CPR",
    "hospital-screening-resources": "Hospital Screening",
  };

  return (
    <section className="ResourcesNavigation">
      <div className="ResourcesNavigation-banner">
        <h2 className="ResourcesNavigation-banner-h2">
          {pageTitleMap[currentPage]}
        </h2>
        <h3 className="ResourcesNavigation-banner-h3">Resources</h3>
      </div>
      <div className="main-container">
        <p className="ResourcesNavigation-banner-p">
          These Guardians of the Heart have raised awareness of Sudden Cardiac
          Death in Adults and Youth, protected hearts, and prevented deaths
          through Heart Screenings, CPR training, and AED placement. These
          parents and heart organizations are responsible for the preservation
          of thousands of Lives through prevention and awareness.
        </p>
        <div className="main-container">
          <div className="ResourcesNavigation-menu">
            <ul>
              <li>
                <NavLink
                  to="/resources/sca-and-training-resources"
                  className={`resources-menu-item ${
                    activeNav === "sca-and-training-resources"
                      ? "resources-menu-item-active"
                      : ""
                  }`}
                  onClick={() => setActiveNav("sca-and-training-resources")}
                >
                  Resources for SCA, Preventive Screenings, AED and CPR Training
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources/hospital-screening-resources"
                  className={`resources-menu-item ${
                    activeNav === "hospital-screening-resources"
                      ? "resources-menu-item-active"
                      : ""
                  }`}
                  onClick={() => setActiveNav("hospital-screening-resources")}
                >
                  Hospital Screening Resources
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesNavigation;
