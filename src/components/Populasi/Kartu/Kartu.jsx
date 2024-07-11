import KartuStyled from "./KartuStyled";

function Kartu(props) {
    const {status, children} = props;
    return (
        <KartuStyled>
            <h3 className="covid_status">{status}</h3><br></br>
            {children}
        </KartuStyled>
    );
}

export default Kartu;