import { useEffect, useState } from "react";
import { getTarifas } from "../helpers/getTarifas";

export const useFetchTarifas = () => {
  
    const [tarifas, setTarifas] = useState([]);

    const getTarifaHora = async () => {
        const newTarifa = await getTarifas();
        setTarifas(newTarifa)
    }
    
    useEffect(() =>{
        getTarifaHora()
    }, [])

return {
    tarifas
}

}