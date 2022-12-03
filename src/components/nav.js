import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JANNA DONNA RACHEL MESAK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">ABOUT ME</Nav.Link>
            <Nav.Link href="#profil">PROFILE</Nav.Link>
            <Nav.Link href="#skil">SKILLS</Nav.Link>
            <Nav.Link href="#edu">EDUCATION</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;