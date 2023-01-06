
export const getMenu = async () => {

    const url = "http://turismo.elemsoft.net/webapi/api/Idiomas/GetListWeb";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();
    
    return msg;
      
}
    