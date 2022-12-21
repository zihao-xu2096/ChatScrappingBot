import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'


export default function NavbarComp() {
  return (
    <Navbar className="nav" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand to="/">LiveStream Chat Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <NavDropdown title="Platforms" id="basic-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Twitch</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">
                Youtube
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Facebook</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action/3.4">
                Separate Link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CustomLink({to, children, ...props}) {
  const path = window.location.pathname

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


