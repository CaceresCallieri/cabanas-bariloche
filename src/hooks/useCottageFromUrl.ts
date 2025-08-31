import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import COTTAGES from "../data/cottages";
import { COTTAGE } from "../types";

export const useCottageFromUrl = (): COTTAGE => {
	const { cottageCode } = useParams<{ cottageCode: string }>();
	const navigate = useNavigate();

	const cottage = COTTAGES.find(c => c.code === cottageCode);

	useEffect(() => {
		if (!cottage && cottageCode) {
			navigate('/cottage/mascardi', { replace: true });
		}
	}, [cottage, cottageCode, navigate]);

	return cottage || COTTAGES[0];
};