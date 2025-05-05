import "./ContactSection.css";
import WhatsAppIcon from "../../assets/Whatsapp Icon.svg?react";

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
    <a
      className="contact-us"
      aria-label="Chat on WhatsApp"
      target="_blank"
      href={getWhatsAppLink(selectedCottageName)}
    >
      <WhatsAppIcon />
      Contactanos!
    </a>
  );
};

export default ContactSection;
