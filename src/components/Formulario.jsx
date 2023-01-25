import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import '../styles/Formulario.css'

const Formulario = () => {
  const [sendForm, setSendForm] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          telefono: "",
          consulta: "",
        }}
        validate={(valores) => {
          const error = {};

          //validacion nombre
          if (!valores.nombre) {
            error.nombre = "Por favor ingrese su nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            error.nombre = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.correo) {
            error.correo = "Por favor ingrese su correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            error.correo = "El correo no parece válido";
          }

          return error;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("enviado");
          setSendForm(true);
          setTimeout(() => setSendForm(false), 5000);
        }}
      >
        {({ values, errors, touched }) => (
          <Form  className="formulario">
            <div>
              <Field
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre} </div>}
              />
            </div>

            <div >
              
              <Field
                type="email"
                name="correo"
                placeholder="Correo"
                id="correo"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo} </div>}
              />
            </div>

            <div>
              <Field
                type="number"
                name="telefono"
                placeholder="Telefono"
                id="telefono"
              />
              <ErrorMessage
                name="telefono"
                component={() => (
                  <div className="error">{errors.telefono} </div>
                )}
              />
            </div>

          
            <div>
              <Field
                name="mensaje"
                as="textarea"
                cols="40"
                rows="3"
                aria-required="true"
                aria-invalid="false"
                placeholder="Comentarios"
              />
            </div>

            <button type="submit">Enviar</button>

            {sendForm && <p className="exito"> En breve nos contactaremos con usted</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;



