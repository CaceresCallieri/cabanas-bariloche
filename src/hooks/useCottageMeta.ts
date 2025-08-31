import { useEffect } from "react";
import { COTTAGE } from "../types";

const updateOrCreateMetaTag = (
	selector: string,
	content: string,
	attributeName: 'property' | 'name' = 'property',
	attributeValue?: string
) => {
	let existingTag = document.querySelector(selector);
	
	if (existingTag) {
		existingTag.setAttribute('content', content);
	} else {
		const newTag = document.createElement('meta');
		newTag.setAttribute(attributeName, attributeValue || selector.match(/\[(?:property|name)="([^"]+)"\]/)?.[1] || '');
		newTag.setAttribute('content', content);
		document.head.appendChild(newTag);
	}
};

const getCottageImageUrl = (cottageCode: string): string => {
	const baseUrl = 'https://cabanas-bariloche.netlify.app';
	return `${baseUrl}/cottages/${cottageCode}/exterior/1.webp`;
};

export const useCottageMeta = (cottage: COTTAGE) => {
	useEffect(() => {
		document.title = `${cottage.name} - Cabañas Bariloche`;

		updateOrCreateMetaTag('meta[property="og:title"]', `${cottage.name} - Cabañas Bariloche`, 'property', 'og:title');
		updateOrCreateMetaTag('meta[property="og:description"]', cottage.description[0], 'property', 'og:description');
		updateOrCreateMetaTag('meta[property="og:url"]', `https://cabanas-bariloche.netlify.app/cottage/${cottage.code}`, 'property', 'og:url');
		
		const cottageImageUrl = getCottageImageUrl(cottage.code);
		updateOrCreateMetaTag('meta[property="og:image"]', cottageImageUrl, 'property', 'og:image');
		
		updateOrCreateMetaTag('meta[property="og:image:alt"]', `${cottage.name} - Vista exterior`, 'property', 'og:image:alt');
		updateOrCreateMetaTag('meta[property="og:type"]', 'website', 'property', 'og:type');
		
		updateOrCreateMetaTag('meta[name="description"]', cottage.description[0], 'name', 'description');
	}, [cottage]);
};