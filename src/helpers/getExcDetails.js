
export const getExcDetails = async ({id}) => {

    //const url = `http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListDetalles?excursionId=${id}&idiomaId=1`;
    const url = `http://turismo.elemsoft.net/webapi/api/Excursiones/GetListDetalles?excursionId=${id}&idiomaId=1`;
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();

    const data = msg[0];
    console.log(data);
    
      return data;
      
    }
    