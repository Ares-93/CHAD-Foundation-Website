import React from "react";
import { useNavigate } from "react-router-dom";

import "./RollOfDrivers.css";
import ImgOne from "../../../../../images/GiftOfArt-Images/roll-one.png";
import ImgTwo from "../../../../../images/GiftOfArt-Images/campaign-two.png";
import ImgThree from "../../../../../images/GiftOfArt-Images/roll-two.png";
import ImgPaper from "../../../../../images/GiftOfArt-Images/roll-paper-safedr.png";

const RollOfDrivers = () => {
  const handleRollBtnClick = () => {
    window.open("https://youtu.be/ldwHd9MyKQc?si=q5Bw-AHAN0F19pLL&t=755");
  };
  const navigate = useNavigate();

  return (
    <section className="RollOfDrivers">
      <div className="main-container">
        {/* <h1 className="roll-header">Chad Honour Roll of Safe Drivers</h1> */}
        <div className="roll-box">
          <h2 className="roll-h2">Why not to “Text, Drink and Drive”</h2>
          <div className="roll-facts-content">
            <ul>
              <li>
                <span className="roll-highlight">23%</span> of all car accidents
                each year involve cell phone use – that’s{" "}
                <span className="roll-highlight">1.3 million</span> crashes.
              </li>
              <li>
                Drivers distracted by talking or texting on cellphones killed an
                estimated <span className="roll-highlight">16,000</span> people
                between the years of{" "}
                <span className="roll-highlight">2001 and 2007</span>.
              </li>
              <li>
                Texting while driving kills{" "}
                <span className="roll-highlight">11</span> teens each day.
              </li>
              <li>
                Teens are <span className="roll-highlight">4x</span> more likely
                than adults to get into car crashes when talking or texting on a
                cell phone while driving.
              </li>
              <li>
                <span className="roll-highlight">5 Seconds!</span> The minimum
                time your eyes are taken away from the road while texting; at{" "}
                <span className="roll-highlight">55 mph</span>, that’s the
                length of a football field.
              </li>
              <li>
                Teen drivers aged <span className="roll-highlight">15-17</span>{" "}
                are <span className="roll-highlight">8 times</span> more likely
                to be in a fatal crash if they have two or more teen passengers
                (aged <span className="roll-highlight">13-17</span>) in the car.
              </li>
              <li>
                <span className="roll-highlight">30</span> people die every day
                from drunk driving, that’s one death every{" "}
                <span className="roll-highlight">48 minutes</span>.
              </li>
              <li>
                <span className="roll-highlight">82%</span> of accident
                fatalities are caused by drunk drivers.
              </li>
              <li>
                <span className="roll-highlight">34%</span> of drunk fatalities
                are <span className="roll-highlight">21-24</span> yrs. old;{" "}
                <span className="roll-highlight">18%</span> of drunk fatalities
                are <span className="roll-highlight">16-20</span> yrs. old.
              </li>
              <li>
                <span className="roll-highlight">70%</span> of all teenagers
                drink alcohol.
              </li>
              <li>
                <span className="roll-highlight">60%</span> of all teen deaths
                in car accidents are alcohol-related.
              </li>
              <li>
                <span className="roll-highlight">18%</span> of alcohol
                fatalities include other drugs, e.g., cocaine, marijuana.
              </li>
              <li>
                Perhaps, the greatest influence on teenagers and their drinking
                and driving habits is{" "}
                <span className="roll-highlight">Peer Pressure</span>.
              </li>
              <li>
                In <span className="roll-highlight">2009</span>,{" "}
                <span className="roll-highlight">56%</span> of teens and young
                adults ages <span className="roll-highlight">16 to 20</span>
                that died in crashes were not wearing their seat belt.
              </li>
              <li>
                A study in <span className="roll-highlight">2013</span> shows
                teens who view their parents as involved (set rules and wear
                seatbelts) are <span className="roll-highlight">twice</span> as
                likely to wear a seat belt as a driver or passenger as teens who
                say their parents are uninvolved.
              </li>
              <li>
                At least <span className="roll-highlight">98</span> of the{" "}
                <span className="roll-highlight">176</span>{" "}
                <span className="roll-highlight">16- to 19-year-olds</span>
                killed on state roads in{" "}
                <span className="roll-highlight">2004-6</span> were not belted.
              </li>
              <li>
                Oct. 7, <span className="roll-highlight">2013</span>, the only
                teen not wearing a seatbelt died after a pick-up truck carrying{" "}
                <span className="roll-highlight">4</span> teens crashed in
                Butler County.
              </li>
            </ul>
          </div>
          <button className="roll-button" onClick={handleRollBtnClick}>
            TAKE A LISTEN
          </button>
          <div className="roll-images">
            <img src={ImgOne} alt="Roll One" className="img-one" />
            <img src={ImgTwo} alt="Campaign Two" className="img-two" />
            <img src={ImgThree} alt="Roll Two" className="img-three" />
          </div>
        </div>

        <div className="roll-paper-box">
          <img src={ImgPaper} alt="roll" className="roll-paper" />
          <div className="locations">
            <div className="location-box">
              <h2>USA</h2>

              <h3>California</h3>
              <p>Sharen and Carl Butrum, Sacramento, CA</p>
              <p>Curt Butrum, Studio City, CA</p>
              <p>N. Castillo, Lakeworth, CA</p>
              <p>Jake and Nicole Downey, CA</p>
              <p>Maria Ellis, Studio City, CA</p>
              <p>M. Garrett, Pacific Palisades, CA</p>
              <p>C. K., Los Angeles, CA</p>
              <p>K. K., Van Nuys, CA</p>
              <p>Alan Lewis, MD, Los Angeles, CA</p>
              <p>Dennis McInnis, La Habra, CA</p>
              <p>Shellie McMeekin-Pierson, Woodland Hills, CA</p>

              <h3>Colorado</h3>
              <p>L. Kaplan, Denver, CO</p>

              <h3>Connecticut</h3>
              <p>J. Carder, Stamford, CT</p>

              <h3>Florida</h3>
              <p>Curt Butrum, Fort Lauderdale, FL</p>
              <p>Olena Butrum, Fort Lauderdale, FL</p>

              <h3>Washington, D. C.</h3>
              <p>A. Polla, Washington, D.C.</p>

              <h3>Hawaii</h3>
              <p>Nate Luzod, Honolulu, Hawaii</p>
              <p>Mae Luzod, Honolulu, Hawaii</p>

              <h3>Massachusetts</h3>
              <p>Nick Farnsworth, Wilmington, MA</p>
              <p>Cindy and Doug Gray, Holyoke, MA</p>
              <p>Mackenzie Gray, Holyoke, MA</p>
              <p>Susan and Jim Hale, Northampton, MA</p>

              <h3>Michigan</h3>
              <p>Jessica DeVol, MI</p>
              <p>Liza Luzod-Chubb</p>
              <p>Brian Chubb</p>
              <p>Alonzo Luzod</p>

              <h3>Nevada</h3>
              <p>Collin Butrum, Las Vegas, NV</p>

              <h3>New Jersey</h3>
              <p>Angelina Kuhn, Weehawken, NJ</p>
              <p>Michael Jay Perez, New Brunswick, NJ</p>
              <p>Shine Shen, Franklin, NJ</p>
              <p>Wendy Trinidad, Rahway, NJ</p>

              <h3>New York</h3>
              <p>Matt Derek</p>
              <p>K. Alcarez, MD, New York, NY</p>
              <p>Zoe Anton, Long Island, NY</p>
              <p>M. A. Clarke, Bronx, NY</p>

              <h3>Vermont</h3>
              <p>G. and J. Carder</p>

              <h3>Virginia</h3>
              <p>Joe Connors, Arlington, VA</p>
            </div>
            <div className="location-box">
              <h2>Other Countries</h2>

              <h3>England</h3>
              <p>Scott Cooper, Lancashire, England, UK</p>

              <h3>Dominican Republic</h3>
              <p>Carlos Raposo, Santo Domingo</p>

              <h3>Switzerland</h3>
              <p>B. Polla, MD</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/gift-of-art/upcoming-events")}
        className="exit-safedr-button"
      >
        Back to Events
      </button>
    </section>
  );
};

export default RollOfDrivers;
