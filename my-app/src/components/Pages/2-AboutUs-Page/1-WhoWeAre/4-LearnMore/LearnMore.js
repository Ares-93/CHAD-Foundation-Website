import React from "react";
import "./LearnMore.css";

const LearnMore = () => {
  return (
    <section className="LearnMore">
      <div className="main-container">
        <h2 className="LearnMore-header">
          Learn More About Chad’s Gift of Heart and Art
        </h2>
        <div className="LearnMore-container">
          <iframe
            className="LearnMore-video"
            width="736"
            height="386"
            src="https://www.youtube.com/embed/ldwHd9MyKQc?si=y0ODJxjZ3qPQOBH9"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default LearnMore;
