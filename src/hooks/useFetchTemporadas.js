import { useEffect, useState } from "react";
import { getTemporadas } from "../helpers/getTemporadas";

export const useFetchTemporadas = () => {
  
    const [temporada, setTemporada] = useState([]);

    const getTemporada = async () => {
        const newTemporada = await getTemporadas();
        setTemporada(newTemporada)
    }
    
    useEffect(() =>{
        getTemporada()
    }, [])

return {
    temporada
}

}
