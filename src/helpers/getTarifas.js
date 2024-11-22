import { format } from "date-fns";


export const getTarifas = async ({id, selectedDate}) => {
  const url =
//'http://turismo.elemsoft.net/webapi/api/Reservas/GetListHorariosTarifasDisponibles?fecha=2022-09-20&excursionId=119'
 `http://destinopatagonia.elemsoft.net/webapi/api/Reservas/GetListHorariosTarifasDisponibles?fecha=${ format(selectedDate, 'MM/dd/yyyy')}&excursionId=${id}`;

  //`http://turismo.elemsoft.net/webapi/api/Reservas/GetListHorariosTarifasDisponibles?fecha=${ format(selectedDate, 'MM/dd/yyyy')}&excursionId=${id}`;

  const resp = await fetch(url);

  const { msg } = await resp.json();

  const data = msg[0];


  return data;
};
