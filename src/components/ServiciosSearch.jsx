import { MdDoubleArrow } from "react-icons/md";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useFetchCategorias } from '../hooks/useFetchCategorias';
import { useFetchTemporadas } from '../hooks/useFetchTemporadas';
import { useEffect, useState } from "react";

const ServiciosSearch = () => {

const { category} = useFetchCategorias();
const { temporada} = useFetchTemporadas();

const [categoria, setCategoria] = useState('')
const [temp, setTemp] = useState('')
const [excursiones, setExcursiones] = useState([]);


 const getExcursiones = async () => {

  const url = `http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=1&categoriaId=${categoria}&temporadaId=${temp}`;
  
  const resp = await fetch (url);
  
  const { msg } = await resp.json();
  
  const data = msg.map ( item => ( {
      id:item.id,
      categoria: item.categoria,
      nombre: item.nombre,
      imagen: item.path,
      precio: item.precio
  }))
  return data;
    
  }

const getInfoExcursiones = async () => {
  const newInfo = await getExcursiones();
  setExcursiones(newInfo);
      console.log(excursiones, 'excursion search');

}

const handleSubmit = (e) =>{
  e.preventDefault();
  getInfoExcursiones();

}

/* useEffect(()=>{
  getInfoExcursiones()
},[]) */

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
            <Form.Select size="md" aria-label="Default select example"
             onChange={(e) => setTemp(e.target.value)}>
              <option>Todas</option>
              {temporada.map((temp) => (
                <option value={temp} key={temp.temporada}>
                    {temp.temporada}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group style={{ width: "50%" }}>
            <Form.Label style={{ fontWeight: "700" }}>Categoría</Form.Label>

            <Form.Select size="md" aria-label="Default select example"
            onChange={(e) => setCategoria(e.target.value)}
            >
              <option>Todas</option>
              {category.map((cat) => (
                <option value={categoria} key={cat.categoria}>
                    {cat.categoria}
                </option>
              ))}
              
            </Form.Select>

        
          </Form.Group>
        </div>

        <Button className="btn-search" size="md"
        onSubmit={handleSubmit}
        >
          Buscar
          <MdDoubleArrow style={{ margin: "0.2rem" }} />
        </Button>
      </div>
  )
}

export default ServiciosSearch