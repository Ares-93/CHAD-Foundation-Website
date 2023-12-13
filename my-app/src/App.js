import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomeScreen from "./components/MainPage/1-HomeScreen/HomeScreen";
import AboutUs from "./components/MainPage/2-AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
