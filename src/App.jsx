import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import ProvinsiContext from './components/Context/ProvinsiContext';
import Layout from './Layout/Layout';
import HomePage from "./pages/Home/Home";
import IndonesiaPage from './pages/IndonesiaPage';
import ProvinsiPage from './pages/ProvinsiPage';
import About from './pages/AboutPage';

function App() {
  const [dataProvinsi, setDataProvinsi] = useState([])
  const contextValue = {
    dataProvinsi, setDataProvinsi
  }
  
  return (
    <ProvinsiContext.Provider value={contextValue}>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/indonesia' element={<IndonesiaPage />} />
          <Route path='/provinsi' element={<ProvinsiPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </ProvinsiContext.Provider>
  );
}

export default App;
