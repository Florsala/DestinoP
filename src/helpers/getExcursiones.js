
export const getExcursiones = async (idioma) => {

    const url = `http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=${idioma}&categoria=null&temporada=null`
    //const url = `http://turismo.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=${idioma}&categoria=null&temporada=null`;
    
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
    