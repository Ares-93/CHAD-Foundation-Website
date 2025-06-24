import React from "react";
import "./SCAAndTrainingResources.css";
import ResourcesNavigation from "../ResourcesNavigation";

// IMAGES
import ResourcesImageAED from "../../../../images/Resources-Images/resources-image-aed.png";
import ResourcesImageCPR from "../../../../images/Resources-Images/resources-image-cpr.png";
import ResourcesImageOne from "../../../../images/Resources-Images/resources-image-one.png";
import ResourcesImageTwo from "../../../../images/Resources-Images/resources-image-two.png";
import ResourcesImageThree from "../../../../images/Resources-Images/resources-image-three.png";
import ResourcesImageFour from "../../../../images/Resources-Images/resources-image-four.png";
import ResourcesImageFive from "../../../../images/Resources-Images/resources-image-five.png";
import ResourcesImageSix from "../../../../images/Resources-Images/resources-image-six.png";
import ResourcesImageSeven from "../../../../images/Resources-Images/resources-image-seven.png";
import ResourcesImageEight from "../../../../images/Resources-Images/resources-image-eight.png";
import ResourcesImageNine from "../../../../images/Resources-Images/resources-image-nine.png";
import ResourcesImageTen from "../../../../images/Resources-Images/resources-image-ten.png";
import ResourcesImageEleven from "../../../../images/Resources-Images/resources-image-eleven.png";
import ResourcesImageTwelve from "../../../../images/Resources-Images/resources-image-twelve.png";
import ResourcesImageThirteen from "../../../../images/Resources-Images/resources-image-thirteen.png";
import ResourcesImageFourteen from "../../../../images/Resources-Images/resources-image-fourteen.png";
import ResourcesImageFifteen from "../../../../images/Resources-Images/resources-image-fifteen.png";
import ResourcesImageSixteen from "../../../../images/Resources-Images/resources-image-sixteen.png";
import ResourcesImageSeventeen from "../../../../images/Resources-Images/resources-image-seventeen.png";
import ResourcesImageEighteen from "../../../../images/Resources-Images/resources-image-eighteen.png";
import ResourcesImageNineteen from "../../../../images/Resources-Images/resources-image-nineteen.png";
import ResourcesImageTwenty from "../../../../images/Resources-Images/resources-image-twenty.png";
import ResourcesImageTwentyOne from "../../../../images/Resources-Images/resources-image-twenty-one.png";
import ResourcesImageTwentyTwo from "../../../../images/Resources-Images/resources-image-twenty-two.png";
import ResourcesImageTwentyThree from "../../../../images/Resources-Images/resources-image-twenty-three.png";
import ResourcesImageTwentyFour from "../../../../images/Resources-Images/resources-image-twenty-four.png";
import ResourcesImageTwentyFive from "../../../../images/Resources-Images/resources-image-twenty-five.png";

const ResourceCard = ({ imageUrl, name, text, link, linkText, links }) => {
  return (
    <div className="resource-card">
      <img src={imageUrl} alt={name} className="resource-image" />
      <div className="resource-content">
        <h4 className="resource-name">{name}</h4>
        <p className="resource-text">{text}</p>
        {links ? (
          <div className="resource-links-container">
            {links.map((linkItem, index) => (
              <a
                key={index}
                href={linkItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link-button"
              >
                {linkItem.text}
              </a>
            ))}
          </div>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-check-button"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

const SCAAndTrainingResources = () => {
  return (
    <section className="SCAAndTraining">
      <ResourcesNavigation currentPage="sca-and-training-resources" />
      <div className="main-container">
        {/* Card AED */}
        <ResourceCard
          imageUrl={ResourcesImageAED}
          name="Automated external defibrillators: Do you need an AED?"
          text="An AED may save your life during cardiac arrest. Weigh the pros and cons to see if you should get one."
          links={[
            {
              url: "https://www.mayoclinic.org/diseases-conditions/heart-arrhythmia/in-depth/automated-external-defibrillators/art-20043909",
              text: "Check",
            },
            {
              url: "https://cpr.heart.org/-/media/CPR-Files/Training-Programs/AED-Implementation/2023-updates/KJ1729_AED_FactSheet.pdf",
              text: "More",
            },
          ]}
        />
        {/* Card CPR */}
        <ResourceCard
          imageUrl={ResourcesImageCPR}
          name="What is CPR?"
          text="Steps to perform it, and How to find a class to learn CPR."
          link="https://www.redcross.org/take-a-class/cpr/performing-cpr/cpr-steps"
          linkText="Check"
        />
        {/* Card 1 */}
        <ResourceCard
          imageUrl={ResourcesImageOne}
          name="Parent Heart Watch"
          text="“Our Mission: Parent Heart Watch (PHW) is the only national voice solely dedicated to protecting youth from sudden cardiac arrest and preventable sudden cardiac death. PHW leads and empowers others by educating and advocating for change.”"
          link="https://parentheartwatch.org"
          linkText="Check"
        />
        {/* Card 2 */}
        <ResourceCard
          imageUrl={ResourcesImageTwo}
          name="American Heart Association/CPR"
          text="World leader in CPR and Emergency Cardiovascular Care Training"
          link="https://www.heart.org/en/cpr"
          linkText="Check"
        />
        {/* Card 3 */}
        <ResourceCard
          imageUrl={ResourcesImageThree}
          name="Red Cross"
          text="Training + Certification, Fast, Easy, Simple"
          link="https://www.redcross.org/take-a-class/cpr"
          linkText="Check"
        />
        {/* Card 4 */}
        <ResourceCard
          imageUrl={ResourcesImageFour}
          name="Simons Heart"
          text="“Protecting Hearts. Saving Lives.” (providing heart screenings)"
          links={[
            { url: "https://simonsheart.org/", text: "Check" },
            {
              url: "https://www.screenacrossamerica.org/about-us/",
              text: "More",
            },
          ]}
        />
        {/* Card 5 */}
        <ResourceCard
          imageUrl={ResourcesImageFive}
          name="Anthony Bates Foundation"
          text="“Screening Young Hearts. Saving Young Lives.”"
          link="https://www.anthonybates.org/"
          linkText="Check"
        />
        {/* Card 6 */}
        <ResourceCard
          imageUrl={ResourcesImageSix}
          name="Matthew Krug Foundation"
          text="“Protecting Children and Youth from Cardiac Arrest” (Education, AEDS, Screenings)"
          link="http://www.matthewkrugfoundation.org/"
          linkText="Check"
        />
        {/* Card 7 */}
        <ResourceCard
          imageUrl={ResourcesImageSeven}
          name="Louis J. Acompora Memorial Foundation"
          text="“Taking Our Children Out of Harm’s Way” (sports safety AEDS / Screenings)"
          link="https://la12.org/"
          linkText="Check"
        />
        {/* Card 8 */}
        <ResourceCard
          imageUrl={ResourcesImageEight}
          name="Greg W. Moyer Defibrillator Fund"
          text="“Let the beat go on” (AED awareness and training)"
          link="https://gregaed.com/"
          linkText="Check"
        />
        {/* Card 9 */}
        <ResourceCard
          imageUrl={ResourcesImageNine}
          name="R. Andrew Helgeson Memorial Foundation"
          text="“Spread awareness of sudden cardiac arrest”"
          link="http://www.andrewhelgeson.org/"
          linkText="Check"
        />
        {/* Card 10 */}
        <ResourceCard
          imageUrl={ResourcesImageTen}
          name="Sudden Cardiac Arrest Foundation"
          text="“You can SAVE A LIFE anywhere”"
          link="https://www.sca-aware.org/"
          linkText="Check"
        />
        {/* Card 11 */}
        <ResourceCard
          imageUrl={ResourcesImageEleven}
          name="Heartfelt Cardiac Projects"
          text="“Dedicated to Saving Lives from Cardiac Arrest” (screenings)"
          link="https://heartfeltcardiacprojects.org/"
          linkText="Check"
        />
        {/* Card 12 */}
        <ResourceCard
          imageUrl={ResourcesImageTwelve}
          name="Children’s Cardiomyopathy Foundation"
          text="“Focus on pediatric cardiomyopathy”"
          link="https://dev.childrenscardiomyopathy.org/"
          linkText="Check"
        />
        {/* Card 13 */}
        <ResourceCard
          imageUrl={ResourcesImageThirteen}
          name="KEN (Kids Endangered Now) Heart Foundation"
          text="“Education and prevention of Sudden Cardiac Death” (AEDs)"
          link="https://kenheartfoundation.blogspot.com/"
          linkText="Check"
        />
        {/* Card 14 */}
        <ResourceCard
          imageUrl={ResourcesImageFourteen}
          name="Louis T. Savino, III Foundation"
          text="“AEDS Save Lives”"
          link="http://www.louissavinofoundation.org"
          linkText="Check"
        />
        {/* Card 15 */}
        <ResourceCard
          imageUrl={ResourcesImageFifteen}
          name="Travis R. Roy Sudden Cardiac Arrest Fund"
          text="“Raise awareness of Sudden Cardiac Arrest / Screenings / CPR”"
          link="https://www.guidestar.org/profile/06-1811226"
          linkText="Check"
        />
        {/* Card 16 */}
        <ResourceCard
          imageUrl={ResourcesImageSixteen}
          name="Cody Stephens Go Big or Go Home Foundation"
          text="Provides heart screenings"
          link="https://www.codystephensfoundation.org/"
          linkText="Check"
        />
        {/* Card 17 */}
        <ResourceCard
          imageUrl={ResourcesImageSeventeen}
          name="Quinn Driscoll Foundation"
          text="“Awareness, Education and Heart Testing”"
          link="https://www.quinndriscollfoundation.org/"
          linkText="Check"
        />
        {/* Card 18 */}
        <ResourceCard
          imageUrl={ResourcesImageEighteen}
          name="Eric Paredes Save A Life Foundation"
          text="Heart screenings, CPR training, providing AEDS"
          link="https://epsavealife.org/"
          linkText="Check"
        />
        {/* Card 19 */}
        <ResourceCard
          imageUrl={ResourcesImageNineteen}
          name="Nick of Time Foundation"
          text="SCA awareness, youth heart screenings"
          link="https://nickoftimefoundation.org"
          linkText="Check"
        />
        {/* Card 20 */}
        <ResourceCard
          imageUrl={ResourcesImageTwenty}
          name="Kevs Foundation"
          text="Education SCA, AEDS, youth heart screenings"
          link="https://www.kevsfoundation.com/index.html"
          linkText="Check"
        />
        {/* Card 21 */}
        <ResourceCard
          imageUrl={ResourcesImageTwentyOne}
          name="HCMA – Hypertrophic Cardiomyopathy Association"
          text="Serving the HCM Spectrum Disorder Community Since 1996. Denville, NJ"
          link="https://www.4hcm.org/"
          linkText="Check"
        />
        {/* Card 22 */}
        <ResourceCard
          imageUrl={ResourcesImageTwentyTwo}
          name="Atrium Health"
          text="Heart of a Champion Day is an annual free sports-specific health screening"
          link="https://atriumhealth.org/medical-services/specialty-care/orthopedic-care/sports-medicine/heart-of-a-champion"
          linkText="Check"
        />
        {/* Card 23 */}
        <ResourceCard
          imageUrl={ResourcesImageTwentyThree}
          name="PlaySmart Youth Heart Screenings"
          text="Free Youth Heart Screenings"
          link="https://providencebasecamp.org/calendar/2024/2/10/playsmart"
          linkText="Check"
        />
        {/* Card 24 */}
        <ResourceCard
          imageUrl={ResourcesImageTwentyFour}
          name="The Beaumont Healthy Heart Check Student Heart Screening"
          text="Free Student Heart checks (Michigan)"
          link="https://www.beaumont.org/services/heart-vascular/student-heart-check"
          linkText="Check"
        />
        {/* Card 25 */}
        <ResourceCard
          imageUrl={ResourcesImageTwentyFive}
          name="The Chad Foundation for Athletes and Artists"
          text="Caring for the whole Heart: advocating heart screenings,
AEDs, CPR, awareness of premature cardio risk factors in the
young. The Gift of Art expresses the needs of the ‘inner heart’
through books, film, theatre -stories of the heart, and youth
scholarships."
          link="https://www.chad-foundation.org"
          linkText="Check"
        />
      </div>
    </section>
  );
};

export default SCAAndTrainingResources;
