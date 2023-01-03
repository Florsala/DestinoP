import { MdDoubleArrow } from "react-icons/md";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useFetchCategorias } from '../hooks/useFetchCategorias';
import { useFetchTemporadas } from '../hooks/useFetchTemporadas';

const ServiciosSearch = () => {

const { category} = useFetchCategorias();
const { temporada} = useFetchTemporadas();


  return (
    <div className="heroContent_box container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "1rem",
            gap: "0.5rem",
          }}
        >
          <Form.Group style={{ width: "50%" }}>
            <Form.Label style={{ fontWeight: "700" }}>Temporada</Form.Label>
            <Form.Select size="md" aria-label="Default select example">
              <option>Todas</option>
              {temporada.map((temp) => (
                <option value="" key={temp.temporada}>
                    {temp.temporada}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group style={{ width: "50%" }}>
            <Form.Label style={{ fontWeight: "700" }}>Categoría</Form.Label>

            <Form.Select size="md" aria-label="Default select example">
              <option>Todas</option>
              {category.map((cat) => (
                <option value="" key={cat.categoria}>
                    {cat.categoria}
                </option>
              ))}
              
            </Form.Select>

        
          </Form.Group>
        </div>

        <Button className="btn-search" size="md">
          Buscar
          <MdDoubleArrow style={{ margin: "0.2rem" }} />
        </Button>
      </div>
  )
}

export default ServiciosSearch