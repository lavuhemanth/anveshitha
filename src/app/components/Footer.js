import React from "react";
import { Container} from "react-bootstrap";
import Fb from '../../assets/logoicons/Png/fb.png'
import Insta from "../../assets/logoicons/Png/insta.png";
import Twt from "../../assets/logoicons/Png/twt.png";
import Yt from "../../assets/logoicons/Png/yt.png";


import Logo_IMAGE from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg footer">
      <Container className="cl pt-5 pb-5" fluid>
        <div className="d-flex footer-container footer-justify-center footer-column">
          <div className="br-2px px-4">
            <Link to={`/news/political`} className="cl link">
              రాజకీయం
            </Link>
          </div>
          <div className="br-2px px-4">
            <Link to={`/news/ap`} className="cl link">
              ఆంధ్రప్రదేశ్
            </Link>
          </div>
          <div className="br-2px px-4">
            <Link to={`/news/tn`} className="cl link">
              తెలంగాణ
            </Link>
          </div>
          <div className="br-2px px-4">
            <Link to={`/news/international`} className="cl link">
              జాతీయం
            </Link>
          </div>
          <div className="br-2px px-4">
            <Link to={`/news/sports`} className="cl link">
              క్రీడలు
            </Link>
          </div>
          <div className="br-2px px-4">
            <Link to={`/news/entertainment`} className="cl link">
              చిత్ర
            </Link>
          </div>
          <div className="br-2px px-4">
            <Link to={`/news/education`} className="cl link">
              విద్య
            </Link>
          </div>
          <div className="br-2px px-4">
            <Link to={`/news/business`} className="cl link">
              బిజినెస్
            </Link>
          </div>
          <div className="px-4">
            <Link to={`/news/trending`} className="cl link">
              ట్రెండింగ్
            </Link>
          </div>
        </div>
        <hr></hr>
        <div className="footer-container py-1 text-center">
          <p>
            అంతర్జాతీయ ప్రకటనలు కోసం దయచేసి సంప్రదించండి | For International
            advertisement and sales please contact Mailicon.
          </p>
        </div>
        <div className="d-flex footer-container footer-justify-even footer-column">
          <div className="py-2 text-center">
            <img src={Logo_IMAGE} alt={"logo"} height="80px" />
          </div>
          <div className="py-2 text-center">
            <div className="d-flex pt-2">
              <div className="p-1">
                <img src={Fb} alt="socialIcon" height={"50px"} />
              </div>
              <div className="p-1">
                <img src={Insta} alt="socialIcon" height={"50px"} />
              </div>
              <div className="p-1">
                <img src={Twt} alt="socialIcon" height={"50px"} />
              </div>
              <div className="p-1">
                <img src={Yt} alt="socialIcon" height={"50px"} />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="d-flex footer-container footer-justify-center">
          <p className="">
            <small>
              &copy; {new Date().getFullYear()} Anveshitha. All Rights Reserved.
            </small>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
