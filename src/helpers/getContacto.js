export const getContacto = async () => {

    const url = "http://destinopatagonia.com/webapi/api/Contactos/GetList";
    //const url = "http://turismo.elemsoft.net/webapi/api/Contactos/GetList";
    
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();

    const data = msg[0];


    return data;
      
    }
    