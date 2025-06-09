import "./Footer.css";
const whatsAppLink = "https://wa.me/5493513271238";

const Footer = () => (
	<footer>
		<p>© {new Date().getFullYear()} Cabañas Bariloche.</p>

		<div className="developed-by">
			<p>Desarrollado por</p>{" "}
			<a href={whatsAppLink} target="_blank">
				Juan Cruz Caceres
			</a>
		</div>
	</footer>
);

export default Footer;
