import React, { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { getTarifas } from '../../helpers/getTarifas';
import { Spinner } from "react-bootstrap";


const ItemDetailTime = ({id,selectedDate, price, setTime}) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(false);
  const [loading, setLoading] = useState(true);

 
const setNewValue = (e) =>{
  setTime(e.target.innerHTML.substring(0,5))
  setRadioValue(e.currentTarget.value)
 // console.log(e.target.innerHTML, 'hora');
}

/* const getTarifaHora = async () => {
  const newTime = await getTarifas({ id, selectedDate });
  setTime(newTime);
  setLoading(false);

};

  
  useEffect(() =>{
      getTarifaHora()
  }, [selectedDate]) */

 console.log(price, 'traigo algo?');

  return (
    <div>
{/*        {loading && <Spinner />}
 */}        <ButtonGroup>
        {price.horarios && price.horarios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-dark' : 'outline-dark'  }
            name="radio"
            value={radio.hora}
            checked={radioValue === radio.value}
            onChange={setNewValue}
            onClick={setNewValue}
          >
            {radio.hora}
          </ToggleButton>
        ))}
      </ButtonGroup> 
    </div>
  )
}

export default ItemDetailTime