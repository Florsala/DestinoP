import { useEffect, useState } from "react";
import { getIdiomas } from "../helpers/getIdiomas";

export const useFetchIdiomas = () => {
  
    const [idiomas, setIdiomas] = useState([]);

    const getLanguage = async () => {
        const newIdioma = await getIdiomas();
        setIdiomas(newIdioma)
    }
    
    useEffect(() =>{
        getLanguage()
    }, [])

return {
    idiomas
}

}
