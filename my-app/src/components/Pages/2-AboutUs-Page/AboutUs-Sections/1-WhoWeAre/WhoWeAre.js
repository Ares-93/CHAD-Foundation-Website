import React from "react";
import "./WhoWeAre.css";
import OurStory from "./1-OurStory/OurStory";
import OurMission from "./2-OurMission/OurMission";
import Message from "./3-Message/Message";
import LearnMore from "./4-LearnMore/LearnMore";
import Gallery from "./5-Gallery/Gallery";
import Testimonials from "./6-Testimonials/Testimonials";

const WhoWeAre = () => {
  return (
    <section className="WhoWeAre">
      <h3>WhoWeAre</h3>
      <OurStory />
      <OurMission />
      <Message />
      <LearnMore />
      <Gallery />
      <Testimonials />
    </section>
  );
};
export default WhoWeAre;
