import React, { useState } from "react";
import "./Testimonials.css";
import AboutUsNavigation from "../AboutUsNavigation";
import PhotoOne from "../../../../images/AboutUs-Images/testimonials-photo-1.png";
import PhotoTwo from "../../../../images/AboutUs-Images/testimonials-photo-2.png";
import PhotoThree from "../../../../images/AboutUs-Images/testimonials-photo-3.png";
import PhotoFour from "../../../../images/AboutUs-Images/testimonials-photo-4.png";
import PhotoFive from "../../../../images/AboutUs-Images/testimonials-photo-5.png";
import PhotoSix from "../../../../images/AboutUs-Images/testimonials-photo-6.png";
import PhotoSeven from "../../../../images/AboutUs-Images/testimonials-photo-7.jpg";

const TestimonialsCard = ({
  name,
  position,
  place,
  initialStoryText,
  expandedStoryText,
  imageUrl,
  isExpandable,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="testimonials-card">
      <img
        src={imageUrl}
        alt={`${name} testimonial`}
        className="testimonials-image"
      />
      <div className="testimonials-content">
        <div className="testimonials-content-name-and-position">
          <h4 className="testimonials-name">{name}</h4>
          {position && <p className="testimonials-position">{position}</p>}
        </div>
        {place && <p className="testimonials-place">{place}</p>}
        <div className="testimonials-text-and-spans">
          <p className="testimonials-text">
            {initialStoryText}
            {isExpandable && !isExpanded && (
              <span className="readMore-span" onClick={toggleExpansion}>
                {" Read more"}
              </span>
            )}
            {isExpandable && isExpanded && (
              <>
                {expandedStoryText}
                <span className="readMore-span" onClick={toggleExpansion}>
                  {" Read less"}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="Testimonials-Two">
      <AboutUsNavigation currentPage="testimonials" />
      <div className="main-container">
        <h2 className="testimonials-header">What Our Supporters Have to Say</h2>
        <div className="testimonials-container">
          {/* ONE */}
          <TestimonialsCard
            name="Troy Wirth,"
            position="Vice President"
            place="Metropolitan Life, San Jose, CA"
            initialStoryText="I have been meaning to write and thank you for all the spectacular work The Chad Foundation has been doing across the country. I am especially appreciative because I am one of the lives you might have saved. Due to your echocardiogram screening at the Chad Foundation Malibu Benefit for Children’s Hospital, Doctors detected an arrhythmia and advised"
            expandedStoryText=" immediate follow-up which I did and ended up having surgery a month later in October, with a diagnosis of Wolff-Parkinson-White Syndrome. All my life, I suffered from this undiagnosed physical challenge and played Class 1 volleyball at USC and never could play to my optimum. Now, I am playing sports better than ever, thanks to your fortuitous screening event. I would be honored to be a spokesperson for your cause, of which I am living proof!"
            imageUrl={PhotoOne}
            isExpandable={true}
          />
          {/* TWO */}
          <TestimonialsCard
            name="L. Underwood,"
            position="Director of Special Events"
            place="Children’s Hospital Los Angeles Foundation"
            initialStoryText="The Chad Foundation for Athletes and Artists’ support and willingness to participate so generously in our mission is greatly valued, and your gifts will have a significant impact on the care we provide to seriously ill children."
            expandedStoryText=""
            imageUrl={PhotoTwo}
            isExpandable={false}
          />
          {/* THREE */}
          <TestimonialsCard
            name="Jim Gosset,"
            position="Head Athletic Trainer"
            place="Columbia University in the City of New York"
            initialStoryText="Collective data from their screening resources may yield a further understanding of heart-related illnesses in the young and causes of sudden death. For these reasons I give my unreserved support."
            expandedStoryText=""
            imageUrl={PhotoThree}
            isExpandable={false}
          />
          {/* FOUR */}
          <TestimonialsCard
            name="Bernhard Wolf,"
            position="Managing Director"
            place="Homeless Streetsoccer World Cup, Graz, Austria"
            initialStoryText="On behalf of the INSP, International Streetnewspapers, and the 26 teams of homeless athletes who participated in the 1st and 2nd Homeless Streetsoccer World Cup, we thank you and The Chad Foundation for Athletes and Artists for providing this lifesaving test for our impoverished athletes of the world."
            expandedStoryText=""
            imageUrl={PhotoFour}
            isExpandable={false}
          />
          {/* FIVE */}
          <TestimonialsCard
            name="Arnold Schwarzenegger"
            place="Governor of California"
            initialStoryText="As Governor of California, I commend the efforts of The Chad Foundation to raise public awareness of health issues. Heart health is an important concern in California, and I will continue to support efforts that encourage early screening and detection to prevent Sudden Cardiac Deaths."
            expandedStoryText=""
            imageUrl={PhotoFive}
            isExpandable={false}
          />
          {/* SIX */}
          <TestimonialsCard
            name="Nancy Cena,"
            position="Athletic Director"
            place="Port Richmond High School, Staten Island, New York"
            initialStoryText="Dear Arista, On behalf of the Port Richmond High School Athletic Program and Principal Timothy Gannon, I would like to thank you for providing complimentary heart screenings for our Varisty and Junior Varsity Football Teams."
            expandedStoryText=""
            imageUrl={PhotoSix}
            isExpandable={false}
          />
          {/* SEVEN */}
          <TestimonialsCard
            name="Jared LaCorte,"
            position="MD, FAAP, FACC"
            place="Staten Island Pediatric Cardiology"
            initialStoryText="As a physician, especially one who specializes in pediatric cardiology and also as a father, it has been my privilege to participate in cardiac screening events such as those sponsored by the Chad Foundation."
            expandedStoryText=" I feel very strongly that every young athlete should receive cardiac clearance prior to participating in competitive sports. Testing is non-invasive, results can be obtained quickly, and taking these types of preventative measures can potentially save lives."
            imageUrl={PhotoSeven}
            isExpandable={false}
          />
          {/* EIGHT */}
          <TestimonialsCard
            name="Michael R. Bloomberg,"
            position="Mayor"
            initialStoryText="Dear Friends, It is a pleasure to welcome everyone to the Harlem YMCA, where the Chad Foundation for Artists and Athletes is offering preventative screenings for young athletes throughout the day."
            expandedStoryText=" On behalf of the City of New York, I thank all those whose generosity and dedication has made these screenings possible. I wish all of the athletes participating in these screenings the very best for an informative day, and for a healthy, happy future. Sincerely, Michael R. Bloomberg, Mayor"
            imageUrl={PhotoSeven}
            isExpandable={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
