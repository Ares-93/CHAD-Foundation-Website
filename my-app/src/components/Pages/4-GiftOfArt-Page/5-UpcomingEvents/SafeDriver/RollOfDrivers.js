import React from "react";
import "./RollOfDrivers.css";
import ImgOne from "../../../../../images/GiftOfArt-Images/roll-one.png";
import ImgTwo from "../../../../../images/GiftOfArt-Images/campaign-two.png";
import ImgThree from "../../../../../images/GiftOfArt-Images/roll-two.png";

const RollOfDrivers = () => {
  const handleRollBtnClick = () => {
    window.open("https://youtu.be/ldwHd9MyKQc?si=q5Bw-AHAN0F19pLL&t=755");
  };
  return (
    <section className="RollOfDrivers">
      <div className="main-container">
        <h1 className="roll-header">Chad Honour Roll of Safe Drivers</h1>
        <div className="roll-box">
          <h2 className="roll-h2">Texting and Drinking and Driving</h2>
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
      </div>
    </section>
  );
};

export default RollOfDrivers;
