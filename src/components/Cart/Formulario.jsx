import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import '../../styles/Formulario.css'

const Formulario = () => {
  const [sendForm, setSendForm] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          id: 0,
          Res_AMedida: "",
        apellido: "",
          email: "",
          telefono: "",
          detalle: "",
        }}
        validate={(model) => {
          const error = {};

          //validacion Res_Apellido
          if (!model.apellido) {
            error.apellido = "Por favor ingrese su Nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(model.apellido)) {
            error.apellido = "El nombre solo puede contener letras y espacios";
          }

          if (!model.email) {
            error.email = "Por favor ingrese su correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              model.email
            )
          ) {
            error.email = "El correo no parece válido";
          }

          return error;
        }}

        onSubmit =  {async (model, { resetForm }) => {
          resetForm();
          console.log(model, 'model');

          try{
            let config = {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                model})

            }
            let res = await fetch('http://turismo.elemsoft.net/webapi/api/Reservas/ConfirmarReserva', config);
            let json = await res.json()

            console.log(json);
           } catch (error) {
            
           }




          setSendForm(true);

          setTimeout(() => setSendForm(false), 5000);
        }}
      >
        {({ values, errors, touched }) => (
          <Form  className="formulario">
            <div>
              <Field
                type="text"
                name="apellido"
                placeholder="Nombre"
                id="apellido"
                required
              />
              <ErrorMessage
                name="apellido"
                component={() => <div className="error">{errors.apellido} </div>}
              />
            </div>

            <div >
              
              <Field
                type="email"
                name="email"
                placeholder="Correo"
                id="email"
                required
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email} </div>}
              />
            </div>

            <div>
              <Field
                type="number"
                name="telefono"
                placeholder="Telefono"
                id="telefono"
                required
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
                name="detalle"
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



