import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navmenu from "./components/Navmenu";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Whatsapp from "./components/Whatsapp";
import Blog from "./components/Blog";

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
            <Route path="blog" element={<Blog/>} />


            <Route path="galeria" element={<Galeria />} />


           

            
            

        </Routes>

        <Whatsapp/>

       <Footer/>


</BrowserRouter>
      
     
      

      

      {/* <Escudos />
      <Footer /> */}
    </div>
  );
}

export default App;
