import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CURTAIN_ANIMATION_DURATION = 750;

export const useCottageNavigation = () => {
	const navigate = useNavigate();
	const [isCurtainAnimating, setIsCurtainAnimating] = useState(false);

	const navigateWithAnimation = (cottageCode: string) => {
		setIsCurtainAnimating(true);
		navigate(`/cottage/${cottageCode}`, { replace: false });

		setTimeout(() => {
			setIsCurtainAnimating(false);
		}, CURTAIN_ANIMATION_DURATION);
	};

	return { navigateWithAnimation, isCurtainAnimating };
};