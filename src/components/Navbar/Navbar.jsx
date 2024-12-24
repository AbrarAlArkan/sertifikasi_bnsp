import NavbarStyled from "./NavbarStyled";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <NavbarStyled>
            <nav className="navbar">
                <div>
                    <h1 className="navbar__brand">Technova</h1>
                </div>
                <div>
                    <ul className="navbar__list">
                        <li className="navbar__item" key="global">
                            <Link to="/">Global</Link>
                        </li>
                        <li className="navbar__item" key="indonesia">
                            <Link to="/indonesia">Indonesia</Link>
                        </li>
                        <li className="navbar__item" key="provinsi">
                            <Link to="/provinsi">Provinsi</Link>
                        </li>
                        <li className="navbar__item" key="about">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarStyled>
    );
}

export default Navbar;
