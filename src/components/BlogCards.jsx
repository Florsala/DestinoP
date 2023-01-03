import React, { useEffect, useState } from "react";
import "../styles/Blog.css";


import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getBlog } from "../helpers/getBlog";

const BlogCards = () => {

const [blog, setBlog] = useState([]);

const getInfoBlog = async () => {
  const newInfo = await getBlog();
  setBlog(newInfo);
}

useEffect(()=>{
  getInfoBlog()
},[])




  

  return (
    <div>
      <Row xs={1} md={3} className="g-4 mx-5 grid_blog">
        {blog.map((items) => (
          <Link to={`/blog/${blog.id}`} key={items.id}>
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
