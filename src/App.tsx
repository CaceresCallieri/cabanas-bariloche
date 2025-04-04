import "./App.css";
import Carousel from "./components/Carousel";

const cottageImagesPaths = [
  "/cabañas/cabaña-ana/Baño 2.webp",
  "/cabañas/cabaña-ana/Baño.webp",
  "/cabañas/cabaña-ana/Cocina.webp",
  "/cabañas/cabaña-ana/Dormitorio Principal 2.webp",
  "/cabañas/cabaña-ana/Dormitorio Principal.webp",
  "/cabañas/cabaña-ana/Dormitorio Secudario 2.webp",
  "/cabañas/cabaña-ana/Dormitorio Secudario.webp",
  "/cabañas/cabaña-ana/Dormitorio Secundario 3.webp",
  "/cabañas/cabaña-ana/Exterior.webp",
  "/cabañas/cabaña-ana/Sala de Estar 2.webp",
  "/cabañas/cabaña-ana/Sala de Estar.webp",
];

function App() {
  return (
    <main>
      <h3>¡Bienvenido!</h3>
      <h1>CABAÑAS BARILOCHE</h1>
      <h2>Tu lugar en la Patagonia</h2>

      <Carousel images={cottageImagesPaths} />
    </main>
  );
}

export default App;
