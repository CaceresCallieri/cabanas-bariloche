import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import getCottageImages from "./utils/getCottageImages";

import HeroSection from "./components/HeroSection/HeroSection";
import CottageSelector from "./components/CottageSelector/CottageSelector";
import CurtainEffect from "./components/CurtainEffect/CurtainEffect";
import Carousel from "./components/Carousel/Carousel";
import CottageDescription from "./components/CottageDescription/CottageDescription";
import Location from "./components/Location/Location";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

import COTTAGES from "./data/cottages";
import { COTTAGE } from "./types";
import { useCottageFromUrl } from "./hooks/useCottageFromUrl";
import { useCottageNavigation } from "./hooks/useCottageNavigation";
import { useCottageMeta } from "./hooks/useCottageMeta";
import { getDefaultCottage } from "./utils/cottageDefaults";

const COTTAGE_IMAGES = getCottageImages();
const CURTAIN_ANIMATION_DURATION = 750; // Duration in milliseconds

const CottagePage = () => {
	const selectedCottage = useCottageFromUrl();
	const { navigateWithAnimation, isCurtainAnimating } = useCottageNavigation();
	
	useCottageMeta(selectedCottage);

	const cottageImagesPaths = COTTAGE_IMAGES[selectedCottage.code as keyof typeof COTTAGE_IMAGES];

	const handleCottageChange = (newCottage: COTTAGE) => {
		navigateWithAnimation(newCottage.code);
	};

	return (
		<>
			<HeroSection />

			<main>
				<h3 className="with-decorative-line">Elegí tu cabaña:</h3>
				<CottageSelector
					selectedCottage={selectedCottage}
					setSelectedCottage={handleCottageChange}
					COTTAGES={COTTAGES}
				/>

				<CurtainEffect
					isCurtainAnimating={isCurtainAnimating}
					CURTAIN_ANIMATION_DURATION={CURTAIN_ANIMATION_DURATION}
				/>

				<div className="carousel-and-description-container">
					<Carousel cottageImagesPaths={cottageImagesPaths} />
					<CottageDescription selectedCottage={selectedCottage} />
				</div>

				<Location selectedCottage={selectedCottage} />

				<ContactSection />
			</main>

			<Footer />
		</>
	);
};

function App() {
	const defaultCottage = getDefaultCottage();
	
	return (
		<Routes>
			<Route path="/" element={<Navigate to={`/cottage/${defaultCottage.code}`} replace />} />
			<Route path="/cottage/:cottageCode" element={<CottagePage />} />
		</Routes>
	);
}

export default App;
