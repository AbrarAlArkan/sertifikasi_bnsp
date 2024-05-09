import styles from "./Kartu.module.css"

function Kartu(props) {
    const {covid} = props;
    return (
        <div className={styles.covid}>
            <h3 className={styles.covid_status}>{covid.status}</h3><br></br>
            <p className={styles.covid_jumlah} style={{color:covid.color}}>{covid.total}</p>
        </div>
    );
}

export default Kartu;