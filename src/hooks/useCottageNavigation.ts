import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CURTAIN_ANIMATION_DURATION = 750;

export const useCottageNavigation = () => {
	const navigate = useNavigate();
	const [isCurtainAnimating, setIsCurtainAnimating] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const navigateWithAnimation = (cottageCode: string) => {
		// Clear any existing timeout to prevent multiple simultaneous animations
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		setIsCurtainAnimating(true);
		navigate(`/cottage/${cottageCode}`, { replace: false });

		timeoutRef.current = setTimeout(() => {
			setIsCurtainAnimating(false);
			timeoutRef.current = null;
		}, CURTAIN_ANIMATION_DURATION);
	};

	// Cleanup timeout on component unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return { navigateWithAnimation, isCurtainAnimating };
};