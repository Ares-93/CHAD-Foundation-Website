import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import NavLogo from "../../images/Navigation-Images/nav-logo.png";

function Navigation() {
  const [activeNav, setActiveNav] = useState("");

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <section className="main-container">
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid nav-container">
          {/* Logo */}
          <NavLink to="/" className="nav-link" rel="noopener noreferrer">
            <img src={NavLogo} alt="Chad logo" className="navbar-logo" />
          </NavLink>
          <div>
            {/* Collapse toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Nav Menu Links */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Home */}
                <li
                  className={`nav-item ${
                    activeNav === "home" ? "nav-item-active" : ""
                  }`}
                  onClick={() => handleNavClick("home")}
                >
                  <NavLink
                    to="/"
                    className="nav-link"
                    rel="noopener noreferrer"
                  >
                    Home
                  </NavLink>
                </li>
                {/* About */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="https://www.google.com/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <ul className="dropdown-menu">
                    {/* Who We Are */}
                    <li>
                      <NavLink
                        to="/about/who-we-are"
                        className={`dropdown-item ${
                          activeNav === "who-we-are"
                            ? "dropdown-item-active"
                            : ""
                        }`}
                        onClick={() => handleNavClick("who-we-are")}
                      >
                        Who We Are
                        <br />
                        <span className="dropdown-span">
                          Our Mission & Story
                        </span>
                      </NavLink>
                    </li>
                    {/* What We Have Done */}
                    <li>
                      <NavLink
                        to="/about/what-weve-done"
                        className={`dropdown-item ${
                          activeNav === "what-weve-done"
                            ? "dropdown-item-active"
                            : ""
                        }`}
                        onClick={() => handleNavClick("what-weve-done")}
                      >
                        What We Have Done
                        <br />
                        <span className="dropdown-span">
                          Hospitals we have worked with.
                        </span>
                      </NavLink>
                    </li>
                    {/* Testimonials */}
                    <li>
                      <NavLink
                        to="/about/testimonials"
                        className={`dropdown-item ${
                          activeNav === "testimonials"
                            ? "dropdown-item-active"
                            : ""
                        }`}
                        onClick={() => handleNavClick("testimonials")}
                      >
                        Testimonials
                        <br />
                        <span className="dropdown-span">
                          What Our supporters have to say.
                        </span>
                      </NavLink>
                    </li>
                    {/* Board */}
                    <li>
                      <NavLink
                        to="/about/board"
                        className={`dropdown-item ${
                          activeNav === "board" ? "dropdown-item-active" : ""
                        }`}
                        onClick={() => handleNavClick("board")}
                      >
                        Board
                        <br />
                        <span className="dropdown-span">
                          Everyone who made this foundation happen.
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* Gift of Heart */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gift of Heart
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Heart Facts
                        <br />
                        <span className="dropdown-span">
                          Sudden Cardiac Death statistics and warning signs.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Screenings
                        <br />
                        <span className="dropdown-span">
                          Learn the best way to detect heart complications.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Emergencies
                        <br />
                        <span className="dropdown-span">
                          How to take action in the event of an emergency.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Expert Health Tips
                        <br />
                        <span className="dropdown-span">
                          Advice from professionals to live a healthy life.
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Gift of Art */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gift of Art
                  </a>
                  <ul className="dropdown-menu">
                    {/* Scholarships */}
                    <li>
                      <NavLink
                        to="/gift-of-art/scholarships"
                        className={`dropdown-item ${
                          activeNav === "scholarships"
                            ? "dropdown-item-active"
                            : ""
                        }`}
                        onClick={() => handleNavClick("scholarships")}
                      >
                        Scholarships
                        <br />
                        <span className="dropdown-span">
                          Great opportunity for students.
                        </span>
                      </NavLink>
                    </li>
                    {/* Plays */}
                    <li>
                      <NavLink
                        to="/gift-of-art/plays"
                        className={`dropdown-item ${
                          activeNav === "plays" ? "dropdown-item-active" : ""
                        }`}
                        onClick={() => handleNavClick("plays")}
                      >
                        Plays
                        <br />
                        <span className="dropdown-span">
                          Learning experiences through storytelling and theatre.
                        </span>
                      </NavLink>
                    </li>
                    {/* Films */}
                    <li>
                      <NavLink
                        to="/gift-of-art/films"
                        className={`dropdown-item ${
                          activeNav === "films" ? "dropdown-item-active" : ""
                        }`}
                        onClick={() => handleNavClick("films")}
                      >
                        Films
                        <br />
                        <span className="dropdown-span">
                          Films with eye-opening messages.
                        </span>
                      </NavLink>
                    </li>
                    {/* Books */}
                    <li>
                      <NavLink
                        to="/gift-of-art/books"
                        className={`dropdown-item ${
                          activeNav === "books" ? "dropdown-item-active" : ""
                        }`}
                        onClick={() => handleNavClick("books")}
                      >
                        Books
                        <br />
                        <span className="dropdown-span">
                          Stories that nourish the spirit.
                        </span>
                      </NavLink>
                    </li>
                    {/* Upcoming Events */}
                    <li>
                      <NavLink
                        to="/gift-of-art/upcoming-events"
                        className={`dropdown-item ${
                          activeNav === "upcoming-events"
                            ? "dropdown-item-active"
                            : ""
                        }`}
                        onClick={() => handleNavClick("upcoming-events")}
                      >
                        Upcoming Events
                        <br />
                        <span className="dropdown-span">
                          Check out events to keep an eye for!
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* People We Love */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    People We Love
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tributes
                        <br />
                        <span className="dropdown-span">
                          Honoring young lives.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Survivors
                        <br />
                        <span className="dropdown-span">
                          Read stories from our Survivors.
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Contact */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                </li>
                {/* Support Button */}
                <button className="btn support-button" type="button">
                  Support
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;
