import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import { Routes, Route, Router } from "react-router-dom";
import Escudos from "./components/Escudos";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route
          path="/category/:CategoryId"
          element={<ProductsListContainer />}
        />
        <Route path="/tours" element={<ProductsListContainer />} />
        <Route path="/tours/:id" element={<ProductDetailContainer />} /> */}

        <Route path="/Contacto" element={<Contacto />} /> 
        {/* <Route path="/arrepentimiento" element={<BtnArrep />} /> */}
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>

      <Escudos />
      <Footer />
    </div>
  );
}

export default App;
