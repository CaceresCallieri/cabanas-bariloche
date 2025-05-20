import "./CottageSelector.css";

import React, { Dispatch, SetStateAction } from "react";
import { Dropdown } from "primereact/dropdown";
// import HouseIcon from "../../assets/house.svg?react";

import { COTTAGE } from "../../types";

interface CottageSelectorProps {
  selectedCottage: COTTAGE;
  setSelectedCottage:
    | Dispatch<SetStateAction<COTTAGE>>
    | ((newCottage: COTTAGE) => void);
  COTTAGES: COTTAGE[];
}

const CottageSelector: React.FC<CottageSelectorProps> = (props) => {
  const { selectedCottage, setSelectedCottage, COTTAGES } = props;

  return (
    <div className="cottage-selector">
      {/* <HouseIcon className="house-icon" /> */}
      <Dropdown
        value={selectedCottage}
        onChange={(event) => {
          if (typeof setSelectedCottage === "function") {
            setSelectedCottage(event.value);
          }
        }}
        options={COTTAGES}
        optionLabel="name"
        placeholder="Seleccione una cabaña"
      />
    </div>
  );
};

export default CottageSelector;
