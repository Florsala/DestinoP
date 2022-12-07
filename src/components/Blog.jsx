import React from "react";
import "../styles/Blog.css";
import monta from "../assets/monta.png";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Blog = () => {
  return (
    <div>
      <div>
        <img
          className="headerImg"
          style={{ filter: "brightness(0.5)" }}
          src={
            "https://destinopatagonia.com/wp-content/uploads/2021/10/ballenas-jorobadas.jpg"
          }
          alt=""
        />
        <img className="headerImg2" src={monta} alt="mount" />

        <div className="headerTitle_blog container-md">
          <h2 className="headerTitle_a_blog">
            información{" "}
            <span className="headerTitle_b_blog">Fin del Mundo</span>{" "}
          </h2>
        </div>
      </div>


<div>
    <h2>blog</h2>
</div>

<Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Historia 1884</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </div>
  );
};

export default Blog;
