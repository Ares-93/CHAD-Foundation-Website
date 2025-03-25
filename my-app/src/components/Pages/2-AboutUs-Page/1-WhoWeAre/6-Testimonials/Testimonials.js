import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import QuotationLine from "../../../../../images/HomePage-Images/quotation-mark-line.png";
import QuotationMark from "../../../../../images/HomePage-Images/quotation-mark.png";
import { useNavigate } from "react-router-dom";

function Testimonials() {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 1060);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 1060);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="Testimonials">
      <div className="main-container">
        <h2 className="Testimonials-header">Testimonials</h2>
        <div className="Testimonials-container">
          <div className="Testimonials-background"></div>
          <div className="Testimonials-content">
            <div className="Testimonials-quotation-div">
              {isSmall && (
                <img
                  src={QuotationMark}
                  alt="quotation mark"
                  className="quotationMark"
                />
              )}
              <img
                src={QuotationLine}
                alt="quotation"
                className="quotationLine-top"
              />
              <h2 className="Testimonials-h2">
                My life has changed forever after that screening. I don’t know
                where I would be without the knowledge I have about my heart.
              </h2>
              <img
                src={QuotationLine}
                alt="quotation"
                className="quotationLine-bottom"
              />
              <p className="Testimonials-p">Lindsay</p>
            </div>

            <button
              onClick={() => navigate("/people-we-love/survivors")}
              className="Testimonials-button"
            >
              Read More Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
