// CausesSection.js
import React from "react";
import "./Causes.css";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";

const CausesSection = () => {
  return (
    <section className="causes-section">
      <div className="causes-header-box">
        {<img src={HeartIcon} alt="heart" width={60} height={60} />}{" "}
        <h2 className="causes-header">Top Causes of Sudden Cardiac Death</h2>
      </div>
      <p className="causes-description">
        A diversity of cardiovascular disorders are common causes of SCD in
        young athletes. Doctors have detected many of these cardiovascular
        anomalies in the Chad Foundation Heart Screenings through Echocardiogram
        and EKG testing.
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
          <a href="/more-causes" className="causes-link">
            See more causes of sudden cardiac death
          </a>
          <div className="sub-section">
            <div className="Warning">
              <div className="w-header-box">
                {<img src={HeartIcon} alt="heart" width={60} height={60} />}{" "}
                <h2 className="sub-section-header">Warning Signs</h2>
              </div>
              <ul>
                <li>Chest Pain</li>
                <li>Chest Palpitations</li>
                <li>Dizziness</li>
                <li>Fainting</li>
                <li>Family</li>
              </ul>
            </div>
            <div className="Risk">
              <div className="r-heaer-box">
                {<img src={HeartIcon} alt="heart" width={60} height={60} />}{" "}
                <h2 className="sub-section-header">Risk Factors</h2>
              </div>
              <ul>
                <li>High Colesterol</li>
                <li>Hypertension</li>
                <li>Obesity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Warning & Risk Factors*/}
    </section>
  );
};

export default CausesSection;
