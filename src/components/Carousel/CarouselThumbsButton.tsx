import React from "react";

type PropType = {
  imagePath: string;
  selected: boolean;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { imagePath, selected, onClick } = props;

  return (
    <div
      className={"carousel-thumbs__slide".concat(
        selected ? " carousel-thumbs__slide__button--selected" : "",
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="carousel-thumbs__slide__button"
      >
        <img src={imagePath} alt="" />
      </button>
    </div>
  );
};
