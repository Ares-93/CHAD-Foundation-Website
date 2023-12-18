import React from "react";
import "./Testimonials.css";
import AboutUsNavigation from "../AboutUsNavigation";


const Testimonials = () => {
  return (
    <section className="Testimonials">
      <AboutUsNavigation currentPage="testimonials" />
      <h3>Testimonials</h3>
    </section>
  );
};
export default Testimonials;
