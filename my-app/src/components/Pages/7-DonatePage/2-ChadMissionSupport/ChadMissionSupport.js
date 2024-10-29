import React from "react";
import "./ChadMissionSupport.css";
import MissionImageOne from "../../../../images/Donate-Images/missionSupport-image-one.png";
import MissionImageTwo from "../../../../images/Donate-Images/missionSupport-image-two.png";

const ChadMissionSupport = () => {
  const handleFirstButtonClick = () => {
    window.open(
      "https://www.amazon.com/Celebration-Life-Beyond-Mothers-Memories/dp/198225078X",
      "_blank"
    );
  };

  const handleSecondButtonClick = () => {
    window.open("https://www.google.com", "_blank");
  };

  return (
    <section className="ChadMissionSupport">
      <div className="main-container">
        <h2 className="chadMissionSupport-header">
          Help Support the Chad Mission
        </h2>

        {/* Book */}
        <div className="chadMissionSupport-box">
          <div className="chadMissionSupport-box-left-side">
            <img
              src={MissionImageOne}
              alt="book"
              className="chadMissionSupport-image"
            />
          </div>

          <div className="chadMissionSupport-box-right-side">
            <h3 className="chadMissionSupport-h3">
              CHAD: A Celebration of Life Beyond a Mother’s Memories
            </h3>
            <p className="chadMissionSupport-p">
              Celebrating the lives of young athletes lost to Sudden Cardiac
              Death, and the journey of its survivors, this uplifting memoir
              details the 25-year history of The Chad Foundation to safeguard
              hearts through 8,000 screenings. By promoting a steady increase in
              SCD awareness, parents, doctors, and athletic organizations have
              teamed together to reduce SCD globally. They have saved countless
              lives. Endorsed by Adam Silver, Commissioner of the National
              Basketball Association, CHAD celebrates life’s spectrum. From SCD
              victims to survivors — from heartbreak to heroism — learn about
              how The Chad Foundation has saved lives and shaped a better
              tomorrow.
            </p>
            <button
              className="chadMissionSupport-btn"
              onClick={handleFirstButtonClick}
            >
              Donate with Purchase
            </button>
          </div>
        </div>

        {/* KeyChain */}
        <div className="chadMissionSupport-box">
          <div className="chadMissionSupport-box-left-side">
            <img
              src={MissionImageTwo}
              alt="book"
              className="chadMissionSupport-image"
            />
          </div>

          <div className="chadMissionSupport-box-right-side">
            <h3 className="chadMissionSupport-h3">
              “Life is a Gift” Keychain Shield - Chad Safe Driver Campaign
            </h3>
            <p className="chadMissionSupport-p">
              Laoreet nisl ut tempus vel hendrerit eu vitae. Vulputate malesuada
              viverra ipsum pharetra. Massa diam quis amet pharetra egestas
              libero tempus arcu feugiat. Integer nunc fermentum arcu egestas
              arcu. Tortor et tortor viverra adipiscing urna egestas netus
              aliquam. Laoreet nisl ut tempus vel hendrerit eu vitae. Vulputate
              malesuada viverra ipsum pharetra. Massa diam quis amet pharetra
              egestas libero tempus arcu feugiat. Integer nunc fermentum arcu
              egestas arcu. Tortor et tortor viverra adipiscing urna egestas
              netus aliquam.
            </p>
            <button
              className="chadMissionSupport-btn"
              onClick={handleSecondButtonClick}
            >
              Donate with Purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChadMissionSupport;
