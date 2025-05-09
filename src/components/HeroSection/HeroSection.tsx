import "./HeroSection.css";
import { motion } from "motion/react";

const HeroSection = () => {
  const text = "Tu lugar en la Patagonia...";

  return (
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
  );
};

export default HeroSection;
