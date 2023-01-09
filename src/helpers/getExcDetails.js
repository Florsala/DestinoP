
export const getExcDetails = async () => {

    const url = "http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListDetalles?excursionId=5&idiomaId=1";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();

    const data = msg[0];
    
  
    console.log(data, 'imagenes');
    return data;
      
    }
    