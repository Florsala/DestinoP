import React, { useEffect, useState } from "react";
import "../styles/Blog.css";

import dataBlog from "../data/dataBlog";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BlogCards = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const data = dataBlog;

        resolve(data);
      }, 2000);
    });
    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [dataBlog]);
  console.log(items);

  return (
    <div>
      <Row xs={1} md={3} className="g-4 mx-5 grid_blog">
        {items.map((items) => (
          <Link to={`/blog/${items.id}`}>
            <Col>
              <Card className="c-container">
                <Card.Img
                  className="card-img-blog"
                  variant="top"
                  src={items.img}
                />
                <div className="overlay">
                  <Button style={{backgroundColor:'#002569'}}> Leer más</Button>
                </div>
                <Card.Body style={{ flexDirection: "column" }}>
                  <Card.Title className="cardBlog c-title">
                    {items.title}
                  </Card.Title>
                  <Card.Text className="cardBlog c-text">
                    {items.text}
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
