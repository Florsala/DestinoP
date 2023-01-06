
export const getDestacadas = async () => {

const url = "http://destinopatagonia.elemsoft.net/webapi/api/Excursiones/GetListDestacadas";

const resp = await fetch (url);

const { msg } = await resp.json();

const data = msg.map ( item => ( {
    categoria: item.categoria,
    nombre: item.nombre,
    imagen: item.path,
    precio: item.precio
}))
return data;
  
}
