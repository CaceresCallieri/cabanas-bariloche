import "./App.css";

import { useState } from "react";
import getCottageImages from "./utils/getCottageImages";

import HeroSection from "./components/HeroSection/HeroSection";
import CottageSelector from "./components/CottageSelector/CottageSelector";
import CurtainEffect from "./components/CurtainEffect/CurtainEffect";
import Carousel from "./components/Carousel/Carousel";
import CottageDescription from "./components/CottageDescription/CottageDescription";
import Location from "./components/Location/Location";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

import COTTAGES from "./data/cottages";
import { COTTAGE } from "./types";

const COTTAGE_IMAGES = getCottageImages();
const CURTAIN_ANIMATION_DURATION = 750; // Duration in milliseconds

function App() {
  const [selectedCottage, setSelectedCottage] = useState<COTTAGE>(COTTAGES[0]);
  const [isCurtainAnimating, setIsCurtainAnimating] = useState(false);

  const cottageImagesPaths =
    COTTAGE_IMAGES[selectedCottage.code as keyof typeof COTTAGE_IMAGES];

  const handleCottageChange = (newCottage: COTTAGE) => {
    setIsCurtainAnimating(true);
    setSelectedCottage(newCottage);
    setTimeout(() => {
      setIsCurtainAnimating(false);
    }, CURTAIN_ANIMATION_DURATION);
  };

  return (
    <>
      <HeroSection />

      <main>
        <h3 className="with-decorative-line">Elegí tu cabaña:</h3>
        <CottageSelector
          selectedCottage={selectedCottage}
          setSelectedCottage={handleCottageChange}
          COTTAGES={COTTAGES}
        />

        <CurtainEffect
          isCurtainAnimating={isCurtainAnimating}
          CURTAIN_ANIMATION_DURATION={CURTAIN_ANIMATION_DURATION}
        />

        <div className="carousel-and-description-container">
          <Carousel cottageImagesPaths={cottageImagesPaths} />
          <CottageDescription selectedCottage={selectedCottage} />
        </div>

        <Location selectedCottage={selectedCottage} />

        <ContactSection selectedCottageName={selectedCottage.name} />
      </main>

      <Footer />
    </>
  );
}

export default App;
