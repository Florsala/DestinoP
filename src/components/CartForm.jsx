import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { useState } from "react";

export const CartForm = () => {
  const [sentForm, setSentForm] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    setSentForm(true);}

  const {
    formState,onInputChange,onResetForm,username,email,telephone,message,} = useForm({
    username: "",
    email: "",
    telephone: "",
    message: "",
  });

  return (
    <Form className="form-cart" onSubmit={sendForm} >
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="username"
          placeholder="Nombre y apellido"
          value={username}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="telephone"
          name="telephone"
          placeholder="Teléfono"
          value={telephone}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Comentarios"
          name="message"
          value={message}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onResetForm}>
        Confirmar reserva
      </Button>

      {sentForm && (
        <div style={{ display: "flex", color: "black", alignItems: "center" }}>
          <p className="exito">¡Gracias por tu mensaje!</p>
        </div>
      )}
    </Form>
  );
};
