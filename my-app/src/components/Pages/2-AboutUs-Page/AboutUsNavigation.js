// AboutUsNavigation.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./AboutUsNavigation.css";

const AboutUsNavigation = ({ currentPage }) => {
  const [activeNav, setActiveNav] = useState(currentPage);

  useEffect(() => {
    if (currentPage === "full-gallery") {
      setActiveNav("who-we-are");
    } else {
      setActiveNav(currentPage);
    }
  }, [currentPage]);

  const pageTitleMap = {
    "who-we-are": "Who We Are",
    "what-weve-done": "What We Have Done",
    testimonials: "Testimonials",
    board: "Board",
    "full-gallery": "Gallery", 
  };

  return (
    <section className="AboutUsNavigation">
      <div className="AboutUsNavigation-banner">
        <h2 className="AboutUsNavigation-banner-h2">
          {pageTitleMap[activeNav]}
        </h2>
        <h3 className="AboutUsNavigation-banner-h3">About Us</h3>
      </div>
      <div className="main-container">
        <div className="AboutUsNavigation-menu">
          <ul>
            <li>
              <NavLink
                to="/about/who-we-are"
                className={`aboutUs-menu-item ${
                  activeNav === "who-we-are" ? "aboutUs-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("who-we-are")}
              >
                Who We Are
              </NavLink>
            </li>
            {/* What We Have Done */}
            <li>
              <NavLink
                to="/about/what-weve-done"
                className={`aboutUs-menu-item ${
                  activeNav === "what-weve-done"
                    ? "aboutUs-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("what-weve-done")}
              >
                What We Have Done
              </NavLink>
            </li>
            {/* Testimonials */}
            <li>
              <NavLink
                to="/about/testimonials"
                className={`aboutUs-menu-item ${
                  activeNav === "testimonials" ? "aboutUs-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("testimonials")}
              >
                Testimonials
              </NavLink>
            </li>
            {/* Board */}
            <li>
              <NavLink
                to="/about/board"
                className={`aboutUs-menu-item ${
                  activeNav === "board" ? "aboutUs-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("board")}
              >
                Board
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsNavigation;
