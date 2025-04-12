import "./Ubication.css";
import React from "react";
import { COTTAGE } from "@src/types";

interface UbicationProps {
  selectedCottage: COTTAGE;
}

const MAP_URLS = {
  Belgrano:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6009.922833514854!2d-71.32806427996664!3d-41.13536823485359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0f807a0e05%3A0xec42339f2b7c0fb7!2sBelgrano%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1744479169081!5m2!1ses!2sar",
  "Las Victorias":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12018.943548757301!2d-71.2612915!3d-41.14029125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7cc0e5b0be37%3A0x8c1bb83b30603c1b!2sLas%20Victorias%2C%20R8400%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1744486435598!5m2!1ses!2sar",
};

const Ubication: React.FC<UbicationProps> = ({ selectedCottage }) => (
  <div className="map-container">
    <h3>Ubicación: Barrio {selectedCottage.ubication}</h3>
    <iframe
      src={MAP_URLS[selectedCottage.ubication as keyof typeof MAP_URLS]}
      loading="lazy"
      // TODO: Zoom out to show the whole city
    ></iframe>
  </div>
);

export default Ubication;
