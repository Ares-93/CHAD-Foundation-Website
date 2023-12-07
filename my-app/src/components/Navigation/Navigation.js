import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="navbar-logo"></div> 
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/gift-of-the-heart">Gift of Heart</a>
        </li>
        <li>
          <a href="/gift-of-the-art">Gift of Art</a>
        </li>
        <li>
          <a href="/people-we-love">People We Love</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button className="support-button">Support</button>
    </nav>
  );
}

export default Navigation;
