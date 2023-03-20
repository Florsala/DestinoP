import { MdDoubleArrow } from "react-icons/md";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import SliderExcursionesSearch from "./SliderExcursionesSearch";
import cartContext from "../../context/CartContext";
import { getCategories } from "../../helpers/getCategories";
import { getTemporadas } from "../../helpers/getTemporadas";

const ServiciosSearch = () => {
 
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [temporada, setTemporda] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [temp, setTemp] = useState(null);
  const [excursiones, setExcursiones] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);
  const { idioma, getIdiomaSeccion } = useContext(cartContext);
  const getExcursiones = async () => {
    //const url = `http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=${idioma.id}&temporada=${temp}&categoria=${categoria}`;

    const url = `http://turismo.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=${idioma.id}&temporada=${temp}&categoria=${categoria}`;

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
  const getTemporadasList = async () => {
    const newInfo = await getTemporadas(idioma.id);
    setTemporda(newInfo);
  };
  const getCategoriasList = async () => {
    const newInfo = await getCategories(idioma.id);
    setCategory(newInfo);
  };
  const getInfoExcursiones = async () => {
    const newInfo = await getExcursiones();
    setExcursiones(newInfo);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getInfoExcursiones()
  };

  const getCategory = (e) => {

    setCategoria(e.target.value);
  };

  const getTemp = (e) => {
    setTemp(e.target.value);
  };

  useEffect(() => {
    setEtiquetas(getIdiomaSeccion("Excursiones"));
    if(idioma.id) {getInfoExcursiones(); getCategoriasList(); getTemporadasList()};
  }, [ idioma]);

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
              <Form.Label style={{ fontWeight: "700" }}>{etiquetas[2]?.palabra}</Form.Label>
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
              <Form.Label style={{ fontWeight: "700" }}>{etiquetas[3]?.palabra}</Form.Label>

              <Form.Select
                size="md"
                aria-label="Default select example"
                onChange={getCategory}
              >
                <option>{etiquetas[10]?.palabra}</option>
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
              onClick={handleSubmit}
            >
              {etiquetas[4]?.palabra}
              <MdDoubleArrow style={{ margin: "0.2rem" }} />
            </Button>
          </div>
        </form>
      </div>

      {excursiones && (
        <SliderExcursionesSearch excursiones={excursiones} loading={loading}/>
      )}
    </>
  );
};

export default ServiciosSearch;
