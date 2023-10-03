import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'

const Navbars = () => {
  return (
   <Container fluid>
     <Row>
     <Navbar expand="lg" className="navbar" id="navs">
      <Container>
        <Navbar.Brand href="" className='logo'>CRUD-OPERATIONS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link as={Link} to="" className='h' >CREATE</Nav.Link>
            <Nav.Link as={Link} to="/read" className='h' >READ</Nav.Link>
            <Nav.Link as={Link} to="/update"  className='h' >UPDATAD</Nav.Link>
            <Nav.Link as={Link} to="/login"  className='h' >LOGIN</Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </Row>
   </Container>
  )
}

export default Navbars