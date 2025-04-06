import "./App.css";
import Carousel from "./components/Carousel";

const cottageImagesPaths = {
  imagesPaths: [
    "/cabañas/cabaña-ana/images/1.Dormitorio Principal.webp",
    "/cabañas/cabaña-ana/images/2.Dormitorio Principal 2.webp",
    "/cabañas/cabaña-ana/images/3.Dormitorio Secudario.webp",
    "/cabañas/cabaña-ana/images/4.Dormitorio Secudario 2.webp",
    "/cabañas/cabaña-ana/images/5.Dormitorio Secundario 3.webp",
    "/cabañas/cabaña-ana/images/6.Sala de Estar.webp",
    "/cabañas/cabaña-ana/images/7.Sala de Estar 2.webp",
    "/cabañas/cabaña-ana/images/8.Cocina.webp",
    "/cabañas/cabaña-ana/images/9.Baño.webp",
    "/cabañas/cabaña-ana/images/10.Baño 2.webp",
    "/cabañas/cabaña-ana/images/11.Exterior.webp",
  ],
  thumbnailsPaths: [
    "/cabañas/cabaña-ana/thumbnails/1.Dormitorio Principal.webp",
    "/cabañas/cabaña-ana/thumbnails/2.Dormitorio Principal 2.webp",
    "/cabañas/cabaña-ana/thumbnails/3.Dormitorio Secudario.webp",
    "/cabañas/cabaña-ana/thumbnails/4.Dormitorio Secudario 2.webp",
    "/cabañas/cabaña-ana/thumbnails/5.Dormitorio Secundario 3.webp",
    "/cabañas/cabaña-ana/thumbnails/6.Sala de Estar.webp",
    "/cabañas/cabaña-ana/thumbnails/7.Sala de Estar 2.webp",
    "/cabañas/cabaña-ana/thumbnails/8.Cocina.webp",
    "/cabañas/cabaña-ana/thumbnails/9.Baño.webp",
    "/cabañas/cabaña-ana/thumbnails/10.Baño 2.webp",
    "/cabañas/cabaña-ana/thumbnails/11.Exterior.webp",
  ],
};

function App() {
  return (
    <main>
      <h3>¡Bienvenido!</h3>
      <h1>CABAÑAS BARILOCHE</h1>
      <h2>Tu lugar en la Patagonia</h2>

      <Carousel cottageImagesPaths={cottageImagesPaths} />
    </main>
  );
}

export default App;
