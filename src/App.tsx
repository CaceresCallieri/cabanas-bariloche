import "./App.css";
import Carousel from "./components/Carousel";

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <main>
      <h3>¡Bienvenido!</h3>
      <h1>CABAÑAS BARILOCHE</h1>
      <h2>Tu lugar en la Patagonia</h2>

      <Carousel slides={SLIDES} />
    </main>
  );
}

export default App;
