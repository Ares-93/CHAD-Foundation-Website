import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./GiftOfArtNavigation.css";

const GiftOfArtNavigation = ({ currentPage }) => {
  const [activeNav, setActiveNav] = useState(currentPage);

  useEffect(() => {
    setActiveNav(currentPage);
  }, [currentPage]);

  const pageTitleMap = {
    scholarship: "Scholarship",
    plays: "Plays",
    films: "Films",
    books: "Books",
    "upcoming-events": "Events",
    "heart-stories": "Stories of the Heart",
  };

  return (
    <section className="GiftOfArtNavigation">
      <div className="GiftOfArtNavigation-banner">
        <h2 className="GiftOfArtNavigation-banner-h2">
          {pageTitleMap[currentPage]}
        </h2>
        <h3 className="GiftOfArtNavigation-banner-h3">Gift of Art</h3>
      </div>
      <div className="main-container">
        <p className="GiftOfArtNavigation-banner-p">
          You can't spell heart without ART. The Chad Foundation celebrates
          stories from artists of all backgrounds. Expanded access to books,
          films, documentaries, and theatre experiences highlighting heroism in
          the face of substance abuse and societal injustice.
        </p>
        <div className="GiftOfArtNavigation-menu">
          <ul>
            <li>
              <NavLink
                to="/gift-of-art/scholarship"
                className={`giftOfArt-menu-item ${
                  activeNav === "scholarship"
                    ? "giftOfArt-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("scholarship")}
              >
                Scholarship
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gift-of-art/plays"
                className={`giftOfArt-menu-item ${
                  activeNav === "plays" ? "giftOfArt-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("plays")}
              >
                Plays
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gift-of-art/films"
                className={`giftOfArt-menu-item ${
                  activeNav === "films" ? "giftOfArt-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("films")}
              >
                Films
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gift-of-art/books"
                className={`giftOfArt-menu-item ${
                  activeNav === "books" ? "giftOfArt-menu-item-active" : ""
                }`}
                onClick={() => setActiveNav("books")}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gift-of-art/upcoming-events"
                className={`giftOfArt-menu-item ${
                  activeNav === "upcoming-events"
                    ? "giftOfArt-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("upcoming-events")}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gift-of-art/heart-stories"
                className={`giftOfArt-menu-item ${
                  activeNav === "heart-stories"
                    ? "giftOfArt-menu-item-active"
                    : ""
                }`}
                onClick={() => setActiveNav("heart-stories")}
              >
                Stories of the Heart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GiftOfArtNavigation;
