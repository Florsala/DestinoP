
export const getExcursiones = async () => {

    const url = 'http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=1&temporada=null&categoria=786'
    //const url = "http://turismo.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=1&categoria=null&temporada=null";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();
    
    const data = msg.map ( item => ( {
        id:item.id,
        categoria: item.categoria,
        nombre: item.nombre,
        imagen: item.path,
        precio: item.precio
    }))
    return data;
      
    }
    