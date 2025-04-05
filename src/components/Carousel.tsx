import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { Thumb } from "./CarouselThumbsButton";
import Arrow from "./Arrow";

type PropType = {
  images: string[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { images } = props;
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

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {images.map((imagePath, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <img src={imagePath} alt="Cabaña Ana" />
              </div>
            </div>
          ))}
        </div>

        <button
          className="embla-navigation-button embla_prev_button"
          onClick={scrollPrev}
        >
          <Arrow direction="left" />
        </button>
        <button
          className="embla-navigation-button embla_next_button"
          onClick={scrollNext}
        >
          <Arrow direction="right" />
        </button>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {images.map((imagePath, index) => (
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

export default EmblaCarousel;
