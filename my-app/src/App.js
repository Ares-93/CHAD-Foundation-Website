import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomeScreen from "./components/MainPage/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/About Us/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/ about" component={AboutUs} />
        <Route path="/" exact component={HomeScreen} />
      </div>
    </Router>
  );
}

export default App;
