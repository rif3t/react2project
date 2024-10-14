import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import "./about.css"
import Col from "react-bootstrap/esm/Col"
import repair from "../repair1.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import repair2 from "../repair2.jpg"
import repair3 from "../repair3.jfif"
import repair4 from "../repair14.jpg"

function About(){
    return(
        <>
       <div className="about-head">h11</div>
       <Container className="mt-4">
        <Row>
            <Col md={6} lg={6} className=" repair">
            <Card style={{ width: '35rem' }} className="img-fluid">
      <Card.Img variant="top" src={repair}  />
      <Card.Body>
        <Card.Title>best service</Card.Title>
        <Card.Text>
        We have the best experts in repair your bike will be like brand new
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

            <Col md={6} lg={6} className=" repair mt-5">
            <Card style={{ width: '35rem' }} className="img-fluid">
      <Card.Img variant="top" src={repair2}  />
      <Card.Body>
        <Card.Title>Imported spare parts</Card.Title>
        <Card.Text>
        We have spare parts for all motorcycles, and if we don't have them, we can require them from the factory.
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

            <Col md={6} lg={6} className=" repair mt-5">
            <Card style={{ width: '35rem' }} className="img-fluid">
      <Card.Img variant="top" src={repair3}  />
      <Card.Body>
        <Card.Title>modify</Card.Title>
        <Card.Text>
        lower bike ? best exhaust ! down force speed limit ⚠️ modifying bikes has no limit come visit us to see your bike beast

        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

            <Col md={6} lg={6} className=" repair mt-1">
            <Card style={{ width: '35rem' }} className="img-fluid">
      <Card.Img variant="top" src={repair4}  />
      <Card.Body>
        <Card.Title>barndnew ?</Card.Title>
        <Card.Text>
        We have contracts with many companies abroad, we can ship any motorcycle you want from any country

        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            
        </Row>
       </Container>

       <Container className="mt-4">
        <Row>
       <Col lg={6} className="img-fluid">
       <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3454.2608081079866!2d30.986859048467863!3d30.029374679033193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAxJzQ1LjgiTiAzMMKwNTknMjEuMiJF!5e0!3m2!1sen!2seg!4v1726684107309!5m2!1sen!2seg" style={{ width:"38rem", height:"500px", style:"border: 0 ", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} className="img-fluid"></iframe>
       </Col>
       <Col className="mt-4">
       <span className="contact">Contact:</span> <h1 className="wee">014201458715</h1>
       <span className="contact">E-mail:</span> <h1>motorsport@gmail.com</h1>
       <div class="link-container">
        <a href="https://www.instagram.com/mohamed_rif3t/" class="instagram-link">Follow Us on Instagram</a>
    </div>
       </Col>
       </Row>
       </Container>
        </>
    )
}
export default About