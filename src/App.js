import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navmenu from "./components/Navmenu";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Escudos from "./components/Escudos";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";

function App() {
  return (
    <div className="App">

<BrowserRouter>

<Navmenu/>

   <Routes>
          

            <Route path="/DestinoP" element={<Home/>} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="servicios" element={<Servicios />} />

            <Route path="galeria" element={<Galeria />} />


           

            
            

        </Routes>
        <Escudos/>
       <Footer/>


</BrowserRouter>
      
     
      

      

      {/* <Escudos />
      <Footer /> */}
    </div>
  );
}

export default App;
