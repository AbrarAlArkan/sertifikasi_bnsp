import { nanoid } from "nanoid";
import styles from "./Provinsi.module.css";

function Provinsi(props) {
  const { dataProvinsi } = props;
  console.log(dataProvinsi);
  let no = 1;
  return (
    <div className={styles.container}>
      <section className={styles.provinsi}>
        <h2 className={styles.judul__provinsi}>Provinsi</h2>
        <h3 className={styles.subJudul__provinsi}>
          Data Covid Berdasarkan Provinsi
        </h3>
        <div className={styles.provinsi__container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {dataProvinsi.map((provinsi) =>  {
                let id = nanoid();
                return (
                  <tr key={id}>
                    <td>{no++}</td>
                    <td>{provinsi.kota}</td>
                    <td>{provinsi.kasus}</td>
                    <td>{provinsi.sembuh}</td>
                    <td>{provinsi.meninggal}</td>
                    <td>{provinsi.dirawat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Provinsi; 