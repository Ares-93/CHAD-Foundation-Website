import React, { useState, useEffect } from "react";
import "./SurvivorsStories.css";
import QuotationLine from "../../../../images/HomePage-Images/quotation-mark-line.png";
import QuotationMark from "../../../../images/HomePage-Images/quotation-mark.png";

function SurvivorsStories() {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 1060);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 1060);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="survivorsStories">
      <div className="main-container survivorsStories-container">
        <div className="survivorsStories-background"></div>
        <div className="survivorsStories-content">
          <div className="survivorsStories-quotation-div">
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
            <h2 className="survivorsStories-h2">
              My life has changed forever after that screening. I don’t know
              where I would be without the knowledge I have about my heart.
            </h2>
            <img
              src={QuotationLine}
              alt="quotation"
              className="quotationLine-bottom"
            />
            <p className="survivorsStories-p">Lindsay</p>
          </div>
          <button className="survivorsStories-button">
            Read More Survivor’s Stories
          </button>
        </div>
      </div>
    </section>
  );
}

export default SurvivorsStories;
