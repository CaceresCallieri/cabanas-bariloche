import COTTAGES from "../data/cottages";
import { COTTAGE } from "../types";

export const DEFAULT_COTTAGE_CODE = 'mascardi';

export const getDefaultCottage = (): COTTAGE => {
	return COTTAGES.find(cottage => cottage.code === DEFAULT_COTTAGE_CODE) || COTTAGES[0];
};