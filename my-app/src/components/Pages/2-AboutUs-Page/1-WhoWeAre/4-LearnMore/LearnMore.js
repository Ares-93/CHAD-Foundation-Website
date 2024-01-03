import React from "react";
import "./LearnMore.css";

const LearnMore = () => {
  return (
    <section className="LearnMore">
      <div className="main-container">
        <h2 className="LearnMore-header">
          Learn More About Chad, His Family, & Friends
        </h2>
        <div className="LearnMore-container">
          <iframe
            className="LearnMore-video"
            width="736"
            height="386"
            src="https://www.youtube.com/embed/rqSfMcdCaBE?si=A0-1rAS2-Y18Sip_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default LearnMore;
