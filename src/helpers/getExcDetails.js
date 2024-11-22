
export const getExcDetails = async (id, idioma) => {

    const url = `http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListDetalles?excursionId=${id}&idiomaId=${idioma}`;
    //const url = `http://turismo.elemsoft.net/webapi/api/Excursiones/GetListDetalles?excursionId=${id}&idiomaId=${idioma}`;
    const resp = await fetch (url);
    
    const { msg } = await resp.json();

    const data = msg[0];
    
      return data;
      
    }
    