import React from "react";

import Arrow from "./Arrow";

interface PreviousSlideButtonProps {
	scrollPrev: () => void;
}

const PreviousSlideButton: React.FC<PreviousSlideButtonProps> = (props) => {
	const { scrollPrev } = props;

	return (
		<button
			className="carousel-navigation-button carousel_prev_button"
			onClick={scrollPrev}
		>
			<Arrow direction="left" />
		</button>
	);
};

export default PreviousSlideButton;
