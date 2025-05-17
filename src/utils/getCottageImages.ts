const getCottageImages = () => {
  const cottageImages = {
    ruben: getCottageRubenImagesPaths(),
    lorenzo: getCottageLorenzoImagesPaths(),
    michelle: getCottageMichelleImagesPaths(),
    anahi: getCottageAnahiImagesPaths(),
    trinidad: getCottageTrinidadImagesPaths(),
    gonzalo: getCottageGonzaloImagesPaths(),
  };

  return cottageImages;
};

export default getCottageImages;

function getCottageRubenImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-ruben/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-ruben/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageLorenzoImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-lorenzo/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-lorenzo/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageMichelleImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-michelle/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-michelle/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageAnahiImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-anahi/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-anahi/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageTrinidadImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-trinidad/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-trinidad/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}

function getCottageGonzaloImagesPaths() {
  const mainImages = Object.values(
    import.meta.glob("@assets/cottages/cottage-gonzalo/main-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  const thumbnails = Object.values(
    import.meta.glob("@assets/cottages/cottage-gonzalo/thumbnails/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    }),
  );

  return { mainImagesPaths: mainImages, thumbnailsPaths: thumbnails };
}
