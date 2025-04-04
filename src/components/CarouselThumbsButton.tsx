import React from "react";

type PropType = {
  imagePath: string;
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { imagePath, selected, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : "",
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {/* {index + 1} */}
        <img src={imagePath} alt="Cabaña Ana" />
      </button>
    </div>
  );
};
