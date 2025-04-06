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
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide__button--selected" : "",
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__button"
      >
        <img src={imagePath} alt="" />
      </button>
    </div>
  );
};
