import React, { useState } from "react";
import "./StoryModal.css";

const StoryModal = ({ story, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const initialText = story.initialText || "";
  const hiddenText = story.hiddenText || "";

  const truncateIndex = Math.floor(initialText.length / 2);
  const truncatedText = initialText.substring(0, truncateIndex);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="modal-header-row">
          <img src={story.image} alt={story.name} className="modal-image" />
          <div className="modal-info">
            <h2 className="modal-title">{story.name}</h2>
            <p className="modal-dates">
              {story.birthDate && <>Born: {story.birthDate}<br /></>}
              {story.deathDate && <>Died: {story.deathDate}<br /></>}
              {story.age && <>Age: {story.age}</>}
            </p>
          </div>
        </div>

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
