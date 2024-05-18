import React, { useState } from "react";
import "./MSS.css";
import survivorStories from "./SurvivorStoriesData";
import SurvivorStoryModal from "./Survivor-Stories-Modal";

const SurvivorStoriesGrid = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  return (
    <section className="Survivor_stories_grid">
      <div className="main container">
        <h2 className="survivor-stories-header">Read More Stories</h2>
        <div className="survivor-stories-grid-container">
          {survivorStories.map((story) => (
            <div
              key={story.id}
              className="story-card"
              onClick={() => handleStoryClick(story)}
            >
              <img src={story.image} alt={story.name} className="story-image" />
            </div>
          ))}
        </div>
        {selectedStory && (
          <SurvivorStoryModal
            story={selectedStory}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
};

export default SurvivorStoriesGrid;
