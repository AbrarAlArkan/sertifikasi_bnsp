import FooterStyled from "./FooterStyled";

function Navbar() {
    return (
        <FooterStyled>
        <div className="container">
            <nav className="navbar">
                <div>
                    <h1 className="navbar__brand">Covid Id</h1>
                </div>
                <div>
                    <ul className="navbar__list">
                        <li className="navbar__item">Global</li>
                        <li className="navbar__item">Indonesia</li>
                        <li className="navbar__item">Provinsi</li>
                        <li className="navbar__item">About</li>    
                    </ul>
                </div>
            </nav>
        </div>
        </FooterStyled>
    );
}

export default Navbar;