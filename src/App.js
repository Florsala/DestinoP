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
import BlogPage from "./components/BlogPage";
import ServicioItemDetail from "./components/ServicioItemDetail";
import Cart from "./components/Cart";
import {CartProvider} from "./context/CartContext";
import BlogItem from "./components/BlogItem";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">

<BrowserRouter>
<CartProvider>

  <ScrollToTop/>

<Navmenu/>

   <Routes>
          

            <Route path="/" element={<Home/>} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="/servicios/:id" element={<ServicioItemDetail />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="blog" element={<BlogPage/>} />
            <Route path="blog/:id" element={<BlogItem/>} />

            <Route path="cart" element={<Cart/>} />



            <Route path="galeria" element={<Galeria />} />


           

            
            

        </Routes>

        <Whatsapp/>

       <Footer/>

       </CartProvider>
</BrowserRouter>
      
     
      

      

      {/* <Escudos />
      <Footer /> */}
    </div>
  );
}

export default App;
