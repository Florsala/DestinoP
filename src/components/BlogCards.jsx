import React, { useEffect, useState } from "react";
import "../styles/Blog.css";

import dataBlog from "../data/dataBlog";
import {  Spinner } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BlogCards = () => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
  fetch("http://turismo.elemsoft.net/webapi/api/Blog/GetListByIdioma?id=1")
  .then(res => res.json())
  .then(
    (result) => {
      setLoading(true);
      setItems(result);

  },
  (error) => {
    setLoading(true);
    setError(error);

  }
  )
}, [])

if(error){
  return <div>ha surgido un error</div>
} else if (!loading){
   return <div> <Spinner
      style={{ margin: "50%", marginTop: "200px" }}
      variant="primary"
      animation="grow"
    />
  </div>

} else {

  return (
    <div>
      <Row xs={1} md={3} className="g-4 mx-5 grid_blog">
        {items.msg.map((items) => (
          <Link to={`/blog/${items.id}`} key={items.id}>
            <Col>
              <Card className="c-container">
                <Card.Img
                  className="card-img-blog"
                  variant="top"
                  src={items.imagen}
                />
                <div className="overlay">
                  <Button style={{backgroundColor:'#002569'}}> Leer más</Button>
                </div>
                <Card.Body style={{ flexDirection: "column" }}>
                  <Card.Title className="cardBlog c-title">
                    {items.titulo}
                  </Card.Title>
                  <Card.Text className="cardBlog c-text">
                    {items.texto}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </div>
  );
};
};
export default BlogCards;
