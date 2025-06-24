import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WhatWeveDone.css";
import AboutUsNavigation from "../AboutUsNavigation";
import HospitalsOne from "../../../../images/AboutUs-Images/hospitals-photo-1.png";
import HospitalsTwo from "../../../../images/AboutUs-Images/hospitals-photo-2.png";
import HospitalsThree from "../../../../images/AboutUs-Images/hospitals-photo-3.png";
import LogoOne from "../../../../images/AboutUs-Images/hospitals-logo-1.png";
import LogoTwo from "../../../../images/AboutUs-Images/hospitals-logo-2.png";
import LogoThree from "../../../../images/AboutUs-Images/hospitals-logo-3.png";

const WhatWeveDone = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1160);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navigate = useNavigate();

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
              For 25 years, the “Annual CHAD Volleyball Tournament and Heart
              Screening,” was held in Hermosa Beach, CA benefiting the renowned
              Children’s Hospital Los Angeles Heart Institute and the Chad
              Foundation Heart Screening Program. CHLA cardiologists and Staff
              generously donated their services to perform 1,000 heart
              screenings. Philips provided state-of-the-art Echocardiogram and
              EKG equipment.
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
          {isMobile ? (
            <>
              <div className="whatWeveDone-logo-and-text">
                <img
                  src={LogoTwo}
                  alt="logo"
                  className="whatWeveDone-hospitals-logo"
                />
                <div className="whatWeveDone-text">
                  CHAD with Johns Hopkins Heart Hype Program, screened 400
                  athletes for the Jr. Olympics at Morgan State University, in
                  Baltimore, MD. <br />
                  <br />
                  Cardiologists and Staff from Johns Hopkins Hospital performed
                  the lifesaving screenings. Ultrasound and EKG equipment were
                  provided by General Electric Healthcare.
                </div>
              </div>
              <div className="whatWeveDone-photo">
                <img
                  src={HospitalsTwo}
                  alt="Hospitals"
                  className="hospitals-photo"
                />
              </div>
            </>
          ) : (
            <>
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
                  CHAD with Johns Hopkins Heart Hype Program, screened 400
                  athletes for the Jr. Olympics at Morgan State University, in
                  Baltimore, MD. <br />
                  <br />
                  Cardiologists and Staff from Johns Hopkins Hospital performed
                  the lifesaving screenings. Ultrasound and EKG equipment were
                  provided by General Electric Healthcare.
                </div>
              </div>
            </>
          )}
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
              Holyoke Medical Center has teamed up with the Chad Foundation to
              provide several preventative cardiac screenings for 500
              high-school athletes in an effort to help detect lethal
              abnormalities such as hypertrophic cardiomyopathy, WPW, and Long
              QT Syndrome. <br />
              <br />
              The screenings, which include an echocardiogram,
              electrocardiogram, or EKG, blood pressure, cholesterol and glucose
              testing have detected several premature cardiovascular risk
              factors in high school students and athletes.
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
        <div className="whatWeveDone-gallery-btns">
          <button
            className="whatWeveDone-gallery-btn-screnings whatWeveDone-gallery-btn"
            onClick={() =>
              navigate("/screenings-gallery", {
                state: { from: "/about/what-weve-done" },
              })
            }
          >
            Gallery - CHAD Heart Screenings
          </button>

          <button
            className="whatWeveDone-gallery-btn-volleyball whatWeveDone-gallery-btn"
            onClick={() => navigate("/volleyball-gallery")}
          >
            CHAD Volleyball Benefit pictures
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeveDone;
