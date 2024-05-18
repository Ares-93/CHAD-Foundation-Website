import React from "react";
import "./Surivor-Stories-Modal.css";

const SurvivorStoryModal = ({ story, onClose }) => {
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
          {story.age} years old
        </p>
        <h2 className="modal-curr-life">{story.job}</h2>
        <p className="modal-text">{story.story}</p>
      </div>
    </div>
  );
};

export default SurvivorStoryModal;
