import React, { useContext, useEffect, useState } from "react";
import "./Blog.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getBlog } from "../../helpers/getBlog";
import cartContext from "../../context/CartContext";

const BlogCards = () => {
  const {environment } = useContext(cartContext);
  const [etiquetas, setEtiquetas] = useState([]);
    const { idioma, getIdiomaSeccion } = useContext(cartContext);
    useEffect(() => {
      setEtiquetas(getIdiomaSeccion("Blog"));
    }, [idioma]);
const [blog, setBlog] = useState([]);

const getInfoBlog = async () => {
  const newInfo = await getBlog(idioma.id);
  setBlog(newInfo);
}

useEffect(()=>{
  if(idioma.id) getInfoBlog()
},[])



  

  return (
    <div>
      <Row xs={1} md={3} className="g-4 mx-5 grid_blog">
        {blog.map((items) => (
          <Link to={`/blog/${items.id}`} key={items.id}>
            <Col>
              <Card className="c-container">
                <Card.Img
                  className="card-img-blog"
                  variant="top"
                  src={`${items.imagen}`}
                />
                <div className="overlay">
                  <Button style={{backgroundColor:'#002569'}}>{etiquetas[2]?.palabra}</Button>
                </div>
                <Card.Body style={{ flexDirection: "column" }}>
                  <Card.Title className="cardBlog c-title">
                    {items.titulo}
                  </Card.Title>
                  <Card.Text className="cardBlog c-text">
                    {items.copete}
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

export default BlogCards;
