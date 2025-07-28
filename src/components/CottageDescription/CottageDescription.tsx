import "./CottageDescription.css";
import React from "react";
import { COTTAGE } from "../../types";

const CottageDescription: React.FC<{ selectedCottage: COTTAGE }> = ({ selectedCottage }) => (
	<div className="cottage-description glass-effect">
		<ul>
			{selectedCottage.description.map((sentence, index) => (
				<li key={index}>{sentence}</li>
			))}
			{selectedCottage.location === "Belgrano" && (
				<li key={selectedCottage.code}>
					Ubicación céntrica, ideal para explorar la ciudad.
				</li>
			)}
		</ul>
	</div>
);

export default CottageDescription;
