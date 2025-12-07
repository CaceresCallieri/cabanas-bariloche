/**
 * Image preloading utility for smooth curtain transitions.
 * Uses the browser's native Image API to preload images into cache.
 */

export interface PreloadResult {
	loaded: string[];
	failed: string[];
	timedOut: boolean;
}

export interface PreloadOptions {
	timeout?: number;
	prioritizeFirst?: number;
}

const DEFAULT_TIMEOUT = 2000;
const DEFAULT_PRIORITY_COUNT = 2;

// Constants for priority loading strategy
const PRIORITY_TIMEOUT_RATIO = 0.6;
const MINIMUM_REMAINING_TIMEOUT = 500;

/**
 * Preloads a single image using the browser's Image constructor.
 * The image is loaded into browser cache without being rendered.
 */
const preloadSingleImage = (url: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(url);
		img.onerror = () => reject(url);
		img.src = url;
	});
};

/**
 * Preloads an array of image URLs with timeout support.
 * Uses Promise.allSettled to handle partial failures gracefully.
 * Results are built from settled promises to avoid race conditions.
 */
export const preloadImages = async (
	imageUrls: string[],
	options: PreloadOptions = {},
): Promise<PreloadResult> => {
	const { timeout = DEFAULT_TIMEOUT } = options;

	let timedOut = false;

	// Create abort mechanism for timeout
	let timeoutId: ReturnType<typeof setTimeout>;
	const timeoutPromise = new Promise<"timeout">((resolve) => {
		timeoutId = setTimeout(() => resolve("timeout"), timeout);
	});

	// Create preload promises for all images
	const preloadPromises = imageUrls.map((url) => preloadSingleImage(url));

	// Race between all images loading and timeout
	const allLoaded = Promise.allSettled(preloadPromises);
	const result = await Promise.race([allLoaded, timeoutPromise]);

	// Always clear timeout to prevent memory leaks
	clearTimeout(timeoutId!);

	// Build result arrays from settled promises (avoids race condition)
	const loaded: string[] = [];
	const failed: string[] = [];

	if (result === "timeout") {
		timedOut = true;
		// On timeout, we don't know which images completed - mark all as unknown
	} else {
		// Process settled results
		result.forEach((settledResult, index) => {
			if (settledResult.status === "fulfilled") {
				loaded.push(imageUrls[index]);
			} else {
				failed.push(imageUrls[index]);
			}
		});
	}

	return { loaded, failed, timedOut };
};

/**
 * Preloads cottage images with priority loading strategy.
 * First few main images are prioritized (what the user sees first),
 * then remaining images load in parallel within the remaining timeout budget.
 */
export const preloadCottageImages = async (
	cottageImagePaths: { mainImagesPaths: string[]; thumbnailsPaths: string[] },
	options: PreloadOptions = {},
): Promise<PreloadResult> => {
	const { timeout = DEFAULT_TIMEOUT, prioritizeFirst = DEFAULT_PRIORITY_COUNT } =
		options;

	const { mainImagesPaths, thumbnailsPaths } = cottageImagePaths;

	// Split main images into priority (first N) and rest
	const priorityImages = mainImagesPaths.slice(0, prioritizeFirst);
	const remainingMainImages = mainImagesPaths.slice(prioritizeFirst);

	const startTime = Date.now();

	// Phase 1: Load priority images first (these are what the user sees initially)
	const priorityResult = await preloadImages(priorityImages, {
		timeout: timeout * PRIORITY_TIMEOUT_RATIO,
	});

	// Calculate remaining time for non-priority images
	const elapsed = Date.now() - startTime;
	const remainingTime = Math.max(timeout - elapsed, MINIMUM_REMAINING_TIMEOUT);

	// Phase 2: Load remaining images in parallel (best effort within remaining time)
	const remainingUrls = [...remainingMainImages, ...thumbnailsPaths];
	const remainingResult = await preloadImages(remainingUrls, {
		timeout: remainingTime,
	});

	return {
		loaded: [...priorityResult.loaded, ...remainingResult.loaded],
		failed: [...priorityResult.failed, ...remainingResult.failed],
		timedOut: priorityResult.timedOut || remainingResult.timedOut,
	};
};
