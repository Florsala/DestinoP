import { useEffect, useState } from "react";
import SliderExcursionesSearch from "./SliderExcursionesSearch";
import { getPaquetes } from "../../helpers/getPaquetes";
import { SpinnerCustom } from "../spinner";

const Paquetes = () => {

  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(false)

  const getInfoPaquetes = async () => {
    setLoading(true)
    await getPaquetes(1).then((response) => {
      let data = response.data.msg.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        imagen: item.path,
        precio: item.precio,

      }));

      setPaquetes(data);
      setLoading(false)
    });
  }

    /* const handleSubmit = (e) => {
      e.preventDefault();
     
    };
    
    const getCategory = (e) => {
    
      setCategoria(e.target.value);
    };
    
    const getTemp = (e) => {
      setTemp(e.target.value);
    }; */

    useEffect(() => {
      getInfoPaquetes();
    }, []);

    return (
      <>
        {loading && <SpinnerCustom />}

        {paquetes && (
          <SliderExcursionesSearch excursiones={paquetes} loading={loading} isPaquete={true}/>
        )}
      </>
    );
  };

  export default Paquetes;
