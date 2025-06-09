import React from "react";
import ArrowSvg from "../assets/arrow.svg?react";

interface ArrowProps {
	direction: "left" | "right" | "up" | "down";
}

const Arrow: React.FC<ArrowProps> = ({ direction }) => {
	let transform = "";

	switch (direction) {
		case "left":
			transform = "rotate(180deg)";
			break;
		case "up":
			transform = "rotate(-90deg)";
			break;
		case "down":
			transform = "rotate(90deg)";
			break;
		case "right":
		default:
			transform = "rotate(0deg)";
			break;
	}

	return <ArrowSvg style={{ transform }} />;
};

export default Arrow;
