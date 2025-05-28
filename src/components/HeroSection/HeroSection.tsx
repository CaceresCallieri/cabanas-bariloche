import "./HeroSection.css";
import { motion } from "motion/react";
import SnowingEffect from "../SnowingEffect/SnowingEffect";

const HeroSection = () => {
  const subHeaderText = "Tu lugar en la Patagonia...";

  // Easing function for delay
  const easeInQuad = (t: number) => t * t;

  return (
    <header>
      <SnowingEffect />

      <h5>¡Bienvenido!</h5>
      <h1 className="with-decorative-line">CABAÑAS BARILOCHE</h1>
      <h3>
        {subHeaderText.split("").map((letter, index, array) => {
          // Calculate the delay using the easing function
          const delay = easeInQuad(index / array.length) * 1.75;

          return (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay }}
              key={index}
            >
              {letter}
            </motion.span>
          );
        })}
      </h3>
    </header>
  );
};

export default HeroSection;
