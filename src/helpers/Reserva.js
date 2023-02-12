import axios from "axios";

export const confirmarReserva = async (carts) => {
    let id = 0;
    const url =
  //'http://turismo.elemsoft.net/webapi/api/Reservas/GetListHorariosTarifasDisponibles?fecha=2022-09-20&excursionId=119'
   //`http://destinopatagonia.elemsoft.net/webapi/api/Reservas/GetListHorariosTarifasDisponibles?fecha=${ format(selectedDate, 'MM/dd/yyyy')}&excursionId=${id}`;
  
    `http://turismo.elemsoft.net/webapi/api/Reservas/AgregarServicio`;
  
    carts.forEach((c)=>{
        const objModel = {
            Res_Id: id,
            ResProd_Fecha: c.fecha,
            ResProd_FechaHasta: c.fecha,
            Prod_Id: c.item.id,
            ResProd_Obs: 'test'
        }
        const array = c.quantity.map((c)=>(
            {
                Clas_Grupo_Id:c.id,
                ResGru_Cantidad:c.cantidad
            })
        )
        const finalObject = {
            model: objModel,
            grupos: array
        }
        return id === 0? axios.post(`${url}`,finalObject).then((response)=>{
                  id= response.id
        }):  axios.post(`${url}`,finalObject)
    })
  };