
export const getDestacadas = async () => {

const url = "http://destinopatagonia.com/webapi/api/Excursiones/GetListDestacadas";
//const url = "http://turismo.elemsoft.net/webapi/api/Excursiones/GetListDestacadas";

const resp = await fetch (url);

const { msg } = await resp.json();

const data = msg.map ( item => ( {
    id: item.id,
    categoria: item.categoria,
    nombre: item.nombre,
    imagen: item.path,
    precio: item.precio
}))
return data;
  
}
