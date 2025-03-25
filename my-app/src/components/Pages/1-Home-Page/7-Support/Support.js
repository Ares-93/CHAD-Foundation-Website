import React from "react";
import "./Support.css";
import Books from "../../../../images/HomePage-Images/CHADBooks.png";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

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
              Death and the journey of its survivors, this uplifting memoir
              details the 25-year history of The Chad Foundation to safeguard
              hearts through 10,000 echocardiogram and EKG screenings, shares
              heartfelt stories of other Families who have lost children to SCD,
              and presents the history and importance of heart screenings—its
              pros and cons— through scientific studies. Endorsed by Adam
              Silver, Commissioner of the National Basketball Association, CHAD
              celebrates Life through awareness and advocation of preventive
              screenings, AEDs and CPR. From SCD victims to survivors — from
              heartbreak to heroism — learn how The Chad Foundation and
              countless advocate organizations, and cardiologists have
              safeguarded the lives of youth so they will have a better future.
            </p>
            <button onClick={() => navigate("/gift-of-art/books")}>
              CHAD BOOK EXCERPTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
