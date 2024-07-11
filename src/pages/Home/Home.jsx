import Hero from "../../components/Hero/Hero";
import Populasi from "../../components/Populasi/Populasi";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {

  const [dataGlobal, setDataGlobal] = useState([]);
  const [dataRegions, setDataRegions] = useState([]);

  useEffect(() => {
    async function fetchGlobalData() {
      const response = await axios("https://covid-fe-2023.vercel.app/api/global.json");
      setDataGlobal(response.data.global);
      setDataRegions(response.data.regions);
    }
    fetchGlobalData();
  }, [])

  return (
    <div>
        <Hero/>
        <Populasi dataCovid={dataGlobal}/>
        <Populasi  dataCovid={dataRegions}/>
    </div>
  );
}

export default HomePage;
