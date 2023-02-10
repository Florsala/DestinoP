export const getListCart = async () => {

    const url = "http://turismo.elemsoft.net/webapi/api/Reservas/GetExcursiones/?id=1667";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();

    const data = msg;

    console.log(data, 'getlist')

    return data;

      
    }
    