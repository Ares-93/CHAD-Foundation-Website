import React from "react";
import HomeScreen from '../1-HomeScreen/HomeScreen';
import WhoWeAre from '../2-WhoWeAre/WhoWeAre';
import WhatYouShouldKnow from "../3-WhatYouShouldKnow/WhatYouShouldKnow";
import HowWeHelp from "../4-HowWeHelp/HowWeHelp";
import SurvivorsStories from "../5-SurvivorsStories/SurvivorsStories";
import ListenExperts from "../6-ListenExperts/ListenExperts";
import Support from "../7-Support/Support";



function HomePage() {
  return (
    <div>
      <HomeScreen />
      <WhoWeAre />
      <WhatYouShouldKnow />
      <HowWeHelp />
      <SurvivorsStories />
      <ListenExperts />
      <Support />
    </div>
  );
}

export default HomePage;
