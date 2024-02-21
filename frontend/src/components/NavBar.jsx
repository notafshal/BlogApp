import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-success-subtle">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="underlined">
              BlogSite
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="underlined">
                Home
              </Link>
              <Link to="/Profile" className="underlined">
                Profile
              </Link>
              <Link to="/Upload" className="underlined">
                Upload
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
