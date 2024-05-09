import styles from "./Populasi.module.css"
import data from "../../utils/constants/indonesia";
import Kartu from "./Kartu/Kartu";
import {nanoid} from "nanoid";

function Populasi() {
    const dataCovid = data.indonesia;
    return(
        <div className={styles.container}>
            <section className={styles.Populasi}>
                <h2 className={styles.Populasi_title}>Indonesia</h2>
                <h4 className={styles.Populasi_desc}>Data Covid Berdasarkan Indonesia</h4>
                <div className={styles.Populasi_container}>
                    {
                    dataCovid.map(function (covid){
                        return <Kartu covid={covid} key={covid.status}/>
                    })}
                </div>
            </section>
        </div>
    );
}

export default Populasi;