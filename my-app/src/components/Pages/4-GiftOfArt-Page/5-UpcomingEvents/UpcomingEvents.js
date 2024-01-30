import React from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import "./UpcomingEvents.css";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import EventsOne from "../../../../images/GiftOfArt-Images/events-image-one.png";
import EventsTwo from "../../../../images/GiftOfArt-Images/events-image-two.png";
import EventsThree from "../../../../images/GiftOfArt-Images/events-image-three.png";

const Plays = () => {
  return (
    <section className="UpcomingEvents">
      <GiftOfArtNavigation currentPage="upcomingEvents" />
      <div className="main-container">
        {/* ONE */}
        <div className="upcomingEvents-content">
          <div className="upcomingEvents-content-left">
            <div className="upcomingEvents-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="upcomingEvents-header">Chad Dance</h2>
            </div>
            <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Date: TBD</h4>
            </div>
            <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Location: TBD</h4>
            </div>
            <p className="upcomingEvents-p upcomingEvents-p-2">
              <strong>
                “Come Dance with Chad for The Gift of Heart and Art!” <br />
                “Honoring our Doctors, Volunteers, and Artists”
              </strong>
            </p>
          </div>
          <div className="upcomingEvents-image-box">
            <img
              src={EventsOne}
              alt="Events"
              className="upcomingEvents-image"
            />
          </div>
        </div>
        {/* TWO */}
        <div className="upcomingEvents-content">
          <div className="upcomingEvents-image-box">
            <img
              src={EventsTwo}
              alt="Events"
              className="upcomingEvents-image"
            />
          </div>
          <div className="upcomingEvents-content-right">
            <div className="upcomingEvents-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="upcomingEvents-header">Chad Classic Concert</h2>
            </div>
            <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Date: TBD</h4>
            </div>
            <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">
                Location: The National Opera Center Recital Hall in NYC
              </h4>
            </div>
            <p className="upcomingEvents-p">
              You are cordially invited to attend an evening of Opera &
              Classical Music featuring. Arista’ reception with wine and cheese
              to follow. <br />
              Suggested donation $25 or just come and enjoy the beautiful music
              of 3 wonderful Artists who are giving their Gifts to support
              Chad's work! Hope to see you!
            </p>
            <h4 className="upcomingEvents-subtext">
              Caterina Secchi (Mezzo-Soprano), Javor Bracic (Classical Pianist)
              and Eric Sabatino (Harpist)
            </h4>
          </div>
        </div>
        {/* THREE */}
        <div className="upcomingEvents-content">
          <div className="upcomingEvents-content-left">
            <div className="upcomingEvents-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="upcomingEvents-header">“Who I Am”</h2>
            </div>
            <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Date: TBD</h4>
            </div>
            <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Location: TBD</h4>
            </div>
            <p className="upcomingEvents-p">
              “Who I Am” by Christopher Palmer – a musical play about the
              realities high school students face in today’s world, such as
              losing your best friend to a terminal illness, sexual harassment,
              and the challenge of dealing with mental illness at a fragile age.
            </p>
          </div>
          <div className="upcomingEvents-image-box">
            <img
              src={EventsThree}
              alt="Events"
              className="upcomingEvents-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Plays;
