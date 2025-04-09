import "./App.css";

import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

import getCottageImages from "./utils/getCottageImages";

import Carousel from "./components/Carousel";

const cottageImages = getCottageImages();
const COTTAGES = ["ruben", "lorenzo", "trinidad", "michelle", "anahi"];

function App() {
  const [selectedCottage, setSelectedCottage] = useState(COTTAGES[0]);

  return (
    <main>
      <h3>¡Bienvenido!</h3>
      <h1>CABAÑAS BARILOCHE</h1>
      <h2>Tu lugar en la Patagonia</h2>

      <h3>Elige tu cabaña</h3>
      <div className="card flex justify-content-center">
        <Dropdown
          value={selectedCottage}
          onChange={(e) => setSelectedCottage(e.value)}
          options={COTTAGES}
          optionLabel="name"
          placeholder="Seleccione una cabaña"
        />
      </div>

      <Carousel cottageImagesPaths={cottageImages[selectedCottage]} />
    </main>
  );
}

export default App;
