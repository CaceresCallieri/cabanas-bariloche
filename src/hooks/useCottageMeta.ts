import { useEffect } from "react";
import { COTTAGE } from "../types";

const updateMetaTag = (property: string, content: string) => {
	const existingTag = document.querySelector(`meta[property="${property}"]`);
	if (existingTag) {
		existingTag.setAttribute('content', content);
	}
};

export const useCottageMeta = (cottage: COTTAGE) => {
	useEffect(() => {
		document.title = `${cottage.name} - Cabañas Bariloche`;

		updateMetaTag('og:title', `${cottage.name} - Cabañas Bariloche`);
		updateMetaTag('og:description', cottage.description[0]);
		updateMetaTag('og:url', `https://cabanas-bariloche.netlify.app/cottage/${cottage.code}`);
	}, [cottage]);
};