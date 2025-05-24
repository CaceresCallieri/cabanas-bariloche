import "./HeroSection.css";
import { useRef } from "react";
import { motion } from "motion/react";

const SNOWING_DURATION = 7; // Duration in seconds for snowflakes to fall

const HeroSection = () => {
  const subHeaderText = "Tu lugar en la Patagonia...";

  // Easing function for delay
  const easeInQuad = (t: number) => t * t;

  // Use a ref to store the snowflakes array so it persists across re-renders
  const snowflakesRef = useRef(
    Array.from({ length: 75 }, (_, index) => ({
      id: index,
      x: Math.random() * 100, // Random horizontal position
      animationDelay: Math.random() * SNOWING_DURATION, // Random delay for each snowflake
      size: Math.random() * 3 + 4, // Random size for snowflake
      opacity: Math.random() * 0.5 + 0.5, // Random opacity
      distance: Math.random() * 100, // Random distance for snowflake
    })),
  );

  const snowflakes = snowflakesRef.current;

  return (
    <header>
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

      {/* Snowflakes container */}
      <div className="snowflakes">
        {snowflakes.map((flake) => (
          <motion.div
            key={flake.id}
            className="snowflake"
            initial={{ y: -20, left: `${flake.x}%` }}
            animate={{
              y: ["-20vh", "100vh"],
              left: `${flake.x + 15}%`,
              transition: {
                duration: SNOWING_DURATION,
                ease: "linear",
                delay: flake.animationDelay,
                repeat: Infinity,
              },
            }}
            style={{
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              filter: `blur(${flake.size / 5}px)`,
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default HeroSection;
