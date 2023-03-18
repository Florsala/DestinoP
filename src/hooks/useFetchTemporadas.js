import { useEffect, useState } from "react";
import { getTemporadas } from "../helpers/getTemporadas";

export const useFetchTemporadas = (idiomaId) => {
  
    const [temporada, setTemporada] = useState([]);

    const getTemporada = async () => {
        const newTemporada = await getTemporadas(idiomaId);
        setTemporada(newTemporada)
    }
    
    useEffect(() =>{
        getTemporada()
    }, [])

return {
    temporada
}

}
