import { useEffect, useState } from "react";
import { getExcursiones } from "../helpers/getExcursiones";



export const useFetchExcursiones = () => {

const [loading, setLoading] = useState(true);
const [excursiones, setExcursiones] = useState([]);

  const getExc = async () => {
    const newExc = await getExcursiones();
    setExcursiones(newExc);
    setLoading(false)
  };

  useEffect(() => {
    getExc();

   
  }, []);

return {
    excursiones,
    loading
}
  
}
