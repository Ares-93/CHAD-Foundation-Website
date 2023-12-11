import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomeScreen from "./components/MainPage/HomeScreen/HomeScreen";
import AboutUs from "./components/MainPage/AboutUs/AboutUs"

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeScreen />
      <AboutUs />
    </div>
  );
}

export default App;
