import "./App.css";

import { useState } from "react";

import getCottageImages from "./utils/getCottageImages";

import Carousel from "./components/Carousel";
import { COTTAGE } from "./types";
import CottageSelector from "./components/CottageSelector/CottageSelector";
import Ubication from "./components/Ubication/Ubication";
import CottageDescription from "./components/CottageDescription/CottageDescription";

const COTTAGE_IMAGES = getCottageImages();

const COTTAGES: COTTAGE[] = [
  {
    name: "Cabaña Ruben",
    code: "ruben",
    ubication: "Belgrano",
    description: "test",
  },
  {
    name: "Cabaña Lorenzo",
    code: "lorenzo",
    ubication: "Belgrano",
    description: "test",
  },
  {
    name: "Cabaña Trinidad",
    code: "trinidad",
    ubication: "Belgrano",
    description: "test",
  },
  {
    name: "Cabaña Michelle",
    code: "michelle",
    ubication: "Belgrano",
    description: "test",
  },
  {
    name: "Cabaña Anahi",
    code: "anahi",
    ubication: "Las Victorias",
    description: "test",
  },
];

function App() {
  const [selectedCottage, setSelectedCottage] = useState(COTTAGES[0]);

  return (
    <>
      <header>
        <h3>¡Bienvenido!</h3>
        <h1>CABAÑAS BARILOCHE</h1>
        <h2>Tu lugar en la Patagonia</h2>

        <h3>Elige tu cabaña</h3>
        <CottageSelector
          selectedCottage={selectedCottage}
          setSelectedCottage={setSelectedCottage}
          COTTAGES={COTTAGES}
        />
      </header>

      <main>
        <CottageDescription selectedCottage={selectedCottage} />

        <Carousel
          cottageImagesPaths={
            COTTAGE_IMAGES[selectedCottage.code as keyof typeof COTTAGE_IMAGES]
          }
        />

        <Ubication selectedCottage={selectedCottage} />
      </main>

      <footer>
        <p>© 2025 Cabañas Bariloche.</p>
        <p>Desarrollado por Juan Cruz Caceres</p>
      </footer>
    </>
  );
}

export default App;
