import React from "react";
import HomeScreen from "../1-HomeScreen/HomeScreen";
import StoryMission from "../2-StoryMission/StoryMission";
import WhatYouShouldKnow from "../3-WhatYouShouldKnow/WhatYouShouldKnow";
import HowWeHelp from "../4-HowWeHelp/HowWeHelp";
import SurvivorsStories from "../5-SurvivorsStories/SurvivorsStories";
import ListenExperts from "../6-ListenExperts/ListenExperts";
import Support from "../7-Support/Support";

function HomePage() {
  return (
    <div>
      <HomeScreen />
      <StoryMission />
      <WhatYouShouldKnow />
      <HowWeHelp />
      <SurvivorsStories />
      <ListenExperts />
      <Support />
    </div>
  );
}

export default HomePage;
