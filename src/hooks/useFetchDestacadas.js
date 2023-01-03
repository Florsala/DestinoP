import { useEffect, useState } from "react";
import { getDestacadas } from "../helpers/getDestacadas";



export const useFetchDestacadas = () => {

const [loading, setLoading] = useState(true);
const [excDest, setExcDest] = useState([]);

  const getExcDest = async () => {
    const newExc = await getDestacadas();
    setExcDest(newExc);
    setLoading(false)
  };

  useEffect(() => {
    getExcDest();

   
  }, []);

return {
    excDest,
    loading
}
  
}
