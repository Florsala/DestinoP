import { MdDoubleArrow } from "react-icons/md";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useFetchCategorias } from "../hooks/useFetchCategorias";
import { useFetchTemporadas } from "../hooks/useFetchTemporadas";
import { useEffect, useState } from "react";
import SliderExcursionesSearch from "./SliderExcursionesSearch";

const ServiciosSearch = () => {
  const { category } = useFetchCategorias();
  const { temporada } = useFetchTemporadas();
  const [loading, setLoading] = useState(true);

  const [categoria, setCategoria] = useState("");
  const [temp, setTemp] = useState("");
  const [excursiones, setExcursiones] = useState([]);

  const getExcursiones = async () => {
    const url = `http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=1&categoria=${categoria}&temporada=${temp}`;

    const resp = await fetch(url);

    const { msg } = await resp.json();

    const data = msg.map((item) => ({
      id: item.id,
      categoria: item.categoria,
      nombre: item.nombre,
      imagen: item.path,
      precio: item.precio,
      categoriaId: item.categoriaId,
      temporadaId: item.temporadaId,
    }));

    return data;
  };

  const getInfoExcursiones = async () => {
    const newInfo = await getExcursiones();
    setExcursiones(newInfo);
    setLoading(false)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  getInfoExcursiones(); 
 

  };

  const getTemp = (e) => {
    console.log(e.target.value); 

  setTemp(e.target.value);
  };

  useEffect(() => {
    getInfoExcursiones();
  }, []);

  return (
    <>
      <div className="heroContent_box container">
        <form
         onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "1rem",
            gap: "0.5rem",
          }}
        >
          <Form.Group style={{ width: "50%" }}>
            <Form.Label style={{ fontWeight: "700" }}>Temporada</Form.Label>
            <Form.Select
              size="md"
              aria-label="Default select example"
              onChange={getTemp}
            >
              <option>Todas</option>
              {temporada.map((temp, index) => (
                <option value={temp.temporada} key={index}>
                  {temp.temporada}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group style={{ width: "50%" }}>
            <Form.Label style={{ fontWeight: "700" }}>Categoría</Form.Label>

            <Form.Select
              size="md"
              aria-label="Default select example"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option>Todas</option>
              {category.map((cat, index) => (
                <option value={cat.categoria} key={index}>
                  {cat.categoria}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </form>

        <Button className="btn-search" size="md"  onClick={handleSubmit} >
          Buscar
          <MdDoubleArrow style={{ margin: "0.2rem" }} />
        </Button>
      </div>

      <SliderExcursionesSearch excursiones={excursiones}  loading={loading}  />
    </>
  );
};

export default ServiciosSearch;
