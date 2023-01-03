import { useEffect, useState } from "react";
import { getCategories } from "../helpers/getCategories";

export const useFetchCategorias = () => {
  
    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        const newCategory = await getCategories();
        setCategory(newCategory)
    }
    
    useEffect(() =>{
    getCategory()
    }, [])

return {
    category
}

}
