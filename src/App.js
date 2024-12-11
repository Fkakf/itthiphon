import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar';
import Carousel  from './pages/Carousel';
import IntroSection from "./pages/IntroSection";
import RoomCard from "./pages/RoomCard";
import Reviews from "./pages/Reviews";
import Location from "./pages/Location";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <IntroSection />
      <RoomCard />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
