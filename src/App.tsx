import "./App.css";

import { useState } from "react";
import getCottageImages from "./utils/getCottageImages";

import HeroSection from "./components/HeroSection/HeroSection";
import CottageSelector from "./components/CottageSelector/CottageSelector";
import Carousel from "./components/Carousel/Carousel";
import CottageDescription from "./components/CottageDescription/CottageDescription";
import Location from "./components/Location/Location";

import COTTAGES from "./data/cottages";
import ContactSection from "./components/ContactSection/ContactSection";

const COTTAGE_IMAGES = getCottageImages();

function App() {
  const [selectedCottage, setSelectedCottage] = useState(COTTAGES[0]);

  return (
    <>
      <HeroSection />

      <main>
        <h3 className="with-decorative-line">Elegí tu cabaña:</h3>
        <CottageSelector
          selectedCottage={selectedCottage}
          setSelectedCottage={setSelectedCottage}
          COTTAGES={COTTAGES}
        />

        <div className="carousel-and-description-container">
          <Carousel
            cottageImagesPaths={
              COTTAGE_IMAGES[
                selectedCottage.code as keyof typeof COTTAGE_IMAGES
              ]
            }
          />
          <CottageDescription selectedCottage={selectedCottage} />
        </div>

        <Location selectedCottage={selectedCottage} />

        <ContactSection selectedCottageName={selectedCottage.name} />
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Cabañas Bariloche.</p>
        <p>Desarrollado por Juan Cruz Caceres</p>
      </footer>
    </>
  );
}

export default App;
