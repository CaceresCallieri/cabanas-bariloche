import "./CurtainEffect.css";
import { motion } from "motion/react";

interface CurtainEffectProps {
  isCurtainAnimating: boolean;
  CURTAIN_ANIMATION_DURATION: number;
}

const CurtainEffect: React.FC<CurtainEffectProps> = ({
  isCurtainAnimating,
  CURTAIN_ANIMATION_DURATION,
}) => (
  <motion.div
    className="curtain"
    initial={{ height: "0%" }}
    animate={isCurtainAnimating ? { height: "100%" } : { height: "0%" }}
    transition={{
      duration: CURTAIN_ANIMATION_DURATION / 1000,
      ease: [0.25, 0.1, 0.25, 1],
    }}
  ></motion.div>
);

export default CurtainEffect;
