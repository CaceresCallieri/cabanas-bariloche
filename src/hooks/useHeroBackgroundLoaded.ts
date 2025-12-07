import { useState, useEffect } from "react";

const HERO_IMAGE_PATH = "/bariloche.webp";
const LOAD_TIMEOUT = 3000;

/**
 * Preloads the hero background image and tracks loading state.
 * Returns true when image is ready or timeout has elapsed.
 * This enables coordinated animation starts after image is visible.
 */
export const useHeroBackgroundLoaded = (): boolean => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		let timeoutId: number;
		let isMounted = true;

		const img = new Image();

		img.onload = () => {
			if (isMounted) {
				setIsLoaded(true);
				clearTimeout(timeoutId);
			}
		};

		img.onerror = () => {
			if (isMounted) {
				console.warn(`Failed to load hero background image: ${HERO_IMAGE_PATH}`);
				setIsLoaded(true);
				clearTimeout(timeoutId);
			}
		};

		timeoutId = window.setTimeout(() => {
			if (isMounted) setIsLoaded(true);
		}, LOAD_TIMEOUT);

		img.src = HERO_IMAGE_PATH;

		// Check if image is already loaded from cache
		if (img.complete && img.naturalHeight !== 0) {
			setIsLoaded(true);
			clearTimeout(timeoutId);
		}

		return () => {
			isMounted = false;
			clearTimeout(timeoutId);
		};
	}, []);

	return isLoaded;
};
