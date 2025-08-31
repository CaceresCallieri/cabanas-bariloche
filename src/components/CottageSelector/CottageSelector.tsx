import "./CottageSelector.css";

import React from "react";
import { Dropdown } from "primereact/dropdown";

import { COTTAGE } from "../../types";

interface CottageSelectorProps {
	selectedCottage: COTTAGE;
	setSelectedCottage: (newCottage: COTTAGE) => void;
	COTTAGES: COTTAGE[];
}

const CottageSelector: React.FC<CottageSelectorProps> = (props) => {
	const { selectedCottage, setSelectedCottage, COTTAGES } = props;

	// Avoid showing the selected cottage as an option in the dropdown
	const filteredCottages = COTTAGES.filter((cottage) => cottage.code !== selectedCottage.code);

	return (
		<div className="cottage-selector">
			<Dropdown
				value={selectedCottage}
				onChange={(event) => {
					setSelectedCottage(event.value);
				}}
				options={filteredCottages}
				optionLabel="name"
				placeholder={selectedCottage.name}
			/>
		</div>
	);
};

export default CottageSelector;
