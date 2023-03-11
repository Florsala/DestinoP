import React, { useContext, useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "../../styles/Formulario.css";
import cartContext from "../../context/CartContext";
import { AgregarServicios } from "../../helpers/Reserva";
import { useScrollBy } from "react-use-window-scroll";
import { SpinnerCustom } from "../spinner";

const Formulario = () => {
  const scrollBy = useScrollBy();
  const [sendForm, setSendForm] = useState(false);
  const [loading, setLoading] = useState(false);

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
          Comb_Id: 0
        }}
        validate={(model) => {
         
          const errors = {};

          //validacion Res_Apellido
          if (!model.Res_Apellido) {
            errors.Res_Apellido = "Por favor ingrese su Nombre";
          }
          if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(model.Res_Apellido)) {
            errors.Res_Apellido = "El nombre solo puede contener letras y espacios";
          }

          if (!model.Res_Mail) {
            errors.Res_Mail = "Por favor ingrese su correo";

          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              model.Res_Mail
            )
          ) {
            errors.Res_Mail = "El correo no parece válido";
          }


          return errors;
        }}
        onSubmit={async (model, { resetForm }) => {
          scrollBy({ top: 0, left: 0, behavior: "smooth" })
          setLoading(true)
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
            setLoading(false)
          })
        }}
      >
        {({ values, errors, touched, validateForm, handleSubmit, isSubmitting }) => (
          <Form className="formulario" onSubmit={handleSubmit}>
            <div>
              <Field
                type="text"
                name="Res_Apellido"
                placeholder="Nombre"
                id="Res_Apellido"
                value={values.Res_Apellido}
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
                value={values.Res_Mail}
              />
              <ErrorMessage
                name="Res_Mail"
                component={() => <div className="error">{errors.Res_Mail} </div>}
              />
            </div>

            <div>
              <Field
                type="number"
                name="Res_Telefono"
                placeholder="Telefono"
                id="Res_Telefono"
                value={values.Res_Telefono}
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
                value={values.Res_Obs}
              />
            </div>

            {!loading && <button type="submit" disabled={isSubmitting}>Confirmar Reserva</button>}
            {loading && <SpinnerCustom />}

            {sendForm && (
              <p className="exito"> En breve nos contactaremos con usted</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
