import React, { useState, useEffect } from "react";
import "./Plays.css";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import PlaysOne from "../../../../images/GiftOfArt-Images/plays-image-one.png";
import PlaysTwo from "../../../../images/GiftOfArt-Images/plays-image-two.png";
import PlaysThree from "../../../../images/GiftOfArt-Images/plays-image-three.png";
import PlaysFour from "../../../../images/GiftOfArt-Images/plays-image-four.png";

const Plays = () => {
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
    <section className="Plays">
      <GiftOfArtNavigation currentPage="plays" />
      <div className="main-container">
        {/* ONE */}
        <div className="plays-content">
          <div className="plays-content-left">
            <div className="plays-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="plays-header">All About Sneakers</h2>
            </div>
            <p className="plays-p">
              A cocktail waitress and a cowboy go beyond promiscuity and
              materialism to find the steps of love, but she finds she must
              first learn to love herself before she can love another.
            </p>

            <h4 className="plays-subtext">
              Featuring players: Belgrave Fitzgerald Henderson, Steven
              Consentino, Arista, Matt Derek, Michael Durell, and Philip
              Oberlander.
            </h4>
            <h4 className="plays-subtext">Directed by Tony Macy-Perez</h4>
            <div className="plays-quotes-div">
              <h3 className="plays-quotes">
                “I cried the whole play... You had such a long journey ..and you
                both made it to the end.”
              </h3>
            </div>
            <h4 className="plays-quotes-subtext">- Patron, Wings Theatre</h4>
            <div className="plays-quotes-div">
              <h3 className="plays-quotes">
                “A beautiful love story with many deep levels.”
              </h3>
            </div>
            <h4 className="plays-quotes-subtext">
              - D. Friedman, Castillo Theatre
            </h4>
          </div>
          <div className="plays-image-box">
            <img src={PlaysOne} alt="Plays" className="plays-image" />
          </div>
        </div>

        {/* TWO */}
        <div className="plays-content">
          {isSmallScreen ? (
            <>
              <div className="plays-content-right">
                <div className="plays-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="plays-header">Welcome Home Kelly!</h2>
                </div>
                <p className="plays-p">
                  After 20 years, a daughter returns home to NYC’s Chinatown a
                  successful attorney but is faced with the challenges of
                  re-finding father, family and the American dream in a home
                  which now seems foreign to her.
                </p>
                <h4 className="plays-subtext">Written by Arista</h4>
                <h4 className="plays-subtext">Directed by Victor Maog</h4>
                <div className="plays-quotes-div">
                  <h3 className="plays-quotes">
                    “As a teacher for 20 years, this was an important play—to
                    have the courage to leave home and see what else the world
                    has waiting for you.”
                  </h3>
                </div>
                <h4 className="plays-subtext">
                  - C. Ling, middle school teacher
                </h4>
                <div className="plays-quotes-div">
                  <h3 className="plays-quotes">
                    “Honest and sensitive portrayals, not a dry eye in the
                    house; a well-deserved standing ovation.”
                  </h3>
                </div>
                <h4 className="plays-subtext">
                  - J. Hall, Producer, Playwright, NYC
                </h4>
              </div>
              <div className="plays-image-box">
                <img src={PlaysTwo} alt="Plays" className="plays-image" />
              </div>
            </>
          ) : (
            <>
              <div className="plays-image-box">
                <img src={PlaysTwo} alt="Plays" className="plays-image" />
              </div>
              <div className="plays-content-right">
                <div className="plays-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="plays-header">Welcome Home Kelly!</h2>
                </div>
                <p className="plays-p">
                  After 20 years, a daughter returns home to NYC’s Chinatown a
                  successful attorney but is faced with the challenges of
                  re-finding father, family and the American dream in a home
                  which now seems foreign to her.
                </p>
                <h4 className="plays-subtext">Written by Arista</h4>
                <h4 className="plays-subtext">Directed by Victor Maog</h4>
                <div className="plays-quotes-div">
                  <h3 className="plays-quotes">
                    “As a teacher for 20 years, this was an important play—to
                    have the courage to leave home and see what else the world
                    has waiting for you.”
                  </h3>
                </div>
                <h4 className="plays-subtext">
                  - C. Ling, middle school teacher
                </h4>
                <div className="plays-quotes-div">
                  <h3 className="plays-quotes">
                    “Honest and sensitive portrayals, not a dry eye in the
                    house; a well-deserved standing ovation.”
                  </h3>
                </div>
                <h4 className="plays-subtext">
                  - J. Hall, Producer, Playwright, NYC
                </h4>
              </div>
            </>
          )}
        </div>

        {/* THREE */}
        <div className="plays-content">
          <div className="plays-content-left">
            <div className="plays-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="plays-header">Days of Wine and Roses</h2>
            </div>
            <p className="plays-p">
              A loving husband and wife deal with denial, alcoholism, and the
              journey to find one’s way in this maelstrom of powerful addictive
              forces that can challenge love to its core.
            </p>
            <h4 className="plays-subtext">
              Featuring players: Arista Erik, Colin Smith, Jon Furey, Joan
              Farda, Jackson Ming, Patrick Kleeman and Shannyn Kleeman.
            </h4>
            <h4 className="plays-subtext">Directed by Tony Macy-Perez</h4>
            <div className="plays-quotes-div">
              <h3 className="plays-quotes">
                “The Performances were stunning, powerful stuff.”
              </h3>
            </div>
            <h4 className="plays-quotes-subtext">
              - M.Stone, TV Correspondent, Sino Vision
            </h4>
            <div className="plays-quotes-div">
              <h3 className="plays-quotes">
                “This production helped immensely in heightening awareness of
                the impact substance abuse has on the family. This memorable
                performance resonated with both adult and adolescent viewers.”
              </h3>
            </div>
            <h4 className="plays-quotes-subtext">
              - B. Sherman, Atlantic City Commission on Missing and Abused
              Children
            </h4>
          </div>
          <div className="plays-image-box">
            <img src={PlaysThree} alt="Plays" className="plays-image" />
          </div>
        </div>

        {/* FOUR */}
        <div className="plays-content">
          {isSmallScreen ? (
            <>
              <div className="plays-content-right">
                <div className="plays-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="plays-header">
                    “Life is a Gift”: Chad Safe Driver Campaign
                  </h2>
                </div>
                <p className="plays-p">
                  Chad was a great guy who loved all people cared about their
                  dreams. He never drank an alcohol beverage, smoked a cigarette
                  or did drugs his entire life. He was always the designated
                  driver when he and his friends went to clubs dancing, and you
                  always had to wear a seatbelt when you rode in Chad's car. -
                  “Healthy body/mind/spirit.” Please safeguard your life and
                  others by joining the{" "}
                  <strong>“Chad Safe Driver Campaign - Life is A Gift.”</strong>
                </p>
              </div>
              <div className="plays-image-box">
                <img src={PlaysFour} alt="Plays" className="plays-image" />
              </div>
            </>
          ) : (
            <>
              <div className="plays-image-box">
                <img src={PlaysFour} alt="Plays" className="plays-image" />
              </div>
              <div className="plays-content-right">
                <div className="plays-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="plays-header">
                    “Life is a Gift”: Chad Safe Driver Campaign
                  </h2>
                </div>
                <p className="plays-p">
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
      </div>
    </section>
  );
};

export default Plays;
