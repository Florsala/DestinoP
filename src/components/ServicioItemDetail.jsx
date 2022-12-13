import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dataTours from "../data/dataTours";


import { Spinner } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

const ServicioItemDetail = () => {
  const [item, setItems] = useState({});

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

  return loading ? (
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
