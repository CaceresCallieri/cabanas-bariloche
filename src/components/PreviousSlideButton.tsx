import React from "react";

import Arrow from "./Arrow";

interface PreviousSlideButtonProps {
  scrollPrev: () => void;
}

const PreviousSlideButton: React.FC<PreviousSlideButtonProps> = (props) => {
  const { scrollPrev } = props;

  return (
    <button
      className="embla-navigation-button embla_prev_button"
      onClick={scrollPrev}
    >
      <Arrow direction="left" />
    </button>
  );
};

export default PreviousSlideButton;
