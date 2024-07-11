import Provinsi from "../components/Provinsi/Provinsi";
import { useContext } from "react";
import ProvinsiContext from "../components/Context/ProvinsiContext";
import Hero from "../components/Hero/Hero";
import data from "../utils/constants/provinces";
import Form from "../components/Form/Form";

function ProvinsiPage() {
    const {setDataProvinsi} = useContext(ProvinsiContext);
    setDataProvinsi(data.provinces);
    
    return(
        <>
            <Hero />
            <Provinsi />
            <Form />
        </>
    );
};

export default ProvinsiPage;