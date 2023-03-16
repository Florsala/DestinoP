
export const getBlog = async () => {

    //const url = "http://destinopatagonia.elemsoft.net/webapi/api/Blog/GetListByIdioma?id=1";
    const url = "http://turismo.elemsoft.net/webapi/api/Blog/GetListByIdioma?id=1";
    
    const resp = await fetch (url);
    
    const { msg } = await resp.json();
    
    const data = msg.map ( item => ( {

        id: item.id,
        titulo:item.titulo,
        copete: item.copete,
        texto: item.texto,
        imagen: item.imagen,
        seoDescription: item.seoDescripcion,
        seoKeyword: item.seoKeyword,
        seoTitle: item.seoTitle
    }))
    return data;
      
    }
