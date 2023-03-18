import React, { useContext, useEffect, useState } from "react";



import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import cartContext from "../../context/CartContext";
import { getPaquetesById } from "../../helpers/getPaquetes";
import ItemDetail from "./ItemDetail";


const PaqueteItemDetail = () => {
    const { idioma } = useContext(cartContext);
    const { id } = useParams();

    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    const getItemDetails = async () => {

        getPaquetesById(idioma.id, id).then((response) => {
            setItems(response.data.msg[0]);
            setLoading(false)
        });




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


            <ItemDetail item={item} id={id} isPaquete={true}/>

        </>
    );
};

export default PaqueteItemDetail;
