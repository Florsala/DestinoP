import { useEffect, useState } from "react";
import { getCategories } from "../helpers/getCategories";

export const useFetchCategorias = (idiomaId) => {
  
    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        const newCategory = await getCategories(idiomaId);
        setCategory(newCategory)
    }
    
    useEffect(() =>{
    getCategory()
    }, [])

return {
    category
}

}
