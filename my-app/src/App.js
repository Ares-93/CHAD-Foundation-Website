import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
// HOME PAGE Imports
import HomePage from "./components/Pages/1-Home-Page/0-Home-Page-Main/HomePage";
// ABOUT US PAGE Imports
import WhoWeAre from "./components/Pages/2-AboutUs-Page/1-WhoWeAre/0-WhoWeAre-Main/WhoWeAre";
import WhatWeveDone from "./components/Pages/2-AboutUs-Page/2-WhatWeveDone/WhatWeveDone";
import Testimonials from "./components/Pages/2-AboutUs-Page/3-Testimonials/Testimonials";
import Board from "./components/Pages/2-AboutUs-Page/4-Board/Board";
// GIFT OF ART PAGE Imports
import Scholarship from "./components/Pages/4-GiftOfArt-Page/1-Scholarship/Scholarship";
import Plays from "./components/Pages/4-GiftOfArt-Page/2-Plays/Plays";
import Films from "./components/Pages/4-GiftOfArt-Page/3-Films/Films";
import Books from "./components/Pages/4-GiftOfArt-Page/4-Books/Books";
import UpcomingEvents from "./components/Pages/4-GiftOfArt-Page/5-UpcomingEvents/UpcomingEvents";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<HomePage />} />
          {/* ABOUT US PAGE */}
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/what-weve-done" element={<WhatWeveDone />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/about/board" element={<Board />} />
          {/* GIFT OF ART PAGE */}
          <Route path="/gift-of-art/scholarships" element={<Scholarship />} />
          <Route path="/gift-of-art/plays" element={<Plays />} />
          <Route path="/gift-of-art/films" element={<Films />} />
          <Route path="/gift-of-art/books" element={<Books />} />
          <Route
            path="/gift-of-art/upcoming-events"
            element={<UpcomingEvents />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
