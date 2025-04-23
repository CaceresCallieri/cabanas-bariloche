import "./Carousel.css";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import PreviousSlideButton from "./PreviousSlideButton";
import NextSlideButton from "./NextSlideButton";
import { Thumb } from "./CarouselThumbsButton";

type CottageImagePaths = {
  mainImagesPaths: string[];
  thumbnailsPaths: string[];
};

type CarouselProps = {
  cottageImagesPaths: CottageImagePaths;
};

const Carousel: React.FC<CarouselProps> = ({ cottageImagesPaths }) => {
  const { mainImagesPaths, thumbnailsPaths } = cottageImagesPaths;

  const options: EmblaOptionsType = {
    loop: true,
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  // Scroll between slides
  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  // Scroll back to the beggining of the carousel when changing selected cottage
  useEffect(() => {
    console.log("cottage image paths changed, resetting selectedIndex");
    if (emblaMainApi) emblaMainApi.scrollTo(0);
  }, [emblaMainApi, cottageImagesPaths]);

  return (
    <div className="carousel">
      <div className="carousel__viewport" ref={emblaMainRef}>
        <div className="carousel__container">
          {mainImagesPaths.map((imagePath, index) => (
            <div className="carousel__slide" key={index}>
              <div className="carousel__slide__number">
                <img src={imagePath} alt="Cabaña Ana" />
              </div>
            </div>
          ))}
        </div>

        {/* <PreviousSlideButton scrollPrev={scrollPrev} /> */}
        {/* <NextSlideButton scrollNext={scrollNext} /> */}
      </div>

      <div className="carousel-thumbs">
        <div className="carousel-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="carousel-thumbs__container">
            {thumbnailsPaths.map((imagePath, index) => (
              <Thumb
                imagePath={imagePath}
                selected={index === selectedIndex}
                onClick={() => onThumbClick(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
