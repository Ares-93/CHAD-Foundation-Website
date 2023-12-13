import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Pages/1-Home-Page/0-Home-Page-Main/HomePage";
import AboutUs from "./components/Pages/2-AboutUs-Page/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/who-we-are" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
