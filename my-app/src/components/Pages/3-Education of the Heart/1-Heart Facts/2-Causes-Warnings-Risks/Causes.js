// CausesSection.js
import React from "react";
import "./Causes.css";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";

const CausesSection = () => {
  const openMoreCauses = () => {
    window.open(
      "https://www.jacc.org/doi/10.1016/j.jacc.2012.08.1032",
      "_blank"
    );
  };

  const handleLearnMoreWarning = () => {
    window.open(
      "https://www.mayoclinic.org/diseases-conditions/hypertrophic-cardiomyopathy/symptoms-causes/syc-20355306",
      "_blank"
    );
  };

  return (
    <section className="causes-section">
      <div className="main-container">
        <div className="causes-header-box">
          <img
            src={HeartIcon}
            alt="Heart icon"
            className="causes-heart-icon"
            width={60}
            height={60}
          />
          <h2 className="causes-header">Top Causes of Sudden Cardiac Death</h2>
        </div>

        <p className="causes-description">
          A diversity of cardiovascular disorders are common causes of SCD in
          young athletes. Doctors have detected many of these cardiovascular
          anomalies in the Chad Foundation Heart Screenings through
          Echocardiogram and EKG testing.
        </p>

        {/* Causes: 2-column grid on desktop, stacks on small screens */}
        <div className="causes-grid">
          <div className="cause-block">
            <h3>Hypertrophic cardiomyopathy</h3>
            <p className="cause-text">
              A disease in which the heart muscle becomes thickened
              (hypertrophied).
            </p>

            <h3>Congenital coronary anomalies</h3>
            <p className="cause-text">
              Structural abnormalities of the heart’s coronary arteries that are
              present from birth.
            </p>

            <h3>Arrhythmogenic right ventricular dysplasia (ARVD)</h3>
            <p className="cause-text">
              A rare genetic disorder that affects the heart muscle and can lead
              to abnormal heart rhythms and heart failure.
            </p>
          </div>

          <div className="cause-block">
            <h3>Myocarditis</h3>
            <p className="cause-text">
              Inflammation of the heart muscle causing impaired function.
            </p>

            <h3>Aortic rupture due to Marfan syndrome</h3>
            <p className="cause-text">
              Weakened connective tissue can lead to a life-threatening tear or
              rupture of the body’s main artery.
            </p>

            <button onClick={openMoreCauses} className="causes-btn">
              See more causes of sudden cardiac death
            </button>
          </div>
        </div>

        {/* Warning Signs & Risk Factors: separate 2-column grid */}
        <div className="info-grid">
          <div className="info-block">
            <div className="info-header-box">
              <img
                src={HeartIcon}
                alt="Heart icon"
                width={60}
                height={60}
                className="info-heart-icon"
              />
              <h2 className="sub-section-header">Warning Signs</h2>
            </div>

            <ul className="list bullets">
              <li>Chest pain</li>
              <li>Palpitations</li>
              <li>Dizziness</li>
              <li>Fainting</li>
              <li>Family history of HCM</li>
            </ul>

            <button onClick={handleLearnMoreWarning} className="causes-btn">
              Learn more about warning signs
            </button>
          </div>

          <div className="info-block">
            <div className="info-header-box">
              <img
                src={HeartIcon}
                alt="Heart icon"
                width={60}
                height={60}
                className="info-heart-icon"
              />
              <h2 className="sub-section-header">Risk Factors</h2>
            </div>

            <p className="risk-note">
              Learn more about risk factors in children by clicking each item:
            </p>

            <ul className="list links">
              <li>
                <a
                  href="https://www.hrh.ca/patient-education/001174_Healthy%20eating%20for%20child%20and%20teen%20with%20cholesterol.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  High cholesterol
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
        </div>
        {/* end info-grid */}
      </div>
    </section>
  );
};

export default CausesSection;
