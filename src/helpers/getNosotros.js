export const getNosotros = async () => {

   const url = "http://destinopatagonia.elemsoft.net/webapi/api/Nosotros/GetList";
    //const url = "http://turismo.elemsoft.net/webapi/api/Nosotros/GetList";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();

    const data = msg[0];
    
 
    return data;
      
    }
    