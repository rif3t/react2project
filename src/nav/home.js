import Container from "react-bootstrap/esm/Container"
import logo from "../home.jpg"
import Col from "react-bootstrap/esm/Col"
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./home.css"
import naked from "../naked bikes.jpg"
import sport from "../sport bike.jfif"
import cruse from "../cruse.jfif"
import touring from "../touring.jfif"
import scooter from "../scooter.jpg"
import buggy from "../buggy.jfif"
function Home(){
    return(
        <>
        
    <img src={logo} className="img-fluid img"/>
    <p class="ostore">✪nline <sub>store</sub></p>
        <h1 className="text-center mt-5 mb-5 logtex">Pick up your type ✪f Ride</h1>
    <Container>
        <Row>
            <Col md={6} lg={4} className="mt-3 card ">
            <Card style={{ width: '25rem' }} className="img-fluid image-container">
      <Card.Img variant="top" src={naked}  className="image" />
      <div className="overlay">
            <h2 className="text">naked street bikes</h2>
            <h6 className="text">our collection of amazing bikes is there </h6>
        </div>
    </Card>
            </Col>
            <Col md={6} lg={4} className="mt-3 card">
            <Card style={{ width: '25rem' }} className="img-fluid image-container">
      <Card.Img variant="top" src={sport} className="sportbike image" />
      <div className="overlay">
            <h2 className="text">sport bikes</h2>
            <h6 className="text">our collection of amazing bikes is there </h6>
        </div>
    </Card>
            </Col>
            <Col md={6} lg={4} className="mt-3 card">
            <Card style={{ width: '25rem' }} className="img-fluid image-container">
      <Card.Img variant="top" src={cruse} className="image" />
      <div className="overlay">
            <h2 className="text">crusing bikes</h2>
            <h6 className="text">our collection of amazing bikes is there </h6>
        </div>
    </Card>
            </Col>
            <Col md={6} lg={4} className="mt-3 card">
            <Card style={{ width: '25rem' }} className="img-fluid image-container">
      <Card.Img variant="top" src={touring} className="image"  />
      <div className="overlay">
            <h2 className="text">touring & adventure bikes</h2>
            <h6 className="text">our collection of amazing bikes is there </h6>
        </div>
    </Card>
            </Col>
            <Col md={6} lg={4} className="mt-3 card">
            <Card style={{ width: '25rem' }} className="img-fluid image-container">
      <Card.Img variant="top" src={scooter} className="image" />
      <div className="overlay">
            <h2 className="text">scooters</h2>
            <h6 className="text">our collection of amazing bikes is there </h6>
        </div>
      
    </Card>
            </Col>
            <Col md={6} lg={4} className="mt-3 card">
            <Card style={{ width: '25rem' }} className="img-fluid image-container">
      <Card.Img variant="top" src={buggy}className="image"/>
      <div className="overlay">
            <h2 className="text">buggy & dirt bikes</h2>
            <h6 className="text">our collection of amazing bikes is there </h6>
        </div>
    </Card>
            </Col>
        </Row>
    </Container>


    <h5 className=" text-center mt-5 mb-5 ">this site bikes from <a href="https://sa3dawy.com/">S3DAWY GARAGE </a></h5>

     
        </>
    )
}
export default Home