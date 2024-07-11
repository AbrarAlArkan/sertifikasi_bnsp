import { nanoid } from "nanoid";
import ProvinsiStyled from "./Provinsityled";
import { useContext } from "react";
import ProvinsiContext from "../Context/ProvinsiContext";

function Provinsi() {
  const { dataProvinsi } = useContext(ProvinsiContext);
  let no = 1;
  return (
    <ProvinsiStyled>
      <section className="provinsi">
        <h2 className="judul__provinsi">Provinsi</h2>
        <h3 className="subJudul__provinsi">
          Data Covid Berdasarkan Provinsi
        </h3>
        <div className="provinsi__container">
          <table className="table">
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
                const kasus = provinsi.numbers?.confirmed || provinsi.kasus;
                const sembuh = provinsi.numbers?.recovered || provinsi.sembuh;
                const meninggal = provinsi.numbers?.death || provinsi.meninggal;
                const dirawat = provinsi.numbers?.treatment || provinsi.dirawat;
                return (
                  <tr key={id}>
                    <td>{no++}</td>
                    <td>{provinsi.name || provinsi.kota}</td>
                    <td>{kasus}</td>
                    <td>{sembuh}</td>
                    <td>{meninggal}</td>
                    <td>{dirawat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </ProvinsiStyled>
  );
}

export default Provinsi; 