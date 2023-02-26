import React, { useEffect, useState } from "react";



import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getExcDetails } from "../../helpers/getExcDetails";
import { getPaquetesById } from "../../helpers/getPaquetes";
import ItemDetail from "./ItemDetail";


const PaqueteItemDetail = () => {

    const { id } = useParams();

    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    const getItemDetails = async () => {

        getPaquetesById(1, id).then((response) => {
            setItems(response.data.msg[0]);
            setLoading(false)
        });




    }
    useEffect(() => {
        getItemDetails();
    }, [id])




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
