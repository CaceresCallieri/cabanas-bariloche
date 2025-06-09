import "./SnowingEffect.css";
import { useRef } from "react";
import { motion } from "motion/react";

const SNOWING_DURATION = 7; // Duration in seconds for snowflakes to fall
const SNOWFLAKE_COUNT = 75;

function getRandomNumberBetween(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

const SnowingEffect = () => {
	// Use a ref to store the snowflakes array so it persists across re-renders
	const snowflakesRef = useRef(
		Array.from({ length: SNOWFLAKE_COUNT }, (_, index) => ({
			id: index,
			x: getRandomNumberBetween(0, 100), // Random horizontal position
			animationDelay: getRandomNumberBetween(0, SNOWING_DURATION), // Random delay for each snowflake
			size: getRandomNumberBetween(5, 12),
			opacity: getRandomNumberBetween(0.7, 1),
		})),
	);

	const snowflakes = snowflakesRef.current;

	return (
		<div className="snowflakes">
			{snowflakes.map((flake) => (
				<motion.div
					key={flake.id}
					className="snowflake"
					initial={{ y: -20, left: `${flake.x}%` }}
					animate={{
						y: ["-20vh", "100vh"],
						left: `${flake.x + getRandomNumberBetween(10, 15)}%`,
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
						filter: `blur(${flake.size / 20}px)`,
					}}
				/>
			))}
		</div>
	);
};

export default SnowingEffect;
