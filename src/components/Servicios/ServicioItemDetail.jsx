import React, { useContext, useEffect, useState } from "react";



import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import cartContext from "../../context/CartContext";
import { getExcDetails } from "../../helpers/getExcDetails";
import ItemDetail from "./ItemDetail";


const ServicioItemDetail = () => {
  const { idioma } = useContext(cartContext);
  const {id} = useParams();

  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  

const getItemDetails = async () => {

  const details = await getExcDetails(id, idioma.id);
  setItems(details);
  setLoading(false)

  

}
useEffect(() => {
  if(idioma) getItemDetails();
}, [id, idioma])



  
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


        <ItemDetail item={item} id={id}/> 
      
    </>
  );
};

export default ServicioItemDetail;
