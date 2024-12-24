import KartuStyled from "./KartuStyled";

function Kartu(props) {
    const { status = "No Status", children, className } = props;

    return (
        <KartuStyled className={className}>
            <h3 className="covid_status">{status}</h3>
            <div className="kartu_content">{children}</div>
        </KartuStyled>
    );
}

export default Kartu;
