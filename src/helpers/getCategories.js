
export const getCategories = async () => {

    const url = "http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListCategoriasByIdioma?idiomaId=1";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();
    
    const data = msg.map ( item => ( {

        categoria: item.categoria,
        id: item.id
        
    }))
    console.log(data, 'getcategories');

    return data;
      
    }
    