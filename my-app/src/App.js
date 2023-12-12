import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomeScreen from "./components/MainPage/HomeScreen/HomeScreen";
import AboutUs from "./components/MainPage/AboutUs/AboutUs"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeScreen />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
