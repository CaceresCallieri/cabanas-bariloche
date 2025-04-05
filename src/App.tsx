import "./App.css";
import Carousel from "./components/Carousel";

const cottageImagesPaths = [
  "/cabañas/cabaña-ana/1.Dormitorio Principal.webp",
  "/cabañas/cabaña-ana/2.Dormitorio Principal 2.webp",
  "/cabañas/cabaña-ana/3.Dormitorio Secudario.webp",
  "/cabañas/cabaña-ana/4.Dormitorio Secudario 2.webp",
  "/cabañas/cabaña-ana/5.Dormitorio Secundario 3.webp",
  "/cabañas/cabaña-ana/6.Sala de Estar.webp",
  "/cabañas/cabaña-ana/7.Sala de Estar 2.webp",
  "/cabañas/cabaña-ana/8.Cocina.webp",
  "/cabañas/cabaña-ana/9.Baño.webp",
  "/cabañas/cabaña-ana/10.Baño 2.webp",
  "/cabañas/cabaña-ana/11.Exterior.webp",
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
