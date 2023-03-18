
export const getTemporadas = async (idioma) => {

    const url = "http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListTemporadasByIdioma";
   // const url = "http://turismo.elemsoft.net/webapi/api/Excursiones/GetListTemporadasByIdioma";
    
    const resp = await fetch (`${url}?idiomaId=${idioma}`);
    
    const { msg } = await resp.json();
    
    const data = msg.map ( item => ( {
        
        temporada: item.temporada,
        id: item.id
        
    }))
    return data;
      
    }
    