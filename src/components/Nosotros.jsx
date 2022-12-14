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
        console.log(nosotros, 'nosotros');

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
            
           {/*  {nosotros.about } */}
        {/*     Somos una empresa fueguina, especializada en experiencias marítimas
            con conocimiento de las aguas más australes del mundo como lo es el
            Canal Beagle. */}
          </p>
        </div>

        <div className="containerNos_vision container-xl">
          <div className="containerNos_vision_a">
            <h5>{nosotros.mision}</h5>
            {/* <p>
              Poseemos una embarcación acogedora que nos permite ofrecer una
              atención personalizada para que cada persona que viaja con Destino
              Patagonia pueda vivir de cerca y de una manera única lo que es
              navegar el Canal Beagle. Nuestra visión es poder ser una empresa
              reconocida y recomendada para que nuestros clientes sientan la
              total confianza a la hora de elegirnos. Nuestra misión es ser una
              empresa de navegación elegida nacional e internacionalmente, por
              la calidad de sus servicios.{" "}
            </p> */}
          </div>
          <div className="containerNos_vision_b">
            <h5>{nosotros.vision}</h5>

            {/* <ul>
              <li>
                Trabajamos para que su experiencia de viajar con nosotros sea
                inolvidable.
              </li>
              <li>
                Nuestro objetivo es garantizar la satisfacción de quienes nos
                eligen.
              </li>
              <li>
                Calidad, responsabilidad y eficiencia son los pilares de nuestra
                empresa.
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      <Section />
    </div>
  );
};

export default Nosotros;
