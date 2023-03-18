import { useEffect } from "react";
import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";


const ItemDetailTimePackage = (props) => {
    const {radio,idx, index,p, setTime} = props
    const [checked, setChecked]= useState(false)
    
    const setTimeProduct = (time,product) => {
        if (time)
        product['time'] = time
        setChecked(true)
    }
    useEffect(()=>{
        setCheckedValue()
    },[p])
    const setCheckedValue  =()=> setChecked(p.time===radio.hora )
   
    return <><ButtonGroup>
        <ToggleButton
            key={idx}
            id={`${index}-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-dark' : 'outline-dark'}
            name={index}
            value={radio.hora}
            checked={checked}
            onClick={(e) => { setTimeProduct(e.target.innerHTML.substring(0, 5), p); setTime(e.target.innerHTML.substring(0, 5)) }}
        >
            {radio.hora}
        </ToggleButton>
    </ButtonGroup></>
}

export default ItemDetailTimePackage;