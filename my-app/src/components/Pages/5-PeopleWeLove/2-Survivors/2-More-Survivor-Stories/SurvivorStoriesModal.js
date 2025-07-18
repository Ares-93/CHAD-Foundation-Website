import React, { useState } from "react";
import "./SurvivorStoriesModal.css";

const SurvivorStoryModal = ({ story, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = story.story || "";
  const truncateIndex = Math.floor(fullText.length / 2);
  const truncatedText = fullText.substring(0, truncateIndex);

  return (
    <div className="ss-modal-overlay" onClick={onClose}>
      <div className="ss-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="ss-close-btn" onClick={onClose}>&times;</button>

        <div className="ss-modal-header-row">
          <img src={story.image} alt={story.name} className="ss-modal-image" />
          <div className="ss-modal-info">
            <h2 className="ss-modal-title">{story.name}</h2>
            <p className="ss-modal-dates">
              {story.birthDate && <>Born: {story.birthDate}<br /></>}
              {story.age && <>Age: {story.age}</>}
            </p>
            {story.job && <h3 className="ss-modal-job">{story.job}</h3>}
          </div>
        </div>

        <div className="ss-modal-text">
          {isExpanded ? (
            <>
              {fullText}
              <button className="ss-read-more-btn" onClick={handleReadMore}>
                Show Less
              </button>
            </>
          ) : (
            <>
              {truncatedText}
              <span className="ss-read-more-link" onClick={handleReadMore}>
                ... Read More
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurvivorStoryModal;
