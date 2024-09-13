import React, { useState, useEffect } from "react";
import "./Films.css";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import FilmsTwo from "../../../../images/GiftOfArt-Images/films-image-two.png";
import FilmsThree from "../../../../images/GiftOfArt-Images/films-image-three.png";
import FilmsFour from "../../../../images/GiftOfArt-Images/films-image-four.png";

const Films = () => {
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
    <section className="Films">
      <GiftOfArtNavigation currentPage="films" />
      <div className="main-container">
        {/* ONE - The CHAD FOUNDATION */}
        <div className="films-content">
          <div className="films-content-left">
            <div className="films-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="films-header">
                The CHAD FOUNDATION – GIFT OF HEART AND ART DOCUMENTARY
              </h2>
            </div>
            <p className="films-p">
              The short-docu highlights the 27-year history of the "The Chad
              Foundation Heart Screening Program," which provided 10,000
              echocardiograms and EKGs to athletes and students in 5 states and
              abroad in Austria and Sweden to prevent Sudden Death in Young
              Athletes and detect unknown heart abnormalities, and the Gift of
              Art which produce/performed plays which deal with hope, love, and
              the challenges we face today.
            </p>
          </div>
          <div className="films-image-box">
            <iframe
              className="films-video"
              width="498"
              height="280"
              src="https://www.youtube.com/embed/ldwHd9MyKQc?si=y0ODJxjZ3qPQOBH9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* TWO - THE FOUNDING FATHERS */}
        <div className="films-content">
          {isSmallScreen ? (
            <>
              <div className="films-content-right">
                <div className="films-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="films-header">
                    WHAT WOULD THE FOUNDING FATHERS TELL US TODAY?
                  </h2>
                </div>
                <div>
                  <h3 className="films-second-subtext">
                    Political Dialogs 1789 - 2040
                  </h3>
                  <h3 className="films-second-subtext">
                    Screenplay and stage play by Werner Neff & Arista
                  </h3>
                </div>
                <p className="films-p">
                  In 1789, in candlelit rooms, we are privy to the conversations
                  of the Founding Fathers, laced with humor and humanism, as
                  they form the foundation for a young country to stand upon. In
                  2021, the Founders travel to Washington DC and watch on a
                  widescreen TV as rebel Americans storm the Capitol seeing the
                  constructs they formed under great challenge. In 2040, they
                  visit The White House, and meet with the current president,
                  seeing the progression of democracy in equitable voting laws,
                  working immigrant solutions and the addition of a 3rd party.
                </p>
              </div>
              <div className="films-image-box">
                <img src={FilmsTwo} alt="Films" className="films-image" />
              </div>
            </>
          ) : (
            <>
              <div className="films-image-box">
                <img src={FilmsTwo} alt="Films" className="films-image" />
              </div>
              <div className="films-content-right">
                <div className="films-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="films-header">
                    WHAT WOULD THE FOUNDING FATHERS TELL US TODAY?
                  </h2>
                </div>
                <div>
                  <h3 className="films-second-subtext">
                    Political Dialogs 1789 - 2040
                  </h3>
                  <h3 className="films-second-subtext">
                    Screenplay and stage play by Werner Neff & Arista
                  </h3>
                </div>
                <p className="films-p">
                  In 1789, in candlelit rooms, we are privy to the conversations
                  of the Founding Fathers, laced with humor and humanism, as
                  they form the foundation for a young country to stand upon. In
                  2021, the Founders travel to Washington DC and watch on a
                  widescreen TV as rebel Americans storm the Capitol seeing the
                  constructs they formed under great challenge. In 2040, they
                  visit The White House, and meet with the current president,
                  seeing the progression of democracy in equitable voting laws,
                  working immigrant solutions and the addition of a 3rd party.
                </p>
              </div>
            </>
          )}
        </div>

        {/* THREE - Earthen */}
        <div className="films-content">
          <div className="films-content-left">
            <div className="films-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="films-header">Earthen</h2>
            </div>
            <p className="films-p">
              The indie screenplay is a romantic dramedy and a contemporary love
              story with a beautiful Cherokee thread woven within, based on the
              stageplay, All About Sneakers, performed Off-Broadway. It is an
              old-fashioned love story about a southern, down-to-earth cowboy
              who brings a New York cocktail waitress away from the glitz and
              materialism of their society and back to the earth and their true
              selves through the discovery of their partial Cherokee heritage.
            </p>
          </div>
          <div className="films-image-box">
            <img src={FilmsThree} alt="Films" className="films-image" />
          </div>
        </div>

        {/* FOUR - USA */}
        <div className="films-content">
          {isSmallScreen ? (
            <>
              <div className="films-content-right">
                <div className="films-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="films-header">
                    USA{" "}
                    <i>
                      <small>(Ew-ess-Ah)</small>
                    </i>
                  </h2>
                </div>
                <p className="films-p">
                  The story is based on the real-life event, the “1st Homeless
                  Streetsoccer World Cup,” which took place in Graz, Austria
                  with 16 countries of athletes participating. They donned their
                  countries’ uniforms and regained their humanity and
                  self-esteem through the universal leveler of sports. In NYC
                  alone, there are 138,000 homeless individuals. In this event,
                  the disenfranchised stood tall and were cheered on by the
                  world for their courage, dignity, and spirit.
                </p>
              </div>
              <div className="films-image-box">
                <img src={FilmsFour} alt="Films" className="films-image" />
              </div>
            </>
          ) : (
            <>
              <div className="films-image-box">
                <img src={FilmsFour} alt="Films" className="films-image" />
              </div>
              <div className="films-content-right">
                <div className="films-header-box">
                  <img src={HeartIcon} alt="heart" width={60} height={60} />
                  <h2 className="films-header">
                    USA{" "}
                    <i>
                      <small>(Ew-ess-Ah)</small>
                    </i>
                  </h2>
                </div>
                <p className="films-p">
                  The story is based on the real-life event, the “1st Homeless
                  Streetsoccer World Cup,” which took place in Graz, Austria
                  with 16 countries of athletes participating. They donned their
                  countries’ uniforms and regained their humanity and
                  self-esteem through the universal leveler of sports. In NYC
                  alone, there are 138,000 homeless individuals. In this event,
                  the disenfranchised stood tall and were cheered on by the
                  world for their courage, dignity, and spirit.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Films;
