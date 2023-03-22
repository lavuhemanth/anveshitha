import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import  Logo_IMAGE  from '../../assets/logo.png';


function Header() {
  return (
    <section>
      <>
        <div className="newsHeader bg-white">
          <Row className="d-none d-xl-block w-100p ">
            <Col>
              <Container className="cl">
                <img src={Logo_IMAGE} alt={"logo"} height="80px" />
                <div className="App">{/* <p>{new Date()}</p> */}</div>
              </Container>
            </Col>
          </Row>
          <Navbar expand={"md"} className="mb-3 bg">
            <Container className="cl menubar">
              <Navbar.Brand
                href="#"
                className="cl d-block d-md-block d-lg-none d-xl-none"
              >
                <img src={Logo_IMAGE} alt={"logo"} height="50px" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-md`}
                className="mIcon"
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
                className="bg"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    <img src={Logo_IMAGE} alt={"logo"} height="50px" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    defaultActiveKey="/"
                    className="justify-content-left flex-grow-1 pe-3"
                    id="header"
                  >
                    <Nav.Link
                      href="/"
                      className="cl d-none d-md-block d-sm-none d-xsm-none link"
                    >
                      <FontAwesomeIcon icon={faHouse} size="lg" />
                    </Nav.Link>
                    <Nav.Link
                      href="/"
                      className="cl d-block d-sm-block d-md-none link"
                    >
                      <FontAwesomeIcon icon={faHouse} size="lg" />
                      <span className="pl-2">Home</span>
                    </Nav.Link>
                    <Nav.Link href={`/news/homeContent`} className="cl link">
                      రాజకీయం
                    </Nav.Link>
                    <Nav.Link href={`/news/ap`} className="cl link">
                      ఆంధ్రప్రదేశ్
                    </Nav.Link>
                    <Nav.Link href={`/news/tn`} className="cl link">
                      తెలంగాణ
                    </Nav.Link>
                    <Nav.Link href={`/news/homeContent`} className="cl link">
                      జాతీయం
                    </Nav.Link>
                    <Nav.Link href={`/news/sprt`} className="cl link">
                      క్రీడలు
                    </Nav.Link>
                    <Nav.Link href={`/news/ent`} className="cl link">
                      చిత్ర
                    </Nav.Link>
                    <Nav.Link href={`/news/trending`} className="cl link">
                      విద్య
                    </Nav.Link>
                    <Nav.Link href={`/news/trending`} className="cl link">
                      బిజినెస్
                    </Nav.Link>
                    <Nav.Link href={`/news/trending`} className="cl link">
                      ట్రెండింగ్
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      </>
    </section>
  );
}
export default Header;