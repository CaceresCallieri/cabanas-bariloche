import React from "react";

type PropType = {
  imagePath: string;
  selected: boolean;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { imagePath, selected, onClick } = props;

  return (
    <button onClick={onClick} type="button" className="embla-thumbs-button">
      <img src={imagePath} alt="Cabaña Ana" />
    </button>
  );
};
