import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link href='/book/list'>Add Books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar