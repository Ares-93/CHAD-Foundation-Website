import React, { useState } from "react";
import "./StoriesOfHeart.css";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import PhotoOne from "../../../../images/GiftOfArt-Images/stories-image.jpg";

const StoriesOfHeartCard = ({
  personsName,
  personsSchool,
  initialStoryText,
  expandedStoryText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="storiesOfHeart-card">
      <img src={PhotoOne} alt={"story"} className="storiesOfHeart-image" />
      <div className="storiesOfHeart-content">
        <h4 className="storiesOfHeart-name">{personsName}</h4>
        <p className="storiesOfHeart-school">{personsSchool}</p>
        <p className="storiesOfHeart-text">
          {initialStoryText}
          {!isExpanded && (
            <span
              className="storiesOfHeart-readMore-button"
              onClick={toggleExpansion}
            >
              {" Read more"}
            </span>
          )}
          {isExpanded && (
            <span>
              {expandedStoryText}
              <span
                className="storiesOfHeart-readMore-button"
                onClick={toggleExpansion}
              >
                {" Read less"}
              </span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

const StoriesOfHeart = () => {
  return (
    <section className="StoriesOfHeart-Two">
      <GiftOfArtNavigation currentPage="heart-stories" />
      <div className="main-container">
        <p className="storiesOfHeart-p">
          Chad’s friends would ask, “Why is he talking to that ‘stranger’ for
          hours?” Chad had unquenchable curiosity. Whether you were 4 or 94, he
          wanted to know everything about you—who you were, where you came from,
          what you’re doing, and where you’re going. He truly cared about your
          journey. So, STORIES OF THE HEART is just a continuation of Chad’s
          legacy to know more about “you” and your unique Story of the Heart. We
          hope you will enjoy the journey of those you meet!
        </p>
        <h2 className="storiesOfHeart-header">Stories of the Heart</h2>
        <div className="storiesOfHeart-container">
          <StoriesOfHeartCard
            personsName="Person 1"
            personsSchool="School"
            initialStoryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada arcu nec dui gravida, a aliquet libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras tincidunt, velit ut laoreet sodales, nunc erat pellentesque urna, nec dignissim elit odio ac quam."
            expandedStoryText=" Curabitur sollicitudin, elit vitae porttitor tristique, metus nisl vehicula purus, non tincidunt mauris arcu id nunc. Aenean interdum, risus at suscipit posuere, metus purus ullamcorper sapien, id convallis lorem ex ac odio. Morbi tempor viverra malesuada. Vestibulum ultricies nec nisi ut sollicitudin."
          />
          <StoriesOfHeartCard
            personsName="Person 2"
            personsSchool="School"
            initialStoryText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
            expandedStoryText=" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
          />
          <StoriesOfHeartCard
            personsName="Person 3"
            personsSchool="School"
            initialStoryText="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
            expandedStoryText=" Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo."
          />
          <StoriesOfHeartCard
            personsName="Person 4"
            personsSchool="School"
            initialStoryText="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
            expandedStoryText=" That is bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."
          />
        </div>
      </div>
    </section>
  );
};

export default StoriesOfHeart;
