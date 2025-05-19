const getCottageImages = () => {
  const cottageImages = {
    mascardi: getCottageMascardiImagesPaths(),
    otto: getCottageOttoImagesPaths(),
    huapi: getCottageHuapiImagesPaths(),
    catedral: getCottageCatedralImagesPaths(),
    frey: getCottageFreyImagesPaths(),
    moreno: getCottageMorenoImagesPaths(),
  };

  return cottageImages;
};

export default getCottageImages;

function getCottageMascardiImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-mascardi/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-mascardi/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageOttoImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-otto/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-otto/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageHuapiImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-huapi/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-huapi/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageCatedralImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-catedral/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-catedral/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageFreyImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-frey/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-frey/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageMorenoImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-moreno/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-moreno/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}
