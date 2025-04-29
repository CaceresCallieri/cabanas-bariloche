import "./CottageDescription.css";
import React from "react";
import { COTTAGE } from "../../types";

const CottageDescription: React.FC<{ selectedCottage: COTTAGE }> = ({
  selectedCottage,
}) => (
  <div className="cottage-description">
    <ul>
      {selectedCottage.description.map((sentence, index) => (
        <li key={index}>{sentence}</li>
      ))}
    </ul>
  </div>
);

export default CottageDescription;
