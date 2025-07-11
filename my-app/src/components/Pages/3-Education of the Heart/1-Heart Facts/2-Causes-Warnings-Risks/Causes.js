// CausesSection.js
import React from "react";
import "./Causes.css";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";

const CausesSection = () => {
  const openMoreCauses = () => {
    // Open the link in a new tab
    window.open(
      "https://www.jacc.org/doi/10.1016/j.jacc.2012.08.1032",
      "_blank"
    );
  };

  return (
    <section className="causes-section">
      <div className="main-container">
        <div className="causes-header-box">
          {<img src={HeartIcon} alt="heart" width={60} height={60} />}{" "}
          <h2 className="causes-header">Top Causes of Sudden Cardiac Death</h2>
        </div>
        <p className="causes-description">
          A diversity of cardiovascular disorders are common causes of SCD in
          young athletes. Doctors have detected many of these cardiovascular
          anomalies in the Chad Foundation Heart Screenings through
          Echocardiogram and EKG testing.
        </p>
        <div className="causes-content">
          <div className="causes-column">
            <h3>Hypertrophic cardiomyopathy</h3>
            <p className="h3-text">
              a disease in which the heart muscle becomes thickened
              (hypertrophied){" "}
            </p>
            {/* ... other causes ... */}
            <h3>Congenital coronary anomalies</h3>
            <p className="h3-text">
              structural abnormalities of the heart's coronary arteries that are
              present from birth.
            </p>
            <h3>Arrhythmogenic right ventricular dysplasia (ARVD)</h3>
            <p className="h3-text">
              a rare genetic disorder that affects the heart muscle and can lead
              to abnormal heart rhythms and heart failure.
            </p>
            <div className="Warning">
              <div className="w-header-box">
                {<img src={HeartIcon} alt="heart" width={60} height={60} />}{" "}
                <h2 className="sub-section-header">Warning Signs</h2>
              </div>
              <ul className="warnings">
                <li>Chest Pain</li>
                <li>Chest Palpitations</li>
                <li>Dizziness</li>
                <li>Fainting</li>
                <li>Family History of HCM</li>
              </ul>
              <a
                href="https://www.mayoclinic.org/diseases-conditions/hypertrophic-cardiomyopathy/symptoms-causes/syc-20350198"
                className="warning-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Warning Signs
              </a>
            </div>
          </div>
          <div className="causes-column">
            <h3>Myocarditis</h3>
            <p className="h3-text">
              Inflammation of heart muscle causing impaired function.{" "}
            </p>
            {/* ... other causes ... */}
            <h3>Aortic rupture due to Marfan syndrome</h3>
            <p className="h3-text">
              weakened connective tissue leads to a life-threatening tear or
              rupture of the body's main artery.{" "}
            </p>

            <button onClick={openMoreCauses} className="causes-see-more-btn">
              See more causes of sudden cardiac death
            </button>
            <div className="Risk">
              <ul className="risks">
                <div className="Risk">
                  <div className="r-header-box">
                    <img src={HeartIcon} alt="heart" width={60} height={60} />
                    <h2 className="sub-section-header">Risk Factors</h2>
                  </div>
                  <p className="risk-note">
                    Learn more about Risk Factors in children by clicking each
                    of the risks below
                  </p>
                  <ul className="risks">
                    <li>
                      <a
                        href="https://www.hrh.ca/patient-
education/001174_Healthy%20eating%20for%20child%20and%20teen%20w
ith%20cholesterol.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        High Cholesterol
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=La6RrOpAS38"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hypertension
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Obesity
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mayoclinic.org/diseases-conditions/type-1-diabetes-in-children/symptoms-causes/syc-20355306"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Diabetes
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
