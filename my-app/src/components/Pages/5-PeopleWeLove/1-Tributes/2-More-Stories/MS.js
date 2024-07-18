import React, { useState } from "react";
import "./MS.css";
import stories from "./storiesData";
import StoryModal from "./StoryModal";

const StoriesGrid = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  return (
    <section className="StoriesGrid">
      <div className="stories_main-container">
        <h2 className="stories-header">Read More Stories</h2>
        <div className="stories-grid-container">
          {stories.map((story) => (
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

export default StoriesGrid;
