import "./CurtainEffect.css";
import { motion } from "motion/react";
import { CurtainPhase } from "../../hooks/useCottageNavigation";

interface CurtainEffectProps {
	curtainPhase: CurtainPhase;
	curtainDuration: number;
	onCloseComplete?: () => void;
	onOpenComplete?: () => void;
}

/**
 * Animated curtain overlay that covers content during cottage transitions.
 * Uses Framer Motion's onAnimationComplete for reliable timing coordination.
 */
const CurtainEffect: React.FC<CurtainEffectProps> = ({
	curtainPhase,
	curtainDuration,
	onCloseComplete,
	onOpenComplete,
}) => {
	// Map phase to target height
	const getTargetHeight = (): string => {
		switch (curtainPhase) {
			case "closing":
			case "closed":
				return "100%";
			case "opening":
			case "idle":
				return "0%";
		}
	};

	// Handle animation completion based on current phase
	const handleAnimationComplete = () => {
		if (curtainPhase === "closing") {
			onCloseComplete?.();
		} else if (curtainPhase === "opening") {
			onOpenComplete?.();
		}
	};

	return (
		<motion.div
			className="curtain"
			initial={{ height: "0%" }}
			animate={{ height: getTargetHeight() }}
			transition={{
				duration: curtainDuration / 1000,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			onAnimationComplete={handleAnimationComplete}
		/>
	);
};

export default CurtainEffect;
