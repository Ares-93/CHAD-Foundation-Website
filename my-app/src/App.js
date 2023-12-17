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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
