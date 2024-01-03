import React from "react";
import "./Message.css";
import AristaPhoto from "../../../../../images/AboutUs-Images/arista-photo.png";

const Message = () => {
  return (
    <section className="Message">
      <div className="main-container">
        <h2 className="message-header">Message from the Founder</h2>
        <div className="message-content">
          <div className="message-text">
            <strong>
              “I remember reading an article at that time that said “12 young
              athletes die annually from Sudden Cardiac Death.” Twelve??”
            </strong>
            <br />
            <br />
            I can hardly believe 21 years have passed since our “1st Chad
            Echocardiogram Screening for Young Athletes” which took place at
            Chad’s alma mater, North Hollywood High, CA, the first screening of
            its kind in the nation.
            <br />
            <br />
            When I first began this crusade to safeguard young hearts, it was
            like donning my pioneer bonnet and setting off into uncharted
            territory. <span>Read More</span>
          </div>
          <div className="message-photo">
            <img src={AristaPhoto} alt="Founder" className="arista-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Message;
