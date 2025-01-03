import styled from "styled-components";
import FooterStyled from "../Footer/FooterStyled";

const FormStyled = styled.div`
    /* Small Screen */
        margin: 5rem 1rem;
        padding: 1rem;
    
    .form {
        display: flex;
        flex-direction: column;
    }
    
    .form__left {
        display: none;
    }
    
    .form__image {
        max-width: 100%;
        border-radius: 25px;
        height: auto;
    }
    
    .form__title {
        text-align: center;
        color: #06d6a0;
        font-size: 2.44rem;
        margin-bottom: 1rem;
    }
    
    .form__group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }
    
    .form__label {
        margin-bottom: 1rem;
    }
    
    .form__input {
        outline: none;
        padding: 1rem 0.5rem;
        border-radius: 10px;
        border: 1px solid #06d6a0;
    }
    
    .form__input:focus {
        border: 1px solid #06d6a0;
    }
    
    .form__button {
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #06d6a0;
        color: #fff;
        display: block;
        margin: 0 auto;
        width: 100%;
    }
    .form__alert {
        max-width: 100%;
        height: auto;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 30px;
        margin-right: 5%;
    }
    
    /* Large Screen */
    @media (min-width: 992px) {
        .container {
        max-width: 1200px;
        margin: 5rem auto;
        }
    
        .form {
        display: flex;
        flex-direction: row;
        align-items: center;
        }
    
        .form__left {
        display: block;
        flex-basis: 60%;
        }
    
        .form__right {
        flex-basis: 40%;
        }
    }
`;

export default FormStyled;