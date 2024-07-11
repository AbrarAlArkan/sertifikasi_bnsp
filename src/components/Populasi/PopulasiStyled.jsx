import styled from "styled-components";

const PopulasiStyled = styled.div`
    text-align: center;
    padding: 1rem;

    .covid_jumlah{
        font-size: 2.44rem;
    }

    .Populasi_title{
        margin-bottom: 1rem;
        font-size: 2.44rem;
        color: #06D6A0;
    }

    .Populasi_desc{
        margin-bottom: 1rem;
        font-size: 1.44rem;
        color: #118AB2;
    }

    .Populasi_status{
        font-size: 2.44rem;
        color:black;
    }

    .Populasi_jumlah{
        color: aqua;
    }

    .covid {
        box-shadow: 0 3px 20px rgba(0, 0, 0,0.2);
        border-radius: 12px;
        background-color: white;
        padding: 30px;
        margin-left: 70px;
    }

    .data__covid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 0;
        text-align: left;
    }

    .data__covid p {
        font-size: 1.1rem;
    }

    @media(min-width:768px){

            max-width: 1200px;
            margin: 0 auto;

        .Populasi_container{
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media(min-width:992px){
            max-width: 1200px;
            margin: 3rem auto;
    }
`;

export default PopulasiStyled;