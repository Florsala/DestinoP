import axios from "axios"


export const createContacto = async(consulta)=>{
    const url = "http://destinopatagonia.com/webapi/api/Contactos/SendEmail";
    //const url = `http://turismo.elemsoft.net/webapi/api/Contactos/SendEmail`;
   return await axios.post(`${url}`, consulta)
}