import logo from '../../Assets/PARKO.png';
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="Logo de Parko" />
            <nav className="header__nav">
                <NavLink to="/" className={({ isActive }) => {
                    return "header__nav__link header__nav__link" + (isActive ? "--active" : "")
                }}>Accueil</NavLink>
                <NavLink to="/Réserver-ma-place" className={({ isActive }) => {
                    return "header__nav__link header__nav__link" + (isActive ? "--active" : "")
                }}>Réserver ma place</NavLink>
                <NavLink to="/Libérer-ma-place" className={({ isActive }) => {
                    return "header__nav__link header__nav__link" + (isActive ? "--active" : "")
                }}>Libérer ma place</NavLink>
            </nav>
        </div>
    );
}

export default Header;