import { Link } from "react-router-dom";

function Footer() {
   return (
      <div className="footer">
         <Link to="/Disclaimer" className="footer__link">Contact</Link>
         <Link to="/Disclaimer" className="footer__link">Mentions Légales</Link>
         <Link to="/Disclaimer" className="footer__link">Politique de confidentialité</Link>
      </div>
   );
}

export default Footer;