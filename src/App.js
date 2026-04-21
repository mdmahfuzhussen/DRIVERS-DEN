
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import ServiceArea from './components/ServiceArea';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Safety from './components/Safety';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Homepage />
        <About />
        <Services />
        <Pricing />
        <Booking />
        <ServiceArea />
        <Reviews />
        <FAQ />
        <Contact />
        <Safety />
      </main>
      <Footer />
    </div>
  );
}

export default App;
