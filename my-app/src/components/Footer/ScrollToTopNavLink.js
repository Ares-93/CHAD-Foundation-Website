
import React from "react";
import { NavLink } from "react-router-dom";

const ScrollToTopNavLink = ({ to, className, children }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink to={to} className={className} onClick={handleClick}>
      {children}
    </NavLink>
  );
};

export default ScrollToTopNavLink;
