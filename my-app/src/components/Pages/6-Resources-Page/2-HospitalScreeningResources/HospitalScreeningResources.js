import React from "react";
import "./HospitalScreeningResources.css";
import ResourcesNavigation from "../ResourcesNavigation";

// IMAGES
import HsResourcesImageOne from "../../../../images/Resources-Images/hs-resources-image-one.png";
import HsResourcesImageTwo from "../../../../images/Resources-Images/hs-resources-image-two.png";
import HsResourcesImageThree from "../../../../images/Resources-Images/hs-resources-image-three.png";
import HsResourcesImageFour from "../../../../images/Resources-Images/hs-resources-image-four.png";
import HsResourcesImageFive from "../../../../images/Resources-Images/hs-resources-image-five.png";
import HsResourcesImageSix from "../../../../images/Resources-Images/hs-resources-image-six.png";
import HsResourcesImageSeven from "../../../../images/Resources-Images/hs-resources-image-seven.png";

const ResourceCard = ({ imageUrl, name, text, link, linkText }) => {
  return (
    <div className="resource-card">
      <img src={imageUrl} alt={name} className="resource-image" />
      <div className="resource-content">
        <h4 className="resource-name">{name}</h4>
        <p className="resource-text">{text}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-check-button"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

const HospitalScreeningResources = () => {
  return (
    <section className="HospitalScreeningResources">
      <ResourcesNavigation currentPage="hospital-screening-resources" />
      <div className="main-container">
        {/* Card 1 */}
        <ResourceCard
          imageUrl={HsResourcesImageOne}
          name="Texas Children’s Hospital"
          text="Heart Screenings for Student Athletes (Houston, TX)"
          link="https://www.texaschildrens.org/departments/electrophysiology-program/patient-resources"
          linkText="Check"
        />
        {/* Card 2 */}
        <ResourceCard
          imageUrl={HsResourcesImageTwo}
          name="Championship Heart Organization"
          text="Heart Screenings and Research (Austin, TX)"
          link="https://www.champhearts.org/about-us"
          linkText="Check"
        />
        {/* Card 3 */}
        <ResourceCard
          imageUrl={HsResourcesImageThree}
          name="Beaumont (Hospital)"
          text="Student Heart Check (Royal Oak, MI)"
          link="https://www.beaumont.org/services/heart-vascular/heart-centers/student-heart-check"
          linkText="Check"
        />
        {/* Card 4 */}
        <ResourceCard
          imageUrl={HsResourcesImageFour}
          name="RWJ Barnabas Health"
          text="Athlete Cardiac Screenings (various locations, NJ)"
          link="https://www.rwjbh.org/treatment-care/athlete-screenings/cardiac-screening/"
          linkText="Check"
        />
        {/* Card 5 */}
        <ResourceCard
          imageUrl={HsResourcesImageFive}
          name="CHOC (Children’s Hospital of Orange County)"
          text="Athlete Heart Screenings and (LEAPS) (Orange County, CA). Life-Threatening Events Associated with Pediatric Sports"
          link="https://www.choc.org/orthopaedics/sports-medicine/leaps/"
          linkText="Check"
        />
        {/* Card 6 */}
        <ResourceCard
          imageUrl={HsResourcesImageSeven}
          name="Via Heart Project"
          text="Providing heart screenings (San Francisco, CA)"
          link="https://viaheartproject.org/screenings/"
          linkText="Check"
        />

        {/* Card 7 */}
        <ResourceCard
          imageUrl={HsResourcesImageSix}
          name="Heart Hospital of Austin"
          text="Young Athlete Heart Screening. Heart Hospital of Austin provides free heart screenings to the children of Central Texas in February and August each year. Children ages 14-18 receive an electrocardiogram (EKG) and an echocardiogram to screen for the deadly disorder hypertrophic cardiomyopathy (HCM). Learn more:"
          link="http://www.hearthospitalofaustin.com/"
          linkText="Check"
        />
      </div>
    </section>
  );
};

export default HospitalScreeningResources;
