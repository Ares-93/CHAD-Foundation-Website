import React, { useState, useEffect } from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import "./Books.css";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import CopyRightIcon from "../../../../images/GiftOfArt-Images/copyright-vector.png";
import BooksImageOne from "../../../../images/GiftOfArt-Images/books-image-one.png";
import BooksImageTwo from "../../../../images/GiftOfArt-Images/books-image-two.png";
import BooksVector from "../../../../images/GiftOfArt-Images/books-vector.png";

const Books = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1160);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1160);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="Books">
      <GiftOfArtNavigation currentPage="books" />
      <div className="main-container">
        {/* ONE */}
        <div className="books-content">
          <div className="books-content-left">
            <div className="books-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="books-header">The Gemini Kiid</h2>
              <img src={CopyRightIcon} alt="copyright" width={20} height={20}/>
            </div>
            <div className="books-subtext-box">
              <img src={BooksVector} alt="heart" width={14} height={20} />
              <h4 className="books-subtext">Scholarship Opportunity</h4>
            </div>
            <p className="books-p">
              THE GEMINI KIID is a lovable little character who has many
              different parts, many different feelings, many different actions
              and many different colours. GEMMI is the main character in the
              children’s picture book series, The Adventures of the GEMINI KIID.
              In the first book, The Gemini Kiid Comes To Earth! the ‘little
              kiid’ falls to earth and is adopted by twin siblings, named Keira
              and Kyle Laurent. Though Gemmi is loved by his new family who
              praise his agility, his diversity and his quick mind, Gemmi is
              also smart enough to know and see how different he is.
            </p>
          </div>
          <div className="books-image-box">
            <img src={BooksImageOne} alt="Book" className="books-image" />
          </div>
        </div>
        {/* TWO */}
        <div className="books-content">
          {isSmallScreen ? (
            <>
              <div className="books-content-left">
                <div className="books-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="books-header">Chad book</h2>
                </div>
                <p className="books-p">
                  This uplifting memoir details the 25-year history of The Chad
                  Foundation to safeguard hearts by providing 10,000 screenings
                  and celebrates the lives of young athletes lost to Sudden
                  Cardiac Death, and the journey of survivors whose lives were
                  saved due to early intervention and detection. It is endorsed
                  by Adam Silver, Commissioner of the National Basketball
                  Association and informs how to safeguard your own heart
                  through CPR and AED access. CHAD celebrates life’s spectrum
                  from heartbreak to heroism—“The Heart is the Home of our two
                  greatest gifts – Love and Life,” and must be safeguarded as
                  our most valued possession.
                </p>
              </div>
              <div className="books-image-box">
                <img src={BooksImageTwo} alt="Book" className="books-image" />
              </div>
            </>
          ) : (
            <>
              <div className="books-image-box">
                <img src={BooksImageTwo} alt="Book" className="books-image" />
              </div>
              <div className="books-content-left">
                <div className="books-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="books-header">Chad book</h2>
                </div>
                <p className="books-p">
                  This uplifting memoir details the 25-year history of The Chad
                  Foundation to safeguard hearts by providing 10,000 screenings
                  and celebrates the lives of young athletes lost to Sudden
                  Cardiac Death, and the journey of survivors whose lives were
                  saved due to early intervention and detection. It is endorsed
                  by Adam Silver, Commissioner of the National Basketball
                  Association and informs how to safeguard your own heart
                  through CPR and AED access. CHAD celebrates life’s spectrum
                  from heartbreak to heroism—“The Heart is the Home of our two
                  greatest gifts – Love and Life,” and must be safeguarded as
                  our most valued possession.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Books;
