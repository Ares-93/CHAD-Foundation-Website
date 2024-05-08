import React from "react";
import PeopleNav from "../../PeopleNav";
import "./Tributes.css";

const Tributes = () => {
  return (
    <section className="Tributes">
      <PeopleNav currentPage="tributes" />
      <div className="main-container">
        <div className="tribute-content">
          <div className="tribute-content-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Tributes;
