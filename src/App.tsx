import "./App.css";

import { useState } from "react";
import getCottageImages from "./utils/getCottageImages";
import { motion } from "motion/react";

import HeroSection from "./components/HeroSection/HeroSection";
import CottageSelector from "./components/CottageSelector/CottageSelector";
import Carousel from "./components/Carousel/Carousel";
import CottageDescription from "./components/CottageDescription/CottageDescription";
import Location from "./components/Location/Location";
import ContactSection from "./components/ContactSection/ContactSection";

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

        <motion.div
          className="curtain"
          initial={{ height: "0%" }}
          animate={isCurtainAnimating ? { height: "110%" } : { height: "0%" }}
          transition={{
            duration: CURTAIN_ANIMATION_DURATION / 1000,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        ></motion.div>

        <div className="carousel-and-description-container">
          <Carousel cottageImagesPaths={cottageImagesPaths} />
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
