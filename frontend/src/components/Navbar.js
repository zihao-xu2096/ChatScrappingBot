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
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
            <Link className="nav-link" to="/FAQ">FAQ</Link>
            <NavDropdown title="Platforms" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/twitch">Twitch</Link>
              <NavDropdown.Item to="#action/3.2">Youtube</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Facebook</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action/3.4">Separate Link</NavDropdown.Item>
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


