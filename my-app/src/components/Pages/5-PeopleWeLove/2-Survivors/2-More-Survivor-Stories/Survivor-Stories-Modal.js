import React, { useState } from "react";
import "./Surivor-Stories-Modal.css";

const SurvivorStoryModal = ({ story, onClose }) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreToggle = () => {
    setShowFullText(!showFullText);
  };

  const shortStory = story.story.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={story.image} alt={story.name} className="modal-image" />
        <h2 className="modal-title">{story.name}</h2>
        <p className="modal-dates">
          {story.birthDate} <br />
        </p>
        <h2 className="modal-curr-life">{story.job}</h2>
        <p className="modal-text">
          {showFullText ? story.story : shortStory}
          <button className="readMore-btn" onClick={handleReadMoreToggle}>
            {showFullText ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SurvivorStoryModal;
