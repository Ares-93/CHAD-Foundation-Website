import React, { useState } from "react";
import "./MSS.css";
import survivorStories from "./SurvivorStoriesData";
import SurvivorStoryModal from "./SurvivorStoriesModal";

const SurvivorStoriesGrid = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  return (
    <section className="SurvivorStoriesGrid">
      <div className="main-container">
        <h2 className="survivor-header">Survivor Stories</h2>
        <div className="survivor-grid-container">
          {survivorStories.map((story) => (
            <div
              key={story.id}
              className="survivor-card"
              onClick={() => handleStoryClick(story)}
            >
              <img src={story.image} alt={story.name} className="survivor-image" />
            </div>
          ))}
        </div>
        {selectedStory && (
          <SurvivorStoryModal story={selectedStory} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
};

export default SurvivorStoriesGrid;
