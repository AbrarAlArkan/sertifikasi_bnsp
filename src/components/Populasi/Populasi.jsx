import styles from "./Populasi.module.css"
import Data from "../../utils/constants/indonesia"
import Kartu from "./Kartu/Kartu"

function Populasi() {
    const populasi = Data.indonesia;

    return (
        <div className={styles.container}>
            <h1 className={styles.judul}>Indonesia</h1>
            <p className={styles.subJudul}>Data Covid berdasarkan Indonesia</p>
            <div className={styles.kartu}>
                {
                    populasi.map((data) => {
                        return <Kartu status={data.status} total={data.total} />
                    })
                }
            </div>
        </div>
    )
}

export default Populasi;