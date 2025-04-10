import React from "react";

import Arrow from "./Arrow";

interface NextSlideButtonProps {
  scrollNext: () => void;
}

const NextSlideButton: React.FC<NextSlideButtonProps> = (props) => {
  const { scrollNext } = props;

  return (
    <button
      className="carousel-navigation-button carousel_next_button"
      onClick={scrollNext}
    >
      <Arrow direction="right" />
    </button>
  );
};

export default NextSlideButton;
