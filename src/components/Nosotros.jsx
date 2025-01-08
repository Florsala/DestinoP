import React, { useContext, useEffect, useState } from "react";
import "../styles/Nosotros.css";
import "../styles/Medias.css";
import logo from "../assets/logo.png";
import Section from "./Section";
import { getNosotros } from "../helpers/getNosotros";
import { getSeo } from "../helpers/getSeo";
import DocumentMeta from "react-document-meta";
import cartContext from "../context/CartContext";

const Nosotros = () => {

  const [nosotros, setNosotros] = useState([]);
  const [meta, setMeta] = React.useState('')
  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion } = useContext(cartContext);

  const getInfoNosotros = async () => {
    const newInfo = await getNosotros();
    setNosotros(newInfo);

  }

  useEffect(() => {
   
    if (idioma) {
      setEtiquetas(getIdiomaSeccion("Nosotros"));
      getInfoNosotros()
      getSeo(1, 'Nosotros').then((response) => {
        setMeta({
          title: response.data.seoTitle,
          description: response.data.seoDescripcion,
          meta: {
            charset: 'utf-8',
            name: {
              keywords: response.data.seoKeywords
            }
          }
        })
      })
    }
  }, [idioma])
console.log(etiquetas);

  return (<>
    <DocumentMeta {...meta} />
    <div>
      <div className="hero_Nos">
      <div className="heroContent_container">
      <div className="tresTextosNosotros">
        <p>{etiquetas[5]?.palabra}</p>
        <p style={{backgroundColor: "#4e338a", fontWeight: "initial"}}>{etiquetas[6]?.palabra}</p>
      </div>
      </div>
      </div>



      <div>
        <div className="containerNos container-md">
          <h2>{etiquetas[0]?.palabra}</h2>
          <p className="containerNos_text"
            dangerouslySetInnerHTML={{ __html: nosotros.about }}
          >


          </p>
        </div>

        <div className="containerNos_vision container-xl">
          <div className="containerNos_vision_b">
            <h5>{etiquetas[1]?.palabra}</h5>
            <p>{nosotros.mision}</p>

          </div>
          <div className="containerNos_vision_b">
            <h5>{etiquetas[2]?.palabra}</h5>
            <p>{nosotros.vision}</p>


          </div>
        </div>
      </div>

      <Section />
    </div>
  </>
  );
};

export default Nosotros;
