
export const getExcDetails = async () => {

    const url = "http://destinopatagonia.elemsoft.net/webapi//api/Excursiones/GetListDetalles?excursionId=5&idiomaId=1";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();

    const data = msg[0];
    
   /* const newData =  data.map ( item => ( {
        id: item.id,
        nombre: item.nombre,
        descripcion: item.descripcion,        
        precio: item.precio,
        img: item.imagenes,       
        duracion: item.caracteristicas[1].nombre,
        duracion_d: item.caracteristicas[1].detalle,
        dificultad: item.caracteristicas[2].nombre,
        dificultad_d: item.caracteristicas[2].detalle,

    })) */
    console.log(data, 'imagenes');
    return data;
      
    }
    