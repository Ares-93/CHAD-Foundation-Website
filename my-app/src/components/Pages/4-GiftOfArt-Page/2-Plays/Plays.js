import React from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import "./Plays.css";
import HeartIcon from "../../../../images/GiftOfArt-Images/gift-of-art-heart-icon.png";
import PlaysOne from "../../../../images/GiftOfArt-Images/plays-image-one.png";
import PlaysTwo from "../../../../images/GiftOfArt-Images/plays-image-two.png";
import PlaysThree from "../../../../images/GiftOfArt-Images/plays-image-three.png";
import PlaysFour from "../../../../images/GiftOfArt-Images/plays-image-four.png";

const Plays = () => {
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
              All About Sneakers is an original play and old-fashioned Love
              story - the discovery that loving oneself first precedes loving
              another. CHAD promotes multi-cultural art which includes stories
              about All of Us – the hopes the dreams, the angst, and the
              challenges of All Americans.
            </p>
            <h4 className="plays-subtext">
              Featuring players: Belgrave Fitzgerald Henderson, Steven
              Consentino, Arista, Matt Derek, Michael Durell, and Philip
              Oberlander.
            </h4>
            <h4 className="plays-subtext">Directed by Tony Macy-Perez</h4>
          </div>
          <div className="plays-image-box">
            <img src={PlaysOne} alt="Plays" className="plays-image" />
          </div>
        </div>
        {/* TWO */}
        <div className="plays-content">
          <div className="plays-image-box">
            <img src={PlaysTwo} alt="Plays" className="plays-image" />
          </div>
          <div className="plays-content-right">
            <div className="plays-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="plays-header">Welcome Home Kelly!</h2>
            </div>
            <p className="plays-p">
              WELCOME HOME KELLY! is a story about an Asian American daughter’s
              quest for father, family and the American dream. The story deals
              with attorney Kelly Liu’s return home to New York City’s Chinatown
              after a 20 year absence, and the challenges of re-finding father,
              family and the American dream in a home which now seems foreign to
              her.
            </p>
            <h4 className="plays-subtext">Written by Arista</h4>
            <h4 className="plays-subtext">Directed by Victor Maog</h4>
          </div>
        </div>
        {/* THREE */}
        <div className="plays-content">
          <div className="plays-content-left">
            <div className="plays-header-box">
              <img src={HeartIcon} alt="heart" width={60} height={60} />
              <h2 className="plays-header">Days of Wine and Roses</h2>
            </div>
            <p className="plays-p">
              Days of Wine and Roses. In JP Miller’s award-winning play, “Days of
              Wine and Roses,” the lead characters, Joe and Kirsten Clay, deal
              with the challenges of the real world today- denial, alcoholism
              and the journey to find one’s way in this maelstrom of powerful
              addictive forces that can challenge love to its core. It helped
              immensely in heightening awareness of the impact substance abuse
              has on the family. This memorable performance resonated with both
              adult and adolescent viewers.
            </p>
            <h4 className="plays-subtext">
              Featuring players: Arista Erik, Colin Smith, Jon Furey, Joan
              Farda, Jackson Ming, Patrick Kleeman and Shannyn Kleeman.
            </h4>
            <h4 className="plays-subtext">Directed by Tony Macy-Perez</h4>
          </div>
          <div className="plays-image-box">
            <img src={PlaysThree} alt="Plays" className="plays-image" />
          </div>
        </div>
        {/* FOUR */}
        <div className="plays-content">
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
              dreams. He never drank an alcohol beverage, smoked a cigarette or
              did drugs his entire life. He always did the driving when he and
              his friends went out to the clubs dancing and you always had to
              wear a seatbelt when you drove with Chad in his car. - “Healthy
              body/mind/spirit.” Please safeguard your life and others by
              joining the{" "}
              <strong>“Chad Safe Driver Campaign - Life is A Gift.”</strong>
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Plays;
