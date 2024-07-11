import Populasi from "../components/Populasi/Populasi";
import Hero from "../components/Hero/Hero";
import Provinsi from "../components/Provinsi/Provinsi";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProvinsiContext from "../components/Context/ProvinsiContext";

function IndonesiaPage() {

    const [dataIndonesia, setDataIndoesia] = useState([]);
    const {setDataProvinsi} = useContext(ProvinsiContext);

    useEffect(() => {
        async function fetchIndonesiaData() {
            const response = await axios("https://covid-fe-2023.vercel.app/api/indonesia.json")
            setDataIndoesia(response.data.indonesia);
            setDataProvinsi(response.data.regions);
        }

        fetchIndonesiaData();
    }, [])
    
    return (
            <>
                <Hero />
                <Populasi dataCovid={dataIndonesia} />
                <Provinsi />
            </>
    );
};

export default IndonesiaPage;