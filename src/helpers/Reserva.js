import axios from "axios";


export const AgregarServicios = async (carts, model) => {
    const url = 
  //'http://turismo.elemsoft.net/webapi/api/Reservas/GetListHorariosTarifasDisponibles?fecha=2022-09-20&excursionId=119'
   //`http://destinopatagonia.elemsoft.net/webapi/api/Reservas/GetListHorariosTarifasDisponibles?fecha=${ format(selectedDate, 'MM/dd/yyyy')}&excursionId=${id}`;
  
    `http://turismo.elemsoft.net/webapi/api/Reservas/AgregarServicio`;
    const urlConfirmar = "http://turismo.elemsoft.net/webapi/api/Reservas/ConfirmarReserva"
    const body = carts.map((c)=>{
        const objModel = {
            Res_Id: 0,
            ResProd_Fecha: `${c.date} ${c.time}`,
            ResProd_FechaHasta: `${c.date} ${c.time}`,
            Prod_Id: c.item.id,
            ResProd_Obs: 'test'
        }
        const array = c.quantity.map((c)=>(
            {
                Clas_Grupo_Id:c.id,
                ResGru_Cantidad:+c.cantidad
            })
        )
        const finalObject = {
            model: objModel,
            grupos: array
        }
        return finalObject
    })
    await axios.post(`${url}`,body[0]).then((response)=>{
        const newBody = [...body].splice(0,1)
        model.Res_Id=response.data.id
        newBody.forEach((c)=>{
            c.model.Res_Id=response.data.id
            axios.post(`${url}`,c)
        })
        axios.post(`${urlConfirmar}`,model)
    })

    
  };