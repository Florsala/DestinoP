
export const getCategories = async (idioma) => {

    //const url = "http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListCategoriasByIdioma";
    const url = "http://turismo.elemsoft.net/webapi/api/Excursiones/GetListCategoriasByIdioma";
    
    const resp = await fetch (`${url}?idiomaId=${idioma}`);
    
    const { msg } = await resp.json();
    
    const data = msg.map ( item => ( {

        categoria: item.categoria,
        id: item.id
        
    }))

    return data;
      
    }
    