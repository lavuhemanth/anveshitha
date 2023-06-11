import React, { useEffect, useState  } from "react";
import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import  Logo_IMAGE  from '../../assets/logo.png';
import { IS_BOOLEAN, SLUGS } from "../../mapper";
import { Link } from "react-router-dom";
import TodayDate from "../templates/today-date/TodayDate";


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
                <div className="App"><TodayDate /></div>
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
                    className="me-auto justify-content-left flex-grow-1 pe-3"
                    id="header"
                  >
                    <Link to={`/`} className="cl d-none d-md-block d-sm-none d-xsm-none link active">
                        <FontAwesomeIcon icon={faHouse} size="lg" />
                    
                      </Link>
                    <Link to={`/`} className="link d-block d-sm-block d-md-none cl">
                      <FontAwesomeIcon icon={faHouse} size="lg" className="cl"/>
                      <span className="pl-5">Home</span>
                      </Link>
                      <Link to={`/news/political`} className="link cl">
                          రాజకీయం
                      </Link>
                      <Link to={`/news/ap`} className="link cl">
                          ఆంధ్రప్రదేశ్
                      </Link>
                      <Link to={`/news/tn`} className="link cl">
                          తెలంగాణ
                      </Link>
                      <Link to={`/news/international`} className="link cl">
                          జాతీయం
                      </Link>
                      <Link to={`/news/sports`} className="link cl">
                          క్రీడలు
                      </Link>
                      <Link to={`/news/entertainment`} className="link cl">
                          చిత్ర
                      </Link>
                      <Link to={`/news/education`} className="link cl">
                          విద్య
                      </Link>
                      <Link to={`/news/business`} className="link cl">
                          బిజినెస్
                      </Link>
                      <Link to={`/news/trending`} className="link cl">
                          ట్రెండింగ్
                      </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>)}
            {isAdmin && (
              <Container  className="cl menubar">
                 
                    <Nav.Link href={`/admin-board?admin_slug=admin`} className="cl link">
                      Generate News
                    </Nav.Link>
                    <Nav.Link href={`/home-management?admin_slug=admin`} className="cl link">
                      Manage Home
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
              </Container>
            )}
          </Navbar>
        </div>
      </>
    </section>
  );
}
export default Header;