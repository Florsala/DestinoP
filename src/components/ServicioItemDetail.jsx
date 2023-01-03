import React, { useEffect, useState } from "react";



import { Spinner } from "react-bootstrap";
import { getExcDetails } from "../helpers/getExcDetails";
import ItemDetail from "./ItemDetail";


const ServicioItemDetail = () => {

  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  

const getItemDetails = async () => {

  const details = await getExcDetails();
  setItems(details);
  setLoading(false)

  

}
useEffect(() => {
  getItemDetails();
}, [])



  
  return (loading) ? (
    <>
      <Spinner
        style={{ margin: "50%", marginTop: "200px" }}
        /*  animation="border" */
        variant="primary"
        animation="grow"
      />
    </>
  ) : (
    <>


        <ItemDetail item={item}/> 
      
    </>
  );
};

export default ServicioItemDetail;
