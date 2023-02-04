import { MdDoubleArrow } from "react-icons/md";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useFetchCategorias } from "../../hooks/useFetchCategorias";
import { useFetchTemporadas } from "../../hooks/useFetchTemporadas";
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

    //const url = `http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=1&temporada=null&categoria=${categoria}`;

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
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  const getCategory = (e) => {

    setCategoria(e.target.value);
  };

  const getTemp = (e) => {
    setTemp(e.target.value);
  };

  useEffect(() => {
    getInfoExcursiones();
  }, [categoria]);

  return (
    <>
      <div className="heroContent_box container">
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            gap: "0.5rem",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <Form.Group style={{ width: "50%" }}>
              <Form.Label style={{ fontWeight: "700" }}>Temporada</Form.Label>
              <Form.Select
                size="md"
                aria-label="Default select example"
                onChange={getTemp}
              >
                {temporada.map((temp) => (
                  <option value={temp.id} key={temp.id}>
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
                onChange={getCategory}
              >
                <option>Todas</option>
                {category.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.categoria}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>

          <div>
            <Button
              style={{ width: "100%" }}
              type="submit"
              className="btn-search"
              size="md"
            >
              Buscar
              <MdDoubleArrow style={{ margin: "0.2rem" }} />
            </Button>
          </div>
        </form>
      </div>

      {excursiones && (
        <SliderExcursionesSearch excursiones={excursiones} loading={loading} />
      )}
    </>
  );
};

export default ServiciosSearch;
