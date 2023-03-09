import React, { useEffect, useState } from "react";
import "../styles/Nosotros.css";
import "../styles/Medias.css";
import logo from "../assets/logo.png";
import Section from "./Section";
import { getNosotros } from "../helpers/getNosotros";

const Nosotros = () => {

  const [nosotros, setNosotros] = useState([]);

  const getInfoNosotros = async () => {
    const newInfo = await getNosotros();
    setNosotros(newInfo);

  }
  
  useEffect(()=>{
    getInfoNosotros()
  },[])

  return (
    <div>
      <div className="hero_Nos">
        <div className="heroContent_Nos">
          <div className="headerLogo heroContent_container_Nos">
            <img
              style={{
                height: "16rem",
                objectFit: "contain",
                marginTop: "10rem",
              }}
              src={logo}
              alt=""
            />
          </div>
        </div>
      </div>

   

      <div>
        <div className="containerNos container-md">
          <h2>DESTINO PATAGONIA</h2>
          <p className="containerNos_text"
          dangerouslySetInnerHTML ={{__html: nosotros.about}}
          >
            
      
          </p>
        </div>

        <div className="containerNos_vision container-xl">
          <div className="containerNos_vision_a">
            <h5>{nosotros.mision}</h5>
            <p></p>
         
          </div>
          <div className="containerNos_vision_b">
            <h5>{nosotros.vision}</h5>
            <p></p>

         
          </div>
        </div>
      </div>

      <Section />
    </div>
  );
};

export default Nosotros;
