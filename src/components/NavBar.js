import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';







export const NavBar = () => {
  return (
    <>
   <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Weather</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  </>
  )
}



export default NavBar;
