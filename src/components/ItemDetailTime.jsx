import React, { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { getTarifas } from '../helpers/getTarifas';


const ItemDetailTime = ({id,selectedDate}) => {
  
  const [time, setTime] = useState([]);

  const getTarifaHora = async () => {
      const newTime = await getTarifas({id,selectedDate});
      setTime(newTime)
  }

  
  useEffect(() =>{
      getTarifaHora()
  }, [])

    const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(false);

 
const setNewValue = (e) =>{
  setRadioValue(e.currentTarget.value)
  console.log(e.target.innerHTML, 'hora');
}

//console.log(time.horarios, 'hora');

  return (
    <div>
        <ButtonGroup>
        {time.horarios && time.horarios.map((radio, idx) => (
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