import React from "react";
import "./WhatWeveDone.css";
import AboutUsNavigation from "../AboutUsNavigation";
import HospitalsOne from "../../../../images/AboutUs-Images/hospitals-photo-1.png";
import HospitalsTwo from "../../../../images/AboutUs-Images/hospitals-photo-2.png";
import HospitalsThree from "../../../../images/AboutUs-Images/hospitals-photo-3.png";
import LogoOne from "../../../../images/AboutUs-Images/hospitals-logo-1.png";
import LogoTwo from "../../../../images/AboutUs-Images/hospitals-logo-2.png";
import LogoThree from "../../../../images/AboutUs-Images/hospitals-logo-3.png";



const WhatWeveDone = () => {
  return (
    <section className="WhatWeveDone">
      <AboutUsNavigation currentPage="what-weve-done" />
      <div className="main-container">
        <h2 className="whatWeveDone-header">Hospitals We Have Worked With</h2>
        {/* ONE */}
        <div className="whatWeveDone-content">
          <div className="whatWeveDone-logo-and-text">
            <img
              src={LogoOne}
              alt="logo"
              className="whatWeveDone-hospitals-logo"
            />
            <div className="whatWeveDone-text">
              CHAD Foundation’s first steps were Gifts to the renowned
              Children’s Hospital Los Angeles Heart Institute.
              <br />
              <br />A volleyball tournament and heart screening had offered to
              benefit the nonprofit Children’s Hospital Los Angeles Heart
              Institute and the Chad Foundation Heart Screening Program.
            </div>
          </div>
          <div className="whatWeveDone-photo">
            <img
              src={HospitalsOne}
              alt="Hospitals"
              className="hospitals-photo"
            />
          </div>
        </div>
        {/* TWO */}
        <div className="whatWeveDone-content">
          <div className="whatWeveDone-photo">
            <img
              src={HospitalsTwo}
              alt="Hospitals"
              className="hospitals-photo"
            />
          </div>
          <div className="whatWeveDone-logo-and-text">
            <img
              src={LogoTwo}
              alt="logo"
              className="whatWeveDone-hospitals-logo"
            />
            <div className="whatWeveDone-text">
              Chad with Johns Hopkins Heart Hype Program, screened athletes for
              the Jr. Olympics at Morgan State University, in Baltimore, MD.
              <br />
              <br />
              Testing supplies were donated by The Johns Hopkins Hospital.
              Ultrasound and EKG equipment was provided by General Electric
              Healthcare.
            </div>
          </div>
        </div>
        {/* THREE */}
        <div className="whatWeveDone-content">
          <div className="whatWeveDone-logo-and-text">
            <img
              src={LogoThree}
              alt="logo"
              className="whatWeveDone-hospitals-logo"
            />
            <div className="whatWeveDone-text">
              Holyoke Medical Center have teamed up with the Chad Foundation to
              provide preventative cardiac screenings for 200 high-school
              athletes in an effort to help detect lethal abnormalities such as
              hypertrophic cardiomyopathy.
              <br />
              <br />The screenings, which include echocardiogram, electrocardiogram, or EKG, and blood pressure test, have been  free.
            </div>
          </div>
          <div className="whatWeveDone-photo">
            <img
              src={HospitalsThree}
              alt="Hospitals"
              className="hospitals-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeveDone;
