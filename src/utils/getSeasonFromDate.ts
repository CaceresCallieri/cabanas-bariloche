export type Season = "summer" | "autumn" | "winter" | "spring";

export interface SeasonInfo {
	season: Season;
	shouldShowSnow: boolean;
}

/**
 * Determines the current season based on a given date.
 * Uses Southern Hemisphere season dates (for Bariloche, Argentina).
 *
 * Seasons:
 * - Summer: December 21 - March 20
 * - Autumn: March 21 - June 20 (Snow active)
 * - Winter: June 21 - September 20 (Snow active)
 * - Spring: September 21 - December 20
 *
 * Note: Season calculation is locked to Argentina timezone (America/Argentina/Buenos_Aires)
 * to ensure consistent behavior for all visitors regardless of their location.
 *
 * @param date - The date to check (defaults to current date)
 * @returns SeasonInfo object with season and snow flag
 * @throws Error if an invalid date is provided
 */
export function getSeasonFromDate(date: Date = new Date()): SeasonInfo {
	// Validate input date
	if (isNaN(date.getTime())) {
		throw new Error("Invalid date provided to getSeasonFromDate");
	}

	// Convert to Argentina timezone for consistent season calculation
	const argentinaDate = new Date(
		date.toLocaleString("en-US", {
			timeZone: "America/Argentina/Buenos_Aires",
		}),
	);

	const month = argentinaDate.getMonth() + 1; // getMonth() returns 0-11, we need 1-12
	const day = argentinaDate.getDate();

	// Convert to a comparable number (MMDD format)
	// Note: This approach correctly handles leap years (Feb 29 → 229)
	const monthDay = month * 100 + day;

	// Southern Hemisphere season boundaries
	const SUMMER_START = 1221; // December 21
	const AUTUMN_START = 321;  // March 21
	const WINTER_START = 621;  // June 21
	const SPRING_START = 921;  // September 21

	let season: Season;

	if (monthDay >= SPRING_START && monthDay < SUMMER_START) {
		season = "spring";
	} else if (monthDay >= SUMMER_START || monthDay < AUTUMN_START) {
		season = "summer";
	} else if (monthDay >= AUTUMN_START && monthDay < WINTER_START) {
		season = "autumn";
	} else {
		season = "winter";
	}

	// Snow is active during autumn and winter
	const shouldShowSnow = season === "autumn" || season === "winter";

	return {
		season,
		shouldShowSnow,
	};
}
