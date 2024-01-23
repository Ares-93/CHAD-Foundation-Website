import React from "react";
import "./Testimonials.css";
import AboutUsNavigation from "../AboutUsNavigation";
import PhotoOne from "../../../../images/AboutUs-Images/testimonials-photo-1.png";
import PhotoTwo from "../../../../images/AboutUs-Images/testimonials-photo-2.png";
import PhotoThree from "../../../../images/AboutUs-Images/testimonials-photo-3.png";
import PhotoFour from "../../../../images/AboutUs-Images/testimonials-photo-4.png";
import PhotoFive from "../../../../images/AboutUs-Images/testimonials-photo-5.png";
import PhotoSix from "../../../../images/AboutUs-Images/testimonials-photo-6.png";


const TestimonialsCard = ({
  name,
  position,
  place,
  text,
  imageUrl,
  more,
  dot,
}) => (
  <div className="testimonials-card">
    <img
      src={imageUrl}
      alt={`${name} testimonial`}
      className="testimonials-image"
    />
    <div className="testimonials-content">
      <div className="testimonials-content-name-and-position">
        {" "}
        <h4 className="testimonials-name">{name}</h4>
        <p className="testimonials-position">{position}</p>
      </div>
      <p className="testimonials-place">{place}</p>
      <div className="testimonials-text-and-spans">
        <p className="testimonials-text">{text}</p>
        <span className="readMore-span">{more}</span>
        <span className="dot-span">{dot}</span>
      </div>
    </div>
  </div>
);

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
            text="I have been meaning to write and thank you for all the spectacular work The Chad Foundation has been doing across the country. I am especially appreciative because I am one of the lives you might have saved. Due to your echocardiogram screening at the Chad Foundation Malibu Benefit for Children’s Hospital, Doctors detected an arrhythmia and advised immediate follow-up which I did and ended up having..."
            more="Read more"
            dot="."
            imageUrl={PhotoOne}
          />
          {/* TWO */}
          <TestimonialsCard
            name="L. Underwood,"
            position="Director of Special Events"
            place="Children’s Hospital Los Angeles Foundation"
            text="The Chad Foundation for Athletes and Artists’ support and willingness to participate so generously in our mission is greatly valued, and your gifts will have a significant impact on the care we provide to seriously ill children."
            imageUrl={PhotoTwo}
          />
          {/* THREE */}
          <TestimonialsCard
            name="Jim Gosset,"
            position="Head Athletic Trainer"
            place="Columbia University in the City of New York"
            text="Collective data from their screening resources may yield a further understanding of heart-related illnesses in the young and causes of sudden death. For these reasons I give my unreserved support."
            imageUrl={PhotoThree}
          />
          {/* FOUR */}
          <TestimonialsCard
            name="Bernhard Wolf,"
            position="Managing Director"
            place="Homeless Streetsoccer World Cup, Graz, Austria"
            text="On behalf of the INSP, International Streetnewspapers, and the 26 teams of homeless athletes who participated in the 1st and 2nd Homeless Streetsoccer World Cup, we thank you and The Chad Foundation for Athletes and Artists for providing this lifesaving test for our impoverished athletes of the world. Your heart screening event has become a necessary part of the World Cup, and we look forward to The Chad’s participation in forthcoming events."
            imageUrl={PhotoFour}
          />
          {/* FIVE */}
          <TestimonialsCard
            name="Arnold Schwarzenegger"
            place="Governor of California"
            text="As Governor of California, I commend the efforts of The Chad Foundation to raise public awareness of health issues. Heart health is an important concern in California, and I will continue to support efforts that encourage early screening and detection to prevent Sudden Cardiac Deaths. As such, I am grateful for the support that your foundation has provided to young athletes, the homeless and the Children’s Hospital of Los Angeles."
            imageUrl={PhotoFive}
          />
          {/* SIX */}
          <TestimonialsCard
            name="Nancy Cena,"
            position="Athletic Director"
            place="Port Richmond High School, Staten Island, New York"
            text="Dear Arista, On behalf of the Port Richmond High School Athletic Program and Principal Timothy Gannon, I would like to thank you for providing complimentary heart screenings for our Varisty and Junior Varsity Football Teams. We do hope to work with The Chad Foundation again to service our track, basketball, and other teams who would greatly benefit from this heart screening. We extend our sincere thanks to the doctors, nurses, technicians, and volunteers..."
            more="Read more"
            dot="."
            imageUrl={PhotoSix}
          />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
