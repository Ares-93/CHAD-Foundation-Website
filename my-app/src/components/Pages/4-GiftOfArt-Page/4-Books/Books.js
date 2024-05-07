import React, { useState, useEffect } from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import "./Books.css";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import CopyRightIcon from "../../../../images/GiftOfArt-Images/copyright-vector.png";
import BooksImageOne from "../../../../images/GiftOfArt-Images/books-image-one.png";
import BooksImageTwo from "../../../../images/GiftOfArt-Images/books-image-two.png";
import BooksVector from "../../../../images/GiftOfArt-Images/books-vector.png";
import AudioBook from "./The_Gemini_Kiid_Audio.mp3";

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
              <div className="gemini-title-box">
                <h2 className="books-header">The Gemini Kiid</h2>

                <img
                  src={CopyRightIcon}
                  alt="copyright"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="gemini-details-box">
              <div className="books-subtext-box">
                <img
                  src={BooksVector}
                  alt="books vector"
                  width={14}
                  height={20}
                />
                <h4 className="books-subtext">Scholarship Opportunity</h4>
              </div>
              <div className="audio-box">
                <p className="books-audio-descr">Story narration by Arista:</p>
                <audio controls className="books-audio-player">
                  <source src={AudioBook} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
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
            <img src={BooksImageOne} alt="Book one" className="books-image" />
          </div>
        </div>
        {/* TWO */}
        <div className="books-content">
          {isSmallScreen ? (
            <>
              <div className="books-content-right">
                <div className="books-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="books-header">
                    CHAD, A Celebration of Life - Beyond a Mother’s Memories
                  </h2>
                </div>
                <p className="books-p books-p-second">
                  Celebrating the lives of young athletes lost to Sudden Cardiac
                  Death, and the journey of its survivors, this uplifting memoir
                  details the 26-year history of The Chad Foundation from SCD
                  victims to survivors— from heartbreak to heroism— learn about
                  how The Chad Foundation has saved lives and shaped a better
                  tomorrow.
                </p>
                <button
                  className="buy-book-btn"
                  onClick={() =>
                    window.open(
                      "https://www.amazon.com/Celebration-Life-Beyond-Mothers-Memories/dp/198225078X",
                      "_blank"
                    )
                  }
                >
                  Donate with Purchase
                </button>
              </div>
              <div className="books-image-box">
                <img
                  src={BooksImageTwo}
                  alt="Book two"
                  className="books-image"
                />
              </div>
            </>
          ) : (
            <>
              <div className="books-image-box">
                <img
                  src={BooksImageTwo}
                  alt="Book two"
                  className="books-image"
                />
              </div>
              <div className="books-content-right">
                <div className="books-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="books-header">
                    CHAD, A Celebration of Life - Beyond a Mother’s Memories
                  </h2>
                </div>
                <p className="books-p books-p-second">
                  Celebrating the lives of young athletes lost to Sudden Cardiac
                  Death, and the journey of its survivors, this uplifting memoir
                  details the 26-year history of The Chad Foundation from SCD
                  victims to survivors— from heartbreak to heroism— learn about
                  how The Chad Foundation has saved lives and shaped a better
                  tomorrow.
                </p>
                <button
                  className="buy-book-btn"
                  onClick={() =>
                    window.open(
                      "https://www.amazon.com/Celebration-Life-Beyond-Mothers-Memories/dp/198225078X",
                      "_blank"
                    )
                  }
                >
                  Donate with Purchase
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Books;
