import React, { useState } from "react";
import "./MS.css";

const StoryModal = ({ story, onClose }) => {
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
        {story.birthDate && (
          <p className="modal-dates">Born: {story.birthDate}</p>
        )}
        {story.deathDate && (
          <p className="modal-dates">Died: {story.deathDate}</p>
        )}
        {story.age !== undefined && (
          <p className="modal-age">Age: {story.age}</p>
        )}
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

export default StoryModal;
