import PopulasiStyled from "./PopulasiStyled";
import Kartu from "./Kartu/Kartu";
import {nanoid} from "nanoid";
import { IoSkull } from "react-icons/io5";
import { FaSmileBeam } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";

function Populasi(props) {
    const { dataCovid } = props;
    return(
        <PopulasiStyled>
            <section className="Populasi">
                <h2 className="Populasi_title">Indonesia</h2>
                <h4 className="Populasi_desc"></h4>
                <div className="Populasi_container">
                    {
                    dataCovid.map(function (covid){
                        if(covid.status) {
                            return <Kartu id={nanoid()} covid={covid} status={covid.status} total={covid.total}>
                                <p className="covid_jumlah" styleName=''>{covid.total}</p>
                            </Kartu>
                        } else if (covid.numbers) {
                            return (
                                <Kartu id={nanoid()} status={covid.name}>
                                    <div className="data__covid">
                                        <div className="data confirmed">
                                            <h3>Confirmed</h3>
                                            <p>{covid.numbers.confirmed}</p>
                                        </div>
                                        <div>
                                            <p><FaRegSadCry /></p>
                                        </div>
                                    </div>
                                    <div className="data__covid">
                                        <div className="data recovered">
                                            <h3>Recovered</h3>
                                            <p>{covid.numbers.recovered}</p>
                                        </div>
                                        <div>
                                            <p><FaSmileBeam /></p>
                                        </div>
                                    </div>
                                    <div className="data__covid">
                                        <div className="data death">
                                          <h3>Death</h3>
                                            <p>{covid.numbers.death}</p>
                                        </div>
                                        <div>
                                            <p><IoSkull /></p>
                                        </div>
                                    </div>
                                </Kartu>
                            )
                        }
                    })}
                </div>
            </section>
        </PopulasiStyled>
    );
}

export default Populasi;