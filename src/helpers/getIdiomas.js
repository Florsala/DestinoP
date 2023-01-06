export const getIdiomas = async () => {

    const url = "http://destinopatagonia.elemsoft.net/webapi/api/Idiomas/GetListWeb";

    const resp = await fetch (url);

    const { msg } = await resp.json();

    return msg;

}

