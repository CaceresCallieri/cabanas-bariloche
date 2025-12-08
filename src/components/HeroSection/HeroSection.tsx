import "./HeroSection.css";
import { motion } from "motion/react";
import SnowingEffect from "../SnowingEffect/SnowingEffect";
import { useSeason } from "../../hooks/useSeason";
import { useHeroBackgroundLoaded } from "../../hooks/useHeroBackgroundLoaded";

const HeroSection = () => {
	const subHeaderText = "Tu lugar en la Patagonia...";
	const { shouldShowSnow } = useSeason();
	const isBackgroundLoaded = useHeroBackgroundLoaded();

	// Easing function for delay
	const easeInQuad = (t: number) => t * t;

	return (
		<header>
			{shouldShowSnow === true && isBackgroundLoaded && <SnowingEffect />}

			<motion.h5
				initial={{ opacity: 0 }}
				animate={isBackgroundLoaded ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.3 }}
			>
				¡Bienvenido!
			</motion.h5>
			<motion.h1
				className="with-decorative-line"
				initial={{ opacity: 0 }}
				animate={isBackgroundLoaded ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.3 }}
			>
				CABAÑAS BARILOCHE
			</motion.h1>
			<h3>
				{subHeaderText.split("").map((letter, index, array) => {
					// Base delay after h1 + eased cascade for each letter
					const baseDelay = 0.3;
					const delay = baseDelay + easeInQuad(index / array.length) * 1.75;

					return (
						<motion.span
							initial={{ opacity: 0, y: -20 }}
							animate={
								isBackgroundLoaded
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: -20 }
							}
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
