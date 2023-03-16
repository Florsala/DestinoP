
export const getGaleria = async () => {

    const url = "http://destinopatagonia.elemsoft.net/webapi/api/Galeria/GetListPath";
    //const url = "http://turismo.elemsoft.net/webapi/api/Galeria/GetListPath";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();
    
    const data = msg.map ( item => ( {
        
        img: item.path,
        
    }))
    return data;
      
    }
    