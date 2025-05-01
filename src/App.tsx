import "./App.css";

import { useState } from "react";
import { motion } from "motion/react";
import getCottageImages from "./utils/getCottageImages";

import Carousel from "./components/Carousel/Carousel";
import CottageSelector from "./components/CottageSelector/CottageSelector";
import Location from "./components/Location/Location";
import CottageDescription from "./components/CottageDescription/CottageDescription";

import COTTAGES from "./data/cottages";

const COTTAGE_IMAGES = getCottageImages();

function App() {
  const [selectedCottage, setSelectedCottage] = useState(COTTAGES[0]);

  const text = "Tu lugar en la Patagonia...";

  return (
    <>
      <header>
        <h5>¡Bienvenido!</h5>
        <h1>CABAÑAS BARILOCHE</h1>
        <h3>
          {text.split("").map((letter, index) => (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
              key={index}
            >
              {letter}
            </motion.span>
          ))}
        </h3>
      </header>

      <main>
        <h3>Elegí tu cabaña:</h3>
        <CottageSelector
          selectedCottage={selectedCottage}
          setSelectedCottage={setSelectedCottage}
          COTTAGES={COTTAGES}
        />

        <Carousel
          cottageImagesPaths={
            COTTAGE_IMAGES[selectedCottage.code as keyof typeof COTTAGE_IMAGES]
          }
        />

        <CottageDescription selectedCottage={selectedCottage} />

        <Location selectedCottage={selectedCottage} />
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Cabañas Bariloche.</p>
        <p>Desarrollado por Juan Cruz Caceres</p>
      </footer>
    </>
  );
}

export default App;
