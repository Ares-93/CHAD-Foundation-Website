import React, { useState, useEffect } from "react";
import "./UpcomingEvents.css";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import EventsOne from "../../../../images/GiftOfArt-Images/events-image-one.jpg";
import EventsTwo from "../../../../images/GiftOfArt-Images/events-image-two.png";
import EventsThree from "../../../../images/GiftOfArt-Images/events-image-three.png";
import DriverCampaign from "../../../../images/GiftOfArt-Images/safe-driver-campaign.png";

const UpcomingEvents = () => {
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
    <section className="UpcomingEvents">
      <GiftOfArtNavigation currentPage="upcoming-events" />
      <div className="main-container">
        {/* ONE */}
        <div className="upcomingEvents-content">
          {isSmallScreen ? (
            <>
              <div className="upcomingEvents-content-right">
                <div className="upcomingEvents-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="upcomingEvents-header">
                    “Life is a Gift”: Chad Safe Driver Campaign
                  </h2>
                </div>
                <p className="upcomingEvents-p">
                  Chad was a great guy who loved all people cared about their
                  dreams. He never drank an alcohol beverage, smoked a cigarette
                  or did drugs his entire life. He always did the driving when
                  he and his friends went out to the clubs dancing and you
                  always had to wear a seatbelt when you drove with Chad in his
                  car. - “Healthy body/mind/spirit.” Please safeguard your life
                  and others by joining the{" "}
                  <strong>“Chad Safe Driver Campaign - Life is A Gift.”</strong>
                </p>
              </div>
              <div className="upcomingEvents-image-box">
                <img
                  src={DriverCampaign}
                  alt="Events"
                  className="upcomingEvents-image"
                />
              </div>
            </>
          ) : (
            <>
              <div className="upcomingEvents-image-box">
                <img
                  src={DriverCampaign}
                  alt="Events"
                  className="upcomingEvents-image"
                />
              </div>
              <div className="upcomingEvents-content-right">
                <div className="upcomingEvents-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="upcomingEvents-header">
                    “Life is a Gift”: Chad Safe Driver Campaign
                  </h2>
                </div>
                <p className="upcomingEvents-p">
                  Chad was a great guy who loved all people cared about their
                  dreams. He never drank an alcohol beverage, smoked a cigarette
                  or did drugs his entire life. He always did the driving when
                  he and his friends went out to the clubs dancing and you
                  always had to wear a seatbelt when you drove with Chad in his
                  car. - “Healthy body/mind/spirit.” Please safeguard your life
                  and others by joining the{" "}
                  <strong>“Chad Safe Driver Campaign - Life is A Gift.”</strong>
                </p>
              </div>
            </>
          )}
        </div>

        {/* TWO */}
        <div className="upcomingEvents-content">
          <div className="upcomingEvents-content-left">
            <div className="upcomingEvents-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="upcomingEvents-header">Chad Dance</h2>
            </div>
            {/* <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Date: TBD</h4>
            </div>
            <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Location: TBD</h4>
            </div> */}
            <p className="upcomingEvents-p upcomingEvents-p-2">
              “The CHAD Dance Benefit for the Gifts of Heart and Art” took place
              at McGettigan’s Irish Pub in midtown Manhattan, NYC.” Chad loved
              to dance, and we all celebrated his joyous spirit and honored the
              Doctors, Staff, and Volunteers who made 10,000 preventive heart
              screenings possible safeguarding thousands of hearts of all ages.
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
        {/* THREE */}
        <div className="upcomingEvents-content">
          {isSmallScreen ? (
            <>
              <div className="upcomingEvents-content-right">
                <div className="upcomingEvents-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="upcomingEvents-header">
                    Chad Classic Concert
                  </h2>
                </div>
                {/* <div className="upcomingEvents-subtext-2-box">
                  <h4 className="upcomingEvents-subtext-2">Date: TBD</h4>
                </div> */}
                <div className="upcomingEvents-subtext-2-box">
                  <h4 className="upcomingEvents-subtext-2">
                    Location: The National Opera Center Recital Hall in NYC
                  </h4>
                </div>
                <p className="upcomingEvents-p">
                  Mezzo-soprano, Caterina Secchi, classical pianist, Javor
                  Bracic and solo harpist, Eric Sabatino collaborated in an
                  exciting program of Opera and Classical favorites, generously
                  gifting their talents to support Chad’s work!
                </p>
                <h4 className="upcomingEvents-subtext">
                  Caterina Secchi (Mezzo-Soprano), Javor Bracic (Classical
                  Pianist) and Eric Sabatino (Harpist)
                </h4>
              </div>
              <div className="upcomingEvents-image-box">
                <img
                  src={EventsTwo}
                  alt="Events"
                  className="upcomingEvents-image"
                />
              </div>
            </>
          ) : (
            <>
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
                  <h2 className="upcomingEvents-header">
                    Chad Classic Concert
                  </h2>
                </div>
                {/* <div className="upcomingEvents-subtext-2-box">
                  <h4 className="upcomingEvents-subtext-2">Date: TBD</h4>
                </div> */}
                <div className="upcomingEvents-subtext-2-box">
                  <h4 className="upcomingEvents-subtext-2">
                    Location: The National Opera Center Recital Hall in NYC
                  </h4>
                </div>
                <p className="upcomingEvents-p">
                  Mezzo-soprano, Caterina Secchi, classical pianist, Javor
                  Bracic and solo harpist, Eric Sabatino collaborated in an
                  exciting program of Opera and Classical favorites, generously
                  gifting their talents to support Chad’s work!
                </p>
                <h4 className="upcomingEvents-subtext">
                  Caterina Secchi (Mezzo-Soprano), Javor Bracic (Classical
                  Pianist) and Eric Sabatino (Harpist)
                </h4>
              </div>
            </>
          )}
        </div>
        {/* FOUR */}
        <div className="upcomingEvents-content">
          <div className="upcomingEvents-content-left">
            <div className="upcomingEvents-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="upcomingEvents-header">“Who I Am”</h2>
            </div>
            {/* <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Date: TBD</h4>
            </div>
            <div className="upcomingEvents-subtext-2-box">
              <h4 className="upcomingEvents-subtext-2">Location: TBD</h4>
            </div> */}
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

export default UpcomingEvents;
