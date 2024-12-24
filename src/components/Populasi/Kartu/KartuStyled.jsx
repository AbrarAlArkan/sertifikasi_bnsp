import styled from "styled-components";

const KartuStyled = styled.div`
    --status-color: #073B4C; /* Default Status Color */
    --green-color: #06D6A0;
    --blue-color: #118AB2;
    --red-color: #EF476F;

    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    background-color: white;
    padding: 30px;
    margin: 30px auto;
    width: 100%;
    max-width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
    }

    .covid_status {
        margin-top: 24px;
        font-size: 1.6rem;
        color: var(--status-color);
        font-weight: 500;
        text-align: center;
    }

    .covid:nth-child(1) .covid_jumlah {
        color: var(--green-color);
    }

    .covid:nth-child(2) .covid_jumlah {
        color: var(--blue-color);
    }

    .covid:nth-child(3) .covid_jumlah {
        color: var(--red-color);
    }

    .covid_jumlah {
        font-size: 2.44rem;
        text-align: center;
        margin-top: -0.5em;
    }

    @media (min-width: 768px) {
        .covid {
            margin-left: 40px;
        }
    }

    @media (min-width: 992px) {
        max-width: 400px;
    }
`;

export default KartuStyled;
