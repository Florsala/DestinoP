import React from "react";
import "../styles/Servicios.css";
/* import dataTours from "../data/dataTours";
 */import { MdDoubleArrow } from "react-icons/md";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { Container} from "react-bootstrap";

import ServicioItem from "./ServicioItem";

const Servicios = () => {
/*   const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  fetch("http://turismo.elemsoft.net/webapi/api/Excursiones/GetListDestacadas")
  .then(res => res.json())
  .then(
    (result) => {
      setLoading(true);
      setItems(result);

  },
  (error) => {
    setLoading(true);
    setError(error);

  }
  )
}, [])
 */


/*   useEffect(() => {
    setLoading(true);

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const data = dataTours;

        resolve(data);
      }, 2000);
    });
    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [dataTours]);
  console.log(items); */

  return (
    <div>
      <div className="hero_svs">
        <div className="heroContent_container_svs">
          <div className="headerTitle_svs container-md">
            <h2 className="headerTitle_a_svs">
              Excursiones en el
              <span className="headerTitle_b_svs"> Fin del Mundo</span>{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="container-lg-svs">
        <h1 className="display-5" style={{ fontWeight: "700" }}>
          Prepárate para vivir uno de los más lindos momentos en el fin del
          mundo
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
          Destino Patagonia, desea que tu experiencia sea cálida y
          personalizada, por lo que la tripulación y el guía estarán pendientes
          de que así sea.{" "}
        </h2>
      </div>

      <Container
        style={{
          textTransform: "uppercase",
          color: " #2c3e53",
        }}
      >
        <h4 style={{ fontSize: "2rem" }}>Excursiones destacadas</h4>
      </Container>

 {/*      {loading ? (
        <>
          <Spinner
            style={{ margin: "50%", marginTop: "200px" }}
            
            variant="primary"
            animation="grow"
          />
        </>
      ) : (
        <div>
          <ServicioItem items={items} />
        </div>
      )} */}
<ServicioItem  />
      <div className="heroContent_box container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "1rem",
            gap: "0.5rem",
          }}
        >
          <Form.Group style={{width: '50%'}}>
            <Form.Label style={{ fontWeight: "700" }}>Temporada</Form.Label>
            <Form.Select size="md" aria-label="Default select example">
              <option>Todas</option>
              <option value="1">Verano</option>
              <option value="2">Invierno</option>
              <option value="3">Todo el año</option>
            </Form.Select>
          </Form.Group>
          <Form.Group style={{width: '50%'}}>
            <Form.Label style={{ fontWeight: "700" }}>Categoría</Form.Label>

            <Form.Select size="md" aria-label="Default select example">
              <option>Todas</option>
              <option value="1">Trekking</option>
              <option value="2">Navegación</option>
              <option value="3">Aventura</option>
            </Form.Select>
          </Form.Group>
        </div>

        <Button className="btn-search" size="md">
          Buscar
          <MdDoubleArrow style={{ margin: "0.2rem" }} />
        </Button>
      </div>
    </div>
  );
};

export default Servicios;
