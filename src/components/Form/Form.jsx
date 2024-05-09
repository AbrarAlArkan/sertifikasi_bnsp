import { nanoid } from "nanoid";
import { useState } from "react";
import image2 from "../../assets/poto2.jpeg";
import styles from "./Form.module.css";
import Alert from "../Alert/Alert";

function Form(props) {
  const { dataProvinsi, setDataProvinsi } = props;
  const [province, setProvince] = useState(dataProvinsi[0].kota);
  const [status, setStatus] = useState("positif");
  const [jumlah, setJumlah] = useState(0);

  const [isProvinceError, setIsProvinceError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleProvince(e) {
    setProvince(e.target.value);
  }
  function handleStatus(e) {
    setStatus(e.target.value);
  }
  function handleJumlah(e) {
    setJumlah(e.target.value);
  }
  function updateData() {
    const index = dataProvinsi.findIndex(function (item) {
      return item.kota === province;
    });
    const findProvince = dataProvinsi.find(function (item) {
      return item.kota === province;
    });
    if (status === "positif") {
      dataProvinsi[index] = {
        ...findProvince,
        kasus: parseInt(findProvince.kasus) + parseInt(jumlah),
      };
    } else if (status === "sembuh") {
      dataProvinsi[index] = {
        ...findProvince,
        sembuh: parseInt(findProvince.sembuh) + parseInt(jumlah),
      };
    } else if (status === "dirawat") {
      dataProvinsi[index] = {
        ...findProvince,
        dirawat: parseInt(findProvince.dirawat) + parseInt(jumlah),
      };
    } else {
      dataProvinsi[index] = {
        ...findProvince,
        meninggal: parseInt(findProvince.meninggal) + parseInt(jumlah),
      };
    }
    setDataProvinsi([...dataProvinsi]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (province === "") {
      setIsProvinceError(true);
    } else if (status === "") {
      setIsProvinceError(false);
      setIsStatusError(true);
    } else if (jumlah === 0) {
      setIsProvinceError(false);
      setIsStatusError(false);
      setIsJumlahError(true);
    } else {
      updateData();
      setIsSuccess(true);
    }
  }
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src={image2} alt="" />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          {isSuccess && (
            <Alert success={isSuccess}>Data Succesfully Added</Alert>
          )}
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="provinsi" className={styles.form__label}>
                Provinsi
              </label>
              <select
                value={province}
                onChange={handleProvince}
                className={styles.form__input}
              >
                {dataProvinsi.map(function (province) {
                  let id = nanoid();
                  return (
                    <option key={id} value={province.kota}>
                      {province.kota}
                    </option>
                  );
                })}
                {isProvinceError && <Alert>The Province is Required </Alert>}
              </select>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="status" className={styles.form__label}>
                Status
              </label>
              <select
                value={status}
                onChange={handleStatus}
                className={styles.form__input}
              >
                <option value="positif">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError && <Alert>The Status is Required</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="">
                Jumlah
              </label>
              <input
                onChange={handleJumlah}
                className={styles.form__input}
                value={jumlah}
                type="number"
                min="0"
                name=""
                id=""
              />
              {isJumlahError && <Alert>The Jumlah is Required</Alert>}
            </div>
            <div>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
