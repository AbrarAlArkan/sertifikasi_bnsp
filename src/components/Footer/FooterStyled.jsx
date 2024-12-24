import styled from "styled-components";

const FooterStyled = styled.div`
    /* Small Screen */
    .container {
        background-color: rgb(23, 147, 230);
        padding: 1rem;
        color: #fff;
    }

    .navbar {
        display: flex;
        flex-direction: column;
    }

    .navbar__brand {
        font-size: 2.4rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }

    .navbar__list {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .navbar__item {
        margin-bottom: 1rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: color 0.3s ease-in-out;
    }

    .navbar__item:hover {
        color: #000;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        .navbar {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .navbar__brand {
            margin-bottom: 0;
        }

        .navbar__list {
            flex-direction: row;
        }

        .navbar__item {
            margin: 0 1rem;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        /* 
        * Future enhancement: Add advanced styles for larger screens.
        * Example: Adjust spacing, add hover effects, or animations.
        */
        .navbar {
            max-width: 1200px;
            margin: 0 auto;
        }

        .navbar__item {
            font-size: 1.4rem;
        }
    }
`;

export default FooterStyled;
