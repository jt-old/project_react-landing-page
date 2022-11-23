import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src='/logo.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='Logo'
          />
        </Navbar.Brand>
        <Nav className='me-end'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
