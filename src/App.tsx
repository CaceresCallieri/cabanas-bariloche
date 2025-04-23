import "./App.css";

import { useState } from "react";

import getCottageImages from "./utils/getCottageImages";

import Carousel from "./components/Carousel/Carousel";
import CottageSelector from "./components/CottageSelector/CottageSelector";
import Ubication from "./components/Ubication/Ubication";
import CottageDescription from "./components/CottageDescription/CottageDescription";

import COTTAGES from "./data/cottages";

const COTTAGE_IMAGES = getCottageImages();

function App() {
  const [selectedCottage, setSelectedCottage] = useState(COTTAGES[0]);

  return (
    <>
      <header>
        <h5>¡Bienvenido!</h5>
        <h1>CABAÑAS BARILOCHE</h1>
        <p>
          <strong>Tu lugar en la Patagonia...</strong>
        </p>

        <h3>Elegí tu cabaña:</h3>
        <CottageSelector
          selectedCottage={selectedCottage}
          setSelectedCottage={setSelectedCottage}
          COTTAGES={COTTAGES}
        />
      </header>

      <main>
        {/* <CottageDescription selectedCottage={selectedCottage} /> */}

        <Carousel
          cottageImagesPaths={
            COTTAGE_IMAGES[selectedCottage.code as keyof typeof COTTAGE_IMAGES]
          }
        />

        <Ubication selectedCottage={selectedCottage} />
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Cabañas Bariloche.</p>
        <p>Desarrollado por Juan Cruz Caceres</p>
      </footer>
    </>
  );
}

export default App;
