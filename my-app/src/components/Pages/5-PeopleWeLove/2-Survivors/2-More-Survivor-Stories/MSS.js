import React, { useState } from "react";
import "./MSS.css";
import survivorstories from "./SurvivorStories-Data";
import StoryModal from "./StoryModal";

const Survivor_StoriesGrid = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  return (
    <section className="Survivor_StoriesGrid">
      <div className="main container">
        <h2 className="survivor-stories-header">Read More Stories</h2>
        <div className="survivor-stories-grid-container">
          {survivorstories.map((story) => (
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
          <StoryModal story={selectedStory} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
};

export default Survivor_StoriesGrid;
