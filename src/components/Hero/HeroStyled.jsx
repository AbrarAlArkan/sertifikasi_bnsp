import styled from "styled-components";

const HeroStyled = styled.div`
    /* Small Screen */
    margin: 1rem;

    .hero {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }

    .hero__title {
        color: #17e66d;
        margin-bottom: 1rem;
        font-size: clamp(2rem, 2.44rem, 3rem);
        font-family: 'Poppins', sans-serif;
    }

    .hero__genre {
        color: #2b8fe6;
        margin-bottom: 1rem;
        font-size: clamp(1.2rem, 1.59rem, 2rem);
    }

    .hero__description {
        color: #64748b;
        margin-bottom: 1rem;
    }

    .hero__button {
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #17e66d;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .hero__button:hover {
        background-color: #14c15c;
    }

    .hero__image {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        /*
         * Nothing TODO Here.
         * We don't change style Hero. 
         */
    }

    /* Large Screen */
    @media (min-width: 992px) {
        .container {
            max-width: 1200px;
            margin: 3rem auto;
            padding: 0 2rem;
        }

        .hero {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        .hero__left {
            flex-basis: 40%;
        }

        .hero__right {
            flex-basis: 60%;
        }
    }
`;

export default HeroStyled;
