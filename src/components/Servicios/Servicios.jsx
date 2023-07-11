import React, { useContext, useEffect, useState } from "react";
import "../../styles/Servicios.css";

import { Container } from "react-bootstrap";


import ServiciosSearch from "./ServiciosSearch";
import SliderDestacadas from "../../components/SliderDestacadas";
import { useFetchDestacadas } from "../../hooks/useFetchDestacadas";
import Paquetes from "./Paquetes";
import DocumentMeta from "react-document-meta";
import { getSeo } from "../../helpers/getSeo";
import cartContext from "../../context/CartContext";

const Servicios = () => {

  const { excDest, loading } = useFetchDestacadas();

  const [meta, setMeta] = React.useState('')
  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion } = useContext(cartContext);

  useEffect(() => {
    
    if (idioma) {
      setEtiquetas(getIdiomaSeccion("Excursiones"));
      getSeo(idioma.id, 'Excursiones').then((response) => {
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


  return (<>
    <DocumentMeta {...meta} />

    <div>
      <div className="hero_svs">
        
      </div>

      <div className="container-lg-svs">
        <h1 className="display-5" style={{ fontWeight: "700" }}>
          {etiquetas[8]?.palabra.toUpperCase()}
        </h1>
        <h2
          className="container-sm"
          style={{
            fontWeight: "400",
            fontSize: "1.5rem",
            maxWidth: "54",
            textAlign: "center",
          }}
        >
          {etiquetas[9]?.palabra}{" "}
        </h2>
      </div>
      <Container
        style={{
          textTransform: "uppercase",
          color: " #2c3e53",
        }}
      >
        <h4 style={{ fontSize: "2rem" }}>{etiquetas[6]?.palabra}</h4>
      </Container>
      <Paquetes />
      <Container
        style={{
          textTransform: "uppercase",
          color: " #2c3e53",
        }}
      >
        <h4 style={{ fontSize: "2rem" }}>{etiquetas[5]?.palabra}</h4>
      </Container>

      {/*       <ServicioItem />
 */}
      <div>
        <SliderDestacadas excDest={excDest} loading={loading} />
      </div>

      <ServiciosSearch />




    </div>
  </>
  );
};

export default Servicios;
