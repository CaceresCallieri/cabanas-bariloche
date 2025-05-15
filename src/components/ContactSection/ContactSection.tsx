import "./ContactSection.css";
import WhatsAppIcon from "../../assets/Whatsapp Icon.svg?react";
import { motion } from "motion/react";

interface ContactSectionProps {
  selectedCottageName: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  selectedCottageName,
}) => {
  function getWhatsAppLink(selectedCottageName: string) {
    const message = `Hola! Quiero saber mas sobre la ${selectedCottageName}.`;
    const phoneNumber = "5492944365434";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  return (
    /* TODO: Select days to stay and number of guests */
    <motion.a
      className="contact-us"
      type="button"
      aria-label="Chat on WhatsApp"
      target="_blank"
      href={getWhatsAppLink(selectedCottageName)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon />
      Contactanos!
    </motion.a>
  );
};

export default ContactSection;
