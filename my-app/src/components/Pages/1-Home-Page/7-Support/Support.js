import React from "react";
import "./Support.css";
import Books from "../../../../images/HomePage-Images/CHADBooks.png";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  return (
    <section className="Support">
      <div className="main-container">
        <h2>The Chad Foundation Memoir Book:</h2>
        <div className="content">
          <div className="book-display">
            <img className="book-chad" src={Books} alt="Book" />
          </div>
          <div className="text-content">
            <h3>CHAD: A Celebration of Life Beyond a Mother’s Memories</h3>
            <p>
              Celebrating the lives of young athletes lost to Sudden Cardiac
              Death and the journey of its survivors, this uplifting memoir
              details the 25-year history of The Chad Foundation for Athletes
              and Artists to safeguard hearts by providing 10,000 Echocardiogram
              and EKG screenings in 5 states, and Austria, and Sweden. It shares
              heartfelt stories of other Families who have lost children to SCD
              and presents the history and importance of heart screenings—its
              pros and cons— through scientific studies, and the lifesaving
              tools—AEDs and CPR. The book has the endorsement of Adam Silver,
              Commissioner of the National Basketball Association. From Sudden
              Cardiac Victims to Survivors — heartbreak to heroism — learn how
              The Chad Foundation and countless advocate organizations, and
              cardiologists and health professionals worldwide have safeguarded
              the lives of youth so they will have a better future.
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
