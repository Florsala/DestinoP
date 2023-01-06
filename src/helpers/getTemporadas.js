
export const getTemporadas = async () => {

    const url = "http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListTemporadasByIdioma?idiomaId=1";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();
    
    const data = msg.map ( item => ( {
        
        categoria: item.categoria,
        
    }))
    return data;
      
    }
    