export const getContacto = async () => {

    const url = "http://destinopatagonia.elemsoft.net/webapi/api/Contactos/GetList";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();
    
    const data = msg.map ( item => ( {

        domicilio: item.domicilio,
        telefono: item.telefono,
        email: item.email
        
    }))
    return data;
      
    }
    