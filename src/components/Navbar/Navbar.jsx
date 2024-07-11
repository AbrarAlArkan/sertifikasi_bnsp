import NavbarStyled from "./NavbarStyled";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <NavbarStyled>
            <nav className="navbar">
                <div>
                    <h1 className="navbar__brand">Covid Id</h1>
                </div>
                <div>
                    <ul className="navbar__list">
                        <Link className="navbar__item" to='/'><li className="navbar__item">Global</li></Link>
                        <Link className="navbar__item" to='/indonesia'><li className="navbar__item">Indonesia</li></Link>
                        <Link className="navbar__item" to='/provinsi'><li className="navbar__item">Provinsi</li></Link>
                        <Link className="navbar__item" to='/about'><li className="navbar__item">About</li></Link>
                    </ul>
                </div>
            </nav>
        </NavbarStyled>
    );
}

export default Navbar;