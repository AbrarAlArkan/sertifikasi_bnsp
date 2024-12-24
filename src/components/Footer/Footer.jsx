import FooterStyled from "./FooterStyled";

function Footer() {
    return (
        <FooterStyled>
            <div className="container">
                <nav className="navbar">
                    <div>
                        <h1 className="navbar__brand">Technova</h1>
                    </div>
                    <div>
                        <ul className="navbar__list">
                            <li className="navbar__item" key="global">
                                <a href="#global">Global</a>
                            </li>
                            <li className="navbar__item" key="indonesia">
                                <a href="#indonesia">Indonesia</a>
                            </li>
                            <li className="navbar__item" key="provinsi">
                                <a href="#provinsi">Provinsi</a>
                            </li>
                            <li className="navbar__item" key="about">
                                <a href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </FooterStyled>
    );
}

export default Footer;
