import { getSeasonFromDate, SeasonInfo } from "../utils/getSeasonFromDate";

/**
 * Custom hook to determine the current season and whether snow should be displayed.
 *
 * Note: Memoization is not used here because getSeasonFromDate is already O(1) fast,
 * and memoizing with an optional date parameter would cause stale data when the date
 * changes naturally over time.
 *
 * @param date - Optional date to check (defaults to current date, useful for testing)
 * @returns SeasonInfo object with season and shouldShowSnow flag
 *
 * @example
 * const { season, shouldShowSnow } = useSeason();
 * // season: 'summer' | 'autumn' | 'winter' | 'spring'
 * // shouldShowSnow: true (for autumn/winter) or false (for spring/summer)
 */
export function useSeason(date?: Date): SeasonInfo {
	return getSeasonFromDate(date);
}
