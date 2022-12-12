import React from 'react';
import "../styles/Blog.css";


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ushuaia from '../assets/ush-am.jpg';
import ushhist from '../assets/ush-hist.jpg';

const BlogCards = () => {
  return (
    <div>
<Row xs={1} md={3} className="g-4 mx-5 grid_blog">
      
      <Col>
        <Card >
          <Card.Img variant="top" src={ushhist} />
          <Card.Body style={{flexDirection:'column'}}>
            <Card.Title className="cardBlog">Historia 1884</Card.Title>
            <Card.Text className="cardBlog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            At tellus at urna condimentum. Urna duis convallis convallis tellus id interdum velit. 
            Ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet enim tortor at auctor urna nunc id cursus.
             Ut tellus elementum sagittis vitae et leo duis. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card >
          <Card.Img variant="top" src={ushhist} />
          <Card.Body style={{flexDirection:'column'}}>
            <Card.Title className="cardBlog">Interés general</Card.Title>
            <Card.Text className="cardBlog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            At tellus at urna condimentum. Urna duis convallis convallis tellus id interdum velit. 
            Ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet enim tortor at auctor urna nunc id cursus.
             Ut tellus elementum sagittis vitae et leo duis. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card >
          <Card.Img variant="top" src="https://destinopatagonia.com/wp-content/uploads/2021/10/IMG_3531.jpg" />
          <Card.Body style={{flexDirection:'column'}}>
            <Card.Title className="cardBlog">Bosque nativo</Card.Title>
            <Card.Text className="cardBlog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            At tellus at urna condimentum. Urna duis convallis convallis tellus id interdum velit. 
            Ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet enim tortor at auctor urna nunc id cursus.
             Ut tellus elementum sagittis vitae et leo duis. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card >
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
          <Card.Body style={{flexDirection:'column'}}>
            <Card.Title className="cardBlog">Gastronomía local</Card.Title>
            <Card.Text className="cardBlog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            At tellus at urna condimentum. Urna duis convallis convallis tellus id interdum velit. 
            Ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet enim tortor at auctor urna nunc id cursus.
             Ut tellus elementum sagittis vitae et leo duis. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card >
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1639994703448-a3a8cb9c676d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
          <Card.Body style={{flexDirection:'column'}}>
            <Card.Title className="cardBlog">Deporte</Card.Title>
            <Card.Text className="cardBlog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            At tellus at urna condimentum. Urna duis convallis convallis tellus id interdum velit. 
            Ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet enim tortor at auctor urna nunc id cursus.
             Ut tellus elementum sagittis vitae et leo duis. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card >
          <Card.Img variant="top" src="https://www.interpatagonia.com/plantillas/21787-00Li.jpg" />
          <Card.Body style={{flexDirection:'column'}}>
            <Card.Title className="cardBlog">Alojamientos</Card.Title>
            <Card.Text className="cardBlog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            At tellus at urna condimentum. Urna duis convallis convallis tellus id interdum velit. 
            Ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet enim tortor at auctor urna nunc id cursus.
             Ut tellus elementum sagittis vitae et leo duis. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
   
  </Row>

{/* <Row xs={1} md={3} className="g-4 mx-5 grid_blog">
    {Array.from({ length: 6 }).map((_, idx) => (
      <Col>
        <Card >
          <Card.Img variant="top" src={ushhist} />
          <Card.Body >
            <Card.Title className="cardBlog">Historia 1884</Card.Title>
            <Card.Text className="cardBlog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            At tellus at urna condimentum. Urna duis convallis convallis tellus id interdum velit. 
            Ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet enim tortor at auctor urna nunc id cursus.
             Ut tellus elementum sagittis vitae et leo duis. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row> */}

    </div>
  )
}

export default BlogCards