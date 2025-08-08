const getCottageImages = () => {
	const cottageNames = [
		"mascardi",
		"otto",
		"huapi",
		"catedral",
		"frey",
		"espacio-comun-belgrano",
		"moreno",
	] as const;

	const cottageImages = cottageNames.reduce(
		(acc, name) => {
			acc[name] = validateCottageImagePaths(getCottageImagesPaths(name));
			return acc;
		},
		{} as Record<string, { mainImagesPaths: string[]; thumbnailsPaths: string[] }>,
	);

	return cottageImages;
};

export default getCottageImages;

// Validation function for CottageImagePaths
function validateCottageImagePaths(data: any): {
	mainImagesPaths: string[];
	thumbnailsPaths: string[];
} {
	if (
		data &&
		Array.isArray(data.mainImagesPaths) &&
		data.mainImagesPaths.every((item: any) => typeof item === "string") &&
		Array.isArray(data.thumbnailsPaths) &&
		data.thumbnailsPaths.every((item: any) => typeof item === "string")
	) {
		return data;
	} else {
		throw new Error("Invalid CottageImagePaths data");
	}
}

function getCottageImagesPaths(cottageName: string): {
	mainImagesPaths: string[];
	thumbnailsPaths: string[];
} {
	switch (cottageName) {
		case "mascardi":
			return {
				mainImagesPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-mascardi/main-images/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
				thumbnailsPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-mascardi/thumbnails/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
			};
		case "otto":
			return {
				mainImagesPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-otto/main-images/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
				thumbnailsPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-otto/thumbnails/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
			};
		case "huapi":
			return {
				mainImagesPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-huapi/main-images/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
				thumbnailsPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-huapi/thumbnails/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
			};
		case "catedral":
			return {
				mainImagesPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-catedral/main-images/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
				thumbnailsPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-catedral/thumbnails/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
			};
		case "frey":
			return {
				mainImagesPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-frey/main-images/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
				thumbnailsPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-frey/thumbnails/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
			};
		case "moreno":
			return {
				mainImagesPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-moreno/main-images/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
				thumbnailsPaths: Object.values(
					import.meta.glob("@assets/cottages/cottage-moreno/thumbnails/*.webp", {
						eager: true,
						query: "?url",
						import: "default",
					}),
				),
			};
		case "espacio-comun-belgrano":
			return {
				mainImagesPaths: Object.values(
					import.meta.glob(
						"@assets/cottages/espacio-comun-belgrano/main-images/*.webp",
						{
							eager: true,
							query: "?url",
							import: "default",
						},
					),
				),
				thumbnailsPaths: Object.values(
					import.meta.glob(
						"@assets/cottages/espacio-comun-belgrano/thumbnails/*.webp",
						{
							eager: true,
							query: "?url",
							import: "default",
						},
					),
				),
			};
		default:
			throw new Error(`Unknown cottage: ${cottageName}`);
	}
}
