import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { preloadCottageImages, PreloadResult } from "../utils/preloadImages";
import getCottageImages from "../utils/getCottageImages";

// Animation timing constants
export const CURTAIN_ANIMATION_DURATION = 750;
const IMAGE_PRELOAD_TIMEOUT = 2000;
const MINIMUM_CLOSED_DURATION = 100;

// Phase-based state for curtain animation
export type CurtainPhase = "idle" | "closing" | "closed" | "opening";

// Pre-load cottage images lookup at module level
const COTTAGE_IMAGES = getCottageImages();

/**
 * Manages cottage navigation with coordinated curtain animation and image preloading.
 *
 * State Machine Flow:
 * 1. IDLE → CLOSING: User clicks cottage, preload starts, curtain begins closing
 * 2. CLOSING → CLOSED: Curtain fully closed, URL navigation happens
 * 3. CLOSED → OPENING: Images ready (or timeout), curtain begins opening
 * 4. OPENING → IDLE: Curtain fully open, ready for next navigation
 *
 * Key Coordination:
 * - Image preloading runs in parallel with curtain closing
 * - URL navigation happens when curtain is fully closed (old images still visible)
 * - Curtain opening is delayed until images are ready (or 2s timeout)
 */
export const useCottageNavigation = () => {
	const navigate = useNavigate();
	const [curtainPhase, setCurtainPhase] = useState<CurtainPhase>("idle");

	// Refs to track pending operations
	const pendingNavigationRef = useRef<string | null>(null);
	const preloadPromiseRef = useRef<Promise<PreloadResult> | null>(null);
	const curtainClosedTimeRef = useRef<number>(0);

	/**
	 * Initiates cottage navigation with curtain animation.
	 * 1. Validates cottage code exists
	 * 2. Starts preloading target cottage images immediately
	 * 3. Begins curtain closing animation
	 * Navigation happens after curtain fully closes (via onCurtainCloseComplete)
	 */
	const navigateWithAnimation = useCallback(
		(cottageCode: string) => {
			// Prevent multiple simultaneous navigations
			if (curtainPhase !== "idle") return;

			// Validate cottage code exists
			const targetImages =
				COTTAGE_IMAGES[cottageCode as keyof typeof COTTAGE_IMAGES];

			if (!targetImages) {
				console.warn(`Invalid cottage code: ${cottageCode}`);
				return;
			}

			// Store pending navigation target
			pendingNavigationRef.current = cottageCode;

			// Start preloading images immediately (runs in parallel with curtain close)
			preloadPromiseRef.current = preloadCottageImages(targetImages, {
				timeout: IMAGE_PRELOAD_TIMEOUT,
				prioritizeFirst: 2,
			});

			// Start curtain closing animation
			setCurtainPhase("closing");
		},
		[curtainPhase],
	);

	/**
	 * Called when curtain close animation completes.
	 * Performs navigation and waits for images before opening curtain.
	 * Includes error handling to prevent curtain from getting stuck.
	 */
	const onCurtainCloseComplete = useCallback(async () => {
		try {
			curtainClosedTimeRef.current = Date.now();

			// Navigate to new URL (updates React Router and triggers re-render)
			if (pendingNavigationRef.current) {
				navigate(`/cottage/${pendingNavigationRef.current}`, { replace: false });
			}

			// Update phase to closed
			setCurtainPhase("closed");

			// Wait for images to be ready (or timeout)
			if (preloadPromiseRef.current) {
				await preloadPromiseRef.current;
			}

			// Ensure minimum closed time for visual smoothness
			const elapsedClosed = Date.now() - curtainClosedTimeRef.current;
			if (elapsedClosed < MINIMUM_CLOSED_DURATION) {
				await new Promise((resolve) =>
					setTimeout(resolve, MINIMUM_CLOSED_DURATION - elapsedClosed),
				);
			}

			// Start opening curtain
			setCurtainPhase("opening");
		} catch (error) {
			console.error("Navigation error:", error);
			// Recovery: open curtain even on error to prevent stuck state
			setCurtainPhase("opening");
		} finally {
			// Always cleanup refs
			pendingNavigationRef.current = null;
			preloadPromiseRef.current = null;
		}
	}, [navigate]);

	/**
	 * Called when curtain open animation completes.
	 * Resets state to idle, ready for next navigation.
	 */
	const onCurtainOpenComplete = useCallback(() => {
		setCurtainPhase("idle");
	}, []);

	return {
		navigateWithAnimation,
		curtainPhase,
		onCurtainCloseComplete,
		onCurtainOpenComplete,
		// Legacy compatibility - true when curtain is not idle
		isCurtainAnimating: curtainPhase !== "idle",
		CURTAIN_ANIMATION_DURATION,
	};
};
