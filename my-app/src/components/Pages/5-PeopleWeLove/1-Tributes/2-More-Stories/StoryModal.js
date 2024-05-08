import React from "react";
import "./StoryModal.css";

const StoryModal = ({ story, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={story.image} alt={story.name} className="modal-image" />
        <h2 className="modal-title">{story.name}</h2>
        <p className="modal-dates">
          {story.birthDate} - {story.deathDate} <br />
          {story.age} years old
        </p>
        <p className="modal-text">{story.story}</p>
      </div>
    </div>
  );
};

export default StoryModal;
