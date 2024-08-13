import React, { useState } from "react";
import "./StoryModal.css";

const StoryModal = ({ story, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Ensure story.initialText and story.hiddenText are valid strings
  const initialText = story.initialText || "";
  const hiddenText = story.hiddenText || "";

  // Determine the truncation point for Read More
  const truncateIndex = Math.floor(initialText.length / 2);
  const truncatedText = initialText.substring(0, truncateIndex);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={story.image} alt={story.name} className="modal-image" />
        <h2 className="modal-title">{story.name}</h2>
        <p className="modal-dates">
          Born: {story.birthDate} <br />
          Died: {story.deathDate} <br />
          Age: {story.age}
        </p>
        <div className="modal-text">
          {isExpanded ? (
            <>
              {initialText} {hiddenText}
              <button className="read-more-btn" onClick={handleReadMore}>
                Show Less
              </button>
            </>
          ) : (
            <>
              {truncatedText}
              <span className="read-more-link" onClick={handleReadMore}>
                ... Read More
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
