import axios from "axios";

/*  const url = `http://destinopatagonia.elemsoft.net/webapi/api/Reservas/AgregarServicio`;
     const urlConfirmar = "http://destinopatagonia.elemsoft.net/webapi/api/Reservas/ConfirmarReserva" */
const url = `http://turismo.elemsoft.net/webapi/api/Reservas/AgregarServicio`;
const urlConfirmar = "http://turismo.elemsoft.net/webapi/api/Reservas/ConfirmarReserva"

export const AgregarServicios = async (carts, model) => {
    let responseId = 0;
    if (carts[0].item.productos)
        responseId = await agregarPaquete(carts[0].item, carts[0].quantity, responseId)
    else
        responseId = await agregarExcursion(carts[0])
    const newList = carts.filter((c, index) => index !== 0)

    newList.forEach(async (i) => {
        if (i.item.productos)
            await agregarPaquete(carts[0].item, carts[0].quantity, responseId)
        else
            await agregarExcursion(carts[0], responseId)
    })
    model.Res_Id = responseId
    return await axios.post(urlConfirmar, model)



};
async function createPayload(c, type, packageId, quantityList, reserveId) {
    const quantity = type === 'paquete' ? quantityList : c.quantity
    const objModel = {
        Res_Id: reserveId,
        ResProd_Fecha: `${c.date} ${c.time}`,
        ResProd_FechaHasta: `${c.date} ${c.time}`,
        Prod_Id: type === 'paquete' ? c.id : c.item.id,
        ResProd_Obs: 'test',
        Combo_Id: packageId
    }
    const array = quantity.map((c) => (
        {
            Clas_Grupo_Id: c.id,
            ResGru_Cantidad: +c.cantidad
        })
    )
    const finalObject = {
        model: objModel,
        grupos: array
    }
    return await axios.post(`${url}`, finalObject)
}
async function agregarPaquete(item, quantity, id) {
    let responseId = id
    await createPayload(item.productos[0], 'paquete', item.id, quantity, responseId).then((response) => {
        responseId = response.data.id
        const cartsFilter = item.productos.filter((c) => c.id !== item.productos[0].id)
        cartsFilter.forEach(async (element) => {
            await createPayload(element, 'paquete', item.id, quantity, response.data.id)
        });
    })
    return responseId
}
async function agregarExcursion(item, id) {
    let responseId = id
    await createPayload(item, 'excursion', 0, [], responseId).then((response) => {
        responseId = response.data.id
    })
    return responseId
}