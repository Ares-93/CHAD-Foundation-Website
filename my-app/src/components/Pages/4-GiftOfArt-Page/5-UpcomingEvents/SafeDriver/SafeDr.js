import React from "react";
import { useNavigate } from "react-router-dom";
import "./SafeDr.css";
import GiftOfArtNavigation from "../../GiftOfArtNavigation";
import CampaignOne from "../../../../../images/GiftOfArt-Images/campaign-one.png";
import RollOfDrivers from "./RollOfDrivers";

const SafeDr = () => {
  const navigate = useNavigate();

  return (
    <div className="SafeDr-super">
      <section className="SafeDr">
        <GiftOfArtNavigation currentPage="upcoming-events" />
        <div className="main-container">
          <h2 className="safedr-header">The “Chad Safe Driver Campaign”</h2>
          <div className="safedr-content">
            <div className="safedr-text">
              <p>
                Chad was a great guy who loved all people and cared about their
                dreams. He never drank, smoked, or did drugs. He was always the
                ‘designated driver’ when he and his friends went out to clubs
                dancing, and you always had to wear a seatbelt in Chad’s car.
                Please safeguard your life and others by joining the “Chad Safe
                Driver Campaign – Life is A Gift.” CHAD is inviting high schools
                and colleges to show their support for safe driving. Our goal is
                to have the <strong>“Chad Honour Roll of Safe Drivers”</strong>{" "}
                from all 50 states and countries throughout the world. <br />{" "}
                <br />
                Order your  <strong>
                  “Life is A Gift” Keychain Pendant,”
                </strong>{" "}
                a heavyweight, curved shield pendant with a pewter-like
                finish. Join the {" "}
                <strong> “Chad Honour Roll of Safe Drivers” </strong>  by taking
                the{" "}
                <strong>
                  “Life is a Gift pledge: Save Lives, I will not text/drink and
                  drive.”{" "}
                </strong>{" "}
                Take a picture to post on The Chad Foundation website and social
                media. Carry the pendant in your car, on a keychain or use as a
                piece of jewelry, give a gift to remind those you care about
                that <strong>“Life is a Gift.”</strong>
              </p>
            </div>
            <div className="safedr-image">
              <img
                src={CampaignOne}
                alt="Campaign"
                className="safedr-campaign-image"
              />
            </div>
          </div>
          <button
            onClick={() => navigate("/donate-main")}
            className="safedr-button-orange safedr-campaign-button"
          >
            Order your CHAD “Life is a Gift” Pendant
          </button>
        </div>
      </section>
      <RollOfDrivers />
    </div>
  );
};

export default SafeDr;
