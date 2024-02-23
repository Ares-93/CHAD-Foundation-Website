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
// EDU OF HEART PAGE Imports
import HeartFactPage from "./components/Pages/3-Education of the Heart/1-Heart Facts/0-HeartFacts-Main/HeartFactPage";
import ScreenHome from "./components/Pages/3-Education of the Heart/2-Screenings/0-Screening-Home/ScreenHome";
import Emergency from "./components/Pages/3-Education of the Heart/3-Emergencies/0-Emergency-Main/Emergency";
import TipsHome from "./components/Pages/3-Education of the Heart/4-Expert Health Tips/0-Tips-Main/TipsHome";
// GIFT OF ART PAGE Imports
import Scholarship from "./components/Pages/4-GiftOfArt-Page/1-Scholarship/Scholarship";
import Plays from "./components/Pages/4-GiftOfArt-Page/2-Plays/Plays";
import Films from "./components/Pages/4-GiftOfArt-Page/3-Films/Films";
import Books from "./components/Pages/4-GiftOfArt-Page/4-Books/Books";
import UpcomingEvents from "./components/Pages/4-GiftOfArt-Page/5-UpcomingEvents/UpcomingEvents";
import Support from "./components/Pages/1-Home-Page/7-Support/Support";
//PEOPLE WE LOVE Imports
import Tributes from "./components/Pages/5-PeopleWeLove/1-Tributes/Tributes";
import Survivors from "./components/Pages/5-PeopleWeLove/2-Survivors/Survivor";

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
          {/*EDUCATION OF THE HEART*/}
          <Route
            path="/education-of-the-heart/heart-fact-page"
            element={<HeartFactPage />}
          />
          <Route
            path="/education-of-the-heart/screening-home"
            element={<ScreenHome />}
          />
          <Route
            path="/education-of-the-heart/emergency-main"
            element={<Emergency />}
          />

          <Route
            path="/education-of-the-heart/tips-main"
            element={<TipsHome />}
          />
          {/* GIFT OF ART PAGE */}
          <Route path="/gift-of-art/scholarship" element={<Scholarship />} />
          <Route path="/gift-of-art/plays" element={<Plays />} />
          <Route path="/gift-of-art/films" element={<Films />} />
          <Route path="/gift-of-art/books" element={<Books />} />
          <Route
            path="/gift-of-art/upcoming-events"
            element={<UpcomingEvents />}
          />
          <Route path="/support" element={<Support />} />

          {/*People We Love */}
          <Route path="/people-we-love/tributes" element={<Tributes />} />
          <Route path="/people-we-love/survivors" element={<Survivors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
