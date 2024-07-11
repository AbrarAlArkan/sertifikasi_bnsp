import styled from "styled-components";

const KartuStyled = styled.div`
    .covid_status{
    margin-top: 24px;
    font-size: 1.6rem;
    color:#073B4C;
    font-weight: 500;
}

.covid:nth-child(1) .covid_jumlah {
    color: #06D6A0;
}
.covid:nth-child(2) .covid_jumlah {
    color: #118AB2;
}
.covid:nth-child(3) .covid_jumlah {
    color: #EF476F;
}

.covid_jumlah{
    font-size: 2.44rem;
    text-align: center;
    margin-top: -0.5em;
}
    box-shadow: 0 3px 20px rgba(0, 0, 0,0.3);
    border-radius: 12px;
    background-color: white;
    padding: 30px;
    margin-top: 30px;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;

@media(min-width:768px){
    .covid{
        margin-left: 40px;
    }
}

@media(min-width:992px){
}
`;

export default KartuStyled;