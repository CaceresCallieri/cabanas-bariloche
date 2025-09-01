import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import COTTAGES from "../data/cottages";
import { COTTAGE } from "../types";
import { getDefaultCottage } from "../utils/cottageDefaults";

export const useCottageFromUrl = (): COTTAGE => {
	const { cottageCode } = useParams<{ cottageCode: string }>();
	const navigate = useNavigate();
	const defaultCottage = getDefaultCottage();

	const cottage = COTTAGES.find(c => c.code === cottageCode);

	useEffect(() => {
		if (!cottage && cottageCode) {
			navigate(`/cottage/${defaultCottage.code}`, { replace: true });
		}
	}, [cottage, cottageCode, navigate, defaultCottage.code]);

	return cottage || defaultCottage;
};