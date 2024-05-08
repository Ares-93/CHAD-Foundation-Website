import React, { useState } from "react";
import "./HL.css";
import AndrewPhoto from "../../../../../images/PeopleWeLove-Images/Andrew.png";

const HonoringLives = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreToggle = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className="HonoringLives">
      <div className="main-container">
        <h2 className="honoringLives-header">Honoring Young Lives</h2>
        <div className="honoringLives-content">
          <div className="honoringLives-photo">
            <img src={AndrewPhoto} alt="Andrew" className="andrew-photo" />
          </div>
          <div className="honoringLives-text">
            <p>
              May 25, 2015, marks the tenth anniversary of me walking into my
              brother’s room to wake him and instead finding him kneeled down
              next to his bed, dead. I will go to great lengths to repress the
              memories of the EMTs stopping at the wrong house, forgetting to
              bring in their AED, and ultimately invading our home and barring
              my mother and me from the room for hours. Andrew had a scholarship
              to his choice college and would get to continue playing lacrosse.
              And then Sudden Cardiac Arrest came in the night, claimed him and
              the first and last sign was death.
            </p>
            <p>
              Andrew was the picture of health and the pride of our family; and
              he was my best friend. He was my side-kick for 18 years; we did it
              all together from running around the house as the Teenage Mutant
              Ninja Turtles to shopping for Mothers' Day. He was exactly three
              years and two days younger than me and 9.5 inches taller.
            </p>
            {showFullText && (
              <>
                <p>
                  He maximized on our Norwegian genetics with the look of a real
                  Viking. The number of people who came forward as being touched
                  for life by Andrew during his short 18 years in this world is
                  proof that he was angelic in nature.
                </p>
                <p>
                  Richard Andrew Helgeson Memorial Foundation, a 501(c)(3)
                  Public Charity, to raise awareness of Sudden Cardiac Arrest in
                  children and young adults. P O Box 4024, Silver Spring, MD
                  20914. Contact: 301-236-0448;
                  <a
                    href="http://www.andrewhelgeson.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    http://www.andrewhelgeson.org
                  </a>{" "}
                  and{" "}
                  <a
                    href="http://silverchips.mbhs.edu/story/5424"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://silverchips.mbhs.edu/story/5424
                  </a>
                  .
                </p>
                <p>
                  Jennifer’s full story on her brother, Andrew, can be found in
                  ‘Sisters/Brothers,’ in the book, “CHAD, A Celebration of Life
                  – Beyond A Mother’s Memories.”
                </p>
              </>
            )}
            <button className="readMore-btn" onClick={handleReadMoreToggle}>
              {showFullText ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonoringLives;
