import styles from "./Kartu.module.css"

function Kartu(props) {
    const {status, total} = props
    return (
        <div className={styles.kartu}>
            <h1 className={styles.status}>{status}</h1>
            <p className={styles.total}>{total}</p>
        </div>
    )
}

export default Kartu;