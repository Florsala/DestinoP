import axios from "axios"


export const getPaquetes = async (idiomaId)=> {
    const url = 'https://turismo.elemsoft.net/webapi/api/Excursiones/GetListPaquetes'
    return await axios.get(`${url}?idiomaId=${idiomaId}`)
}
export const getPaquetesById = async (idiomaId,paqueteId)=>{
    const url = 'https://turismo.elemsoft.net/webapi/api/Excursiones/GetPaqueteDetalles'
    return await axios.get(`${url}?idiomaId=${idiomaId}&excursionId=${paqueteId}`)
}
export const getTarifasPaquete = async (idiomaId,paqueteId,fecha)=>{
    const url = 'http://turismo.elemsoft.net/webapi/api/Reservas/GetListHorariosTarifasDisponiblesPaquetes'
    return await axios.get(`${url}?fecha=${fecha}&idiomaId=${idiomaId}&excursionId=${paqueteId}`)
}