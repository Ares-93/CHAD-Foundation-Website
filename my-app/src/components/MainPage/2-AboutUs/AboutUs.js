import React from "react";

const AboutUs = () => {
  return (
    <section className="about-story-mission">
      <div className="Who_Are_We-container">
        <h2 className="about-subheader">Who Are We:Our Story & Mission</h2>
        <p className="about-text-p1">
          {" "}
          The Mission of The Chad Foundation for Athletes and Artists is
          two-fold: First, to raise awareness of Sudden Cardiac Death in Young
          Athletes and Students.
        </p>
        <p className="about-text-p2">
          {" "}
          Secondarily, as artists our mission is to create/produce/sponsor art -
          film, theatre and books that celebrate American stories of all
          heritages.
        </p>
        <img
          className="about-us-chad"
          src="my-app\src\images\AboutUs\Chad.jpg"
          alt="Chad"
        />
        <button>Learn More</button>
      </div>
    </section>
  );
};
export default AboutUs;
