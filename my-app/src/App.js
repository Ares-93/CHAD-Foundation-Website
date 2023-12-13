import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomeScreen from "./components/MainPage/1-HomeScreen/HomeScreen";
import AboutUs from "./components/MainPage/2-AboutUs/AboutUs";
import WhatYouShouldKnow from "./components/MainPage/3-WhatYouShouldKnow/WhatYouShouldKnow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeScreen />
      <AboutUs />
      <WhatYouShouldKnow />
      <Footer />
    </div>
  );
}

export default App;
