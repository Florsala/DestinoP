import React, { useContext, useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "../../styles/Formulario.css";
import cartContext from "../../context/CartContext";
import { AgregarServicios } from "../../helpers/Reserva";

const Formulario = () => {
  const [sendForm, setSendForm] = useState(false);

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
            error.Res_Apellido = "El nombre solo puede contener letras y espacios";
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
          await AgregarServicios(cart, model).then(()=>{
          
          resetForm();
          console.log(model, "model");

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
        })
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
                component={() => <div className="error">{errors.Res_Email} </div>}
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

            <button type="submit">Confirmar Reserva</button>

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
