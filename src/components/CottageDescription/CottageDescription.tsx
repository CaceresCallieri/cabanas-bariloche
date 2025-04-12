import React from "react";
import { COTTAGE } from "@src/types";

const CottageDescription: React.FC<{ selectedCottage: COTTAGE }> = ({
  selectedCottage,
}) => (
  <div className="cottage-description">
    <p>{selectedCottage.description}</p>
  </div>
);

export default CottageDescription;
