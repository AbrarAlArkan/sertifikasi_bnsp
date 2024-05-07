import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Populasi from "../../components/Populasi/Populasi";
import Provinsi from "../../components/Provinsi/Provinsi";
import data from "../../utils/constants/provinces"
import { useState } from "react";

function HomePage() {

  const [dataProvinsi, setDataProvinsi] = useState(data.provinces);

  return (
    <div>
      <Navbar />
      <main>
        <Hero/>
        <Populasi/>
        <Provinsi 
        dataProvinsi={dataProvinsi}
        setDataProvinsi={setDataProvinsi}
        />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
