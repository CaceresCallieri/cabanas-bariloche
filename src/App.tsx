import "./App.css";

import { useState } from "react";

import getCottageImages from "./utils/getCottageImages";

import { Dropdown } from "primereact/dropdown";
import Carousel from "./components/Carousel";

const COTTAGE_IMAGES = getCottageImages();
const COTTAGES = [
  { name: "Cabaña Ruben", code: "ruben" },
  { name: "Cabaña Lorenzo", code: "lorenzo" },
  { name: "Cabaña Trinidad", code: "trinidad" },
  { name: "Cabaña Michelle", code: "michelle" },
  { name: "Cabaña Anahi", code: "anahi" },
];

function App() {
  const [selectedCottage, setSelectedCottage] = useState(COTTAGES[0]);

  return (
    <main>
      <h3>¡Bienvenido!</h3>
      <h1>CABAÑAS BARILOCHE</h1>
      <h2>Tu lugar en la Patagonia</h2>

      <h3>Elige tu cabaña</h3>
      <div>
        <Dropdown
          value={selectedCottage}
          onChange={(event) => setSelectedCottage(event.value)}
          options={COTTAGES}
          optionLabel="name"
          placeholder="Seleccione una cabaña"
        />
      </div>

      <Carousel
        cottageImagesPaths={
          COTTAGE_IMAGES[selectedCottage.code as keyof typeof COTTAGE_IMAGES]
        }
      />
    </main>
  );
}

export default App;
