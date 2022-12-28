import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import dataTours from "../data/dataTours";
//borrar


import { Spinner } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

//aca falta traer la API de Excursiones

const ServicioItemDetail = () => {
  const [item, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const { nombre } = useParams();

const fetchItemDetails = () => {
  fetch(`http://turismo.elemsoft.net/webapi/api/Excursiones/GetListByIdioma?id=1/${nombre}`)
  .then(res => res.json())
  .then(
    (result) => {
      setLoading(true);
      setItems(result);

  })
};


useEffect(() =>{
  
  fetchItemDetails();
 
}, []);


/*   const [item, setItems] = useState({});

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getItems = new Promise((resolve) => {
    setTimeout(() => {
      const data = id ? dataTours.find((item) => item.id === id) : dataTours;

      resolve(data);
    }, 2000);
  });
  console.log(item);

  useEffect(() => {
    getItems.then((res) => setItems(res)).finally(() => setLoading(false));
  }, [id]);
 */
  return (!loading) ? (
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
