import React from "react";
import { motion } from "motion/react";

type PropType = {
  imagePath: string;
  selected: boolean;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { imagePath, selected, onClick } = props;

  return (
    <div
      className={"carousel-thumbs__slide".concat(
        selected ? " carousel-thumbs__slide__button--selected" : "",
      )}
    >
      <motion.button
        onClick={onClick}
        type="button"
        className="carousel-thumbs__slide__button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={imagePath} alt="" />
      </motion.button>
    </div>
  );
};
