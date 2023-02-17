export const handleInputTarifa = (e, item, counter) => {

    const tarifas = [...counter]
    let indexObject;
    const exist = tarifas.filter((i, index) => { if (i.id === item.tipoId) { indexObject = index; i.cantidad=e.target.value; return true; } return false })
    if (exist.length) tarifas[indexObject]= exist[0]; else tarifas.push({id:item.tipoId, cantidad: e.target.value, precio: item.importe, nombre:item.tipo});
    return tarifas;

  };