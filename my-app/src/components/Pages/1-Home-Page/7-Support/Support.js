import React from "react";
import "./Support.css";
import Books from "../../../../images/HomePage-Images/CHAD books.png";
function Support() {
  return (
    <section className="Support">
      <div className="main-container">
        <h2>Support the Chad Foundation:</h2>
        <div className="content">
          <div className="book-display">
            <img className="book-chad" src={Books} alt="Book" />
          </div>
          <div className="text-content">
            <h3>CHAD: A Celebration of Life Beyond a Mother’s Memories</h3>
            <p>
              Celebrating the lives of young athletes lost to Sudden Cardiac
              Death, and the journey of its survivors, this uplifting memoir
              details the 25-year history of The Chad From SCD victims to
              survivors— from heartbreak to heroism— learn about how The Chad
              Foundation has saved lives and shaped a better tomorrow.
            </p>
            <button>Support</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
