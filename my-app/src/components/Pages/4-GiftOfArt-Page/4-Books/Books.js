import React from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import "./Books.css";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import CopyRightIcon from "../../../../images/GiftOfArt-Images/copyright-vector.png";
import BooksImageOne from "../../../../images/GiftOfArt-Images/gemini-img.png";
import BooksImageTwo from "../../../../images/GiftOfArt-Images/books-image-two-small.png";
import BooksVector from "../../../../images/GiftOfArt-Images/books-vector.png";
import AudioBook from "./The_Gemini_Kiid_Audio.mp3";

const Books = () => {
  return (
    <section className="Books">
      <GiftOfArtNavigation currentPage="books" />
      <div className="main-container">
        {/* GEMINI SECTION */}
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

        {/* CHAD SECTION */}
        <div className="books-content books-chad-section">
          <div className="books-chad-top-row">
            <div className="books-image-box">
              <img src={BooksImageTwo} alt="Book two" className="books-image" />
            </div>
            <div className="books-header-box books-chad-title-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="books-header chad-title-text">
                CHAD, A Celebration of Life - Beyond a Mother’s Memories
              </h2>
            </div>
          </div>

          <div className="chad-excerpt-wrapper">
            <div className="chad-excerpt">
              <p className="excerpt-title excerpt-title-main">Excerpts from</p>
              <p className="excerpt-title">
                CHAD, A Celebration of Life Beyond A Mother’s Memories
              </p>
              <p className="italic-line spaced centered">
                Janna Becker, shared by her mother, Rhonda Foster
              </p>
              <p>
                <em>…That was it??? Here one moment… gone the next?</em> In an
                instant my world, the entire world, changed. How on earth could
                life go on without her? How do you live the rest of your life
                with one foot on earth and one foot in heaven? I couldn’t
                imagine... and I had NO idea what happened! No one did.
              </p>
              <p>
                But now I know… Soon after Janna passed, I found out that what
                she had was an electrical problem with her heart, called Long QT
                Syndrome. It could have been detected with a simple, inexpensive
                electrocardiogram (ECG) read by a cardiologist.
              </p>
              <p className="italic-line spaced centered">
                To Screen…Or not To Screen
              </p>
              <p>
                The single thread that seems to tie all these entities together
                is the profound concern not only for the health of the athlete
                but for his or her very Life. Countries, states, major sport and
                health organizations all over the world have made their
                decisions to prescreen their athletes, some such as Japan, even
                screen their school-age children. Buttressed now by decades of
                scientific research and bent on learning and creating best
                practices in the field, they too go forward to find and
                implement ways to safeguard hearts and save lives through
                preventive screenings.
              </p>
              <p>
                Statistics and science-based evidence are essential in
                evaluating this decision, but when we wrap a body, a mind, and a
                soul around each one of those numbers, it becomes something
                entirely different. It becomes a Human Being… And that begs the
                real question - What is the value of a Life? One Life. What will
                we do to keep it living?
              </p>
            </div>

            <div className="chad-quote">
              <p>
                “Player health is one of the most important issues to the NBA,
                and Cardiac screening is a critical part of our player health
                program. We’ve worked to create the best cardiac screening
                program in professional sports, and we've used that program to
                support research that will improve doctors' understanding of
                cardiac conditions in athletes. The NBA is proud to be working
                with NBA players, team physicians, and leading cardiology
                researchers to reduce sudden death in athletes and welcome
                efforts from others in the community on this important issue.
                Best of luck to everyone at The Chad Foundation.”
              </p>
              <p>Sincerely,</p>
              <p>
                Adam (Silver)
                <br />
                Commissioner, National Basketball Association
              </p>
            </div>

            <button
              className="buy-book-btn"
              onClick={() =>
                window.open(
                  "https://www.amazon.com/CHAD-Celebration-Beyond-Mothers-Memories/dp/1982250801",
                  "_blank"
                )
              }
            >
              Donate with Purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
