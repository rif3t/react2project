import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./navbar.css"


function BasicExample() {
  return (
    <div>
    {[ 'sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 nav">
        <Container fluid>
          <Navbar.Brand className="all NavbarBrand" href="#">ⅠⓄⅠ<sub className='sub'>motor's</sub></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="navli" href="/home">Home</Nav.Link>
                <Nav.Link className="navli" href="/motors">bikes</Nav.Link>
                <Nav.Link className="navli" href="/about">about us</Nav.Link>
                <Nav.Link className="navli" href="/login">login</Nav.Link>
              
              </Nav>
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </div>
  );
}

export default BasicExample;