import React from "react";
import OurStory from "../1-OurStory/OurStory";
import OurMission from "../2-OurMission/OurMission";
import Message from "../3-Message/Message";
import LearnMore from "../4-LearnMore/LearnMore";
import WishList from "../4b-WishList/Wishlist";
import Gallery from "../5-Gallery/Gallery";
import Testimonials from "../6-Testimonials/Testimonials";
import AboutUsNavigation from "../../AboutUsNavigation";

const WhoWeAre = () => {
  return (
    <section className="WhoWeAre">
      <AboutUsNavigation currentPage="who-we-are" />
      <OurStory />
      <OurMission />
      <Message />
      <LearnMore />
      <WishList />
      <Gallery />
      <Testimonials />
    </section>
  );
};
export default WhoWeAre;
