import React, { useContext, useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "../../styles/Formulario.css";
import cartContext from "../../context/CartContext";
import { AgregarServicios } from "../../helpers/Reserva";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";
import Modal from 'react-bootstrap/Modal';


const Formulario = () => {
  const [sendForm, setSendForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [smShow, setSmShow] = useState(false);


  const { cart, addTotal, clearCart } = useContext(cartContext);

  return (
    <>
      <Formik
        initialValues={{
          Res_Id: 0,
          Res_Apellido: "",
          Res_Mail: "",
          Res_Telefono: "",
          Res_Obs: "",
        }}
        validate={(model) => {
          const error = {};

          //validacion Res_Apellido
          if (!model.Res_Apellido) {
            error.Res_Apellido = "Por favor ingrese su Nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(model.Res_Apellido)) {
            error.Res_Apellido =
              "El nombre solo puede contener letras y espacios";
          }

          if (!model.Res_Mail) {
            error.Res_Mail = "Por favor ingrese su correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              model.Res_Mail
            )
          ) {
            error.Res_Mail = "El correo no parece válido";
          }

          return error;
        }}
        onSubmit={async (model, { resetForm }) => {
          setLoading(true);
          await AgregarServicios(cart, model).then(() => {
            resetForm();
            clearCart();

            /* try {
            let config = {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model,
              }),
            };
            let res = await fetch(
              "http://turismo.elemsoft.net/webapi/api/Reservas/ConfirmarReserva",
              config
            );
            let json = await res.json();

            console.log(json)

          } catch (error) {} */

            setSendForm(true);

            setTimeout(() => setSendForm(false), 3000);
            setLoading(false);
          });
        }}
      >
        {({ values, errors, touched }) => (
          <Form className="formulario">
            <div>
              <Field
                type="text"
                name="Res_Apellido"
                placeholder="Nombre"
                id="Res_Apellido"
                required
              />
              <ErrorMessage
                name="Res_Apellido"
                component={() => (
                  <div className="error">{errors.Res_Apellido} </div>
                )}
              />
            </div>

            <div>
              <Field
                type="Res_Mail"
                name="Res_Mail"
                placeholder="Correo"
                id="Res_Mail"
                required
              />
              <ErrorMessage
                name="Res_Mail"
                component={() => (
                  <div className="error">{errors.Res_Email} </div>
                )}
              />
            </div>

            <div>
              <Field
                type="number"
                name="Res_Telefono"
                placeholder="Telefono"
                id="Res_Telefono"
                required
              />
              <ErrorMessage
                name="Res_Telefono"
                component={() => (
                  <div className="error">{errors.Res_Telefono} </div>
                )}
              />
            </div>

            <div>
              <Field
                name="Res_Obs"
                as="textarea"
                cols="40"
                rows="3"
                aria-required="true"
                aria-invalid="false"
                placeholder="Comentarios"
              />
            </div>

            {!loading && (
              <>
                <Button type="submit" onClick={() => setSmShow(true)}>
                  Confirmar Reserva
                </Button>

                <Modal
                style={{top: '20%',color: 'var(--blue1-color)' }}
                  size="sm"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton
                 
                 >
                    <Modal.Title id="example-modal-sizes-title-sm">
                      ¡Muchas gracias!
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{textAlign: 'center'

                  }}> En breve nos contactaremos con usted</Modal.Body>
                </Modal>
              </>
            )}
            {loading && (
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
