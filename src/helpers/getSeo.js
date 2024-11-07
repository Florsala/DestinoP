import axios from "axios"

export const getSeo = async(idioma, seccion)=>{
    //const url = `https://turismo.elemsoft.net/webapi/api/Datos/SEO`
    const url = 'http://destinopatagonia.com/webapi/api/Datos/SEO'
    return axios.post(`${url}?idiomaId=${idioma}&seccion=${seccion}`)
}