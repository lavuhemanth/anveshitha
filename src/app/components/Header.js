import React, { useEffect, useState  } from "react";
import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import  Logo_IMAGE  from '../../assets/logo.png';
import { IS_BOOLEAN, SLUGS } from "../../mapper";


function Header() {
  const [isAdmin, setIsAdmin] = useState(IS_BOOLEAN['FALSE']);
  
  useEffect(() => {
    // Create a new URLSearchParams object
    const urlParams = new URLSearchParams(window.location.search);

    // Get the values of the 'id' and 'category' parameters
    const slug = urlParams.get('admin_slug');

    if (slug === SLUGS['admin']) {
      setIsAdmin(true);
    }
    

  }, []);
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
            {!isAdmin && (<Container className="cl menubar">
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
                    <Nav.Link href={`/news/politics`} className="cl link">
                      రాజకీయం
                    </Nav.Link>
                    <Nav.Link href={`/news/ap`} className="cl link">
                      ఆంధ్రప్రదేశ్
                    </Nav.Link>
                    <Nav.Link href={`/news/telangana`} className="cl link">
                      తెలంగాణ
                    </Nav.Link>
                    <Nav.Link href={`/news/international`} className="cl link">
                      జాతీయం
                    </Nav.Link>
                    <Nav.Link href={`/news/sports`} className="cl link">
                      క్రీడలు
                    </Nav.Link>
                    <Nav.Link href={`/news/entertainment`} className="cl link">
                      చిత్ర
                    </Nav.Link>
                    <Nav.Link href={`/news/education`} className="cl link">
                      విద్య
                    </Nav.Link>
                    <Nav.Link href={`/news/business`} className="cl link">
                      బిజినెస్
                    </Nav.Link>
                    <Nav.Link href={`/news/trending`} className="cl link">
                      ట్రెండింగ్
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>)}
            {isAdmin && (
              <Container  className="cl menubar">
                    <Nav.Link href={`/admin-board?admin_slug=admin`} className="cl link">
                      Manage Home
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/politics?admin_slug=admin`} className="cl link">
                      రాజకీయం
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/ap?admin_slug=admin`} className="cl link">
                      ఆంధ్రప్రదేశ్
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/telangana?admin_slug=admin`} className="cl link">
                      తెలంగాణ
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/international?admin_slug=admin`} className="cl link">
                      జాతీయం
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/sports?admin_slug=admin`} className="cl link">
                      క్రీడలు
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/entertainment?admin_slug=admin`} className="cl link">
                      చిత్ర
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/education?admin_slug=admin`} className="cl link">
                      విద్య
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/business?admin_slug=admin`} className="cl link">
                      బిజినెస్
                    </Nav.Link>
                    <Nav.Link href={`/admin-board/trending?admin_slug=admin`} className="cl link">
                      ట్రెండింగ్
                    </Nav.Link>
              </Container>
            )}
          </Navbar>
        </div>
      </>
    </section>
  );
}
export default Header;