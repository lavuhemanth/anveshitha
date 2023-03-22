import React from "react";
import { Container} from "react-bootstrap";
import Fb from '../../assets/logoicons/Png/fb.png'
import Insta from "../../assets/logoicons/Png/insta.png";
import Twt from "../../assets/logoicons/Png/twt.png";
import Yt from "../../assets/logoicons/Png/yt.png";


import Logo_IMAGE from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg footer">
      <Container className="cl pt-5 pb-5" fluid>
        <div className="d-flex footer-container footer-justify-center footer-column">
          <div className="br-2px px-4">
            <a href={`/news/homeContent`} className="cl link">
              రాజకీయం
            </a>
          </div>
          <div className="br-2px px-4">
            <a href={`/news/ap`} className="cl link">
              ఆంధ్రప్రదేశ్
            </a>
          </div>
          <div className="br-2px px-4">
            <a href={`/news/tn`} className="cl link">
              తెలంగాణ
            </a>
          </div>
          <div className="br-2px px-4">
            <a href={`/news/homeContent`} className="cl link">
              జాతీయం
            </a>
          </div>
          <div className="br-2px px-4">
            <a href={`/news/sprt`} className="cl link">
              క్రీడలు
            </a>
          </div>
          <div className="br-2px px-4">
            <a href={`/news/ent`} className="cl link">
              చిత్ర
            </a>
          </div>
          <div className="br-2px px-4">
            <a href={`/news/trending`} className="cl link">
              విద్య
            </a>
          </div>
          <div className="br-2px px-4">
            <a href={`/news/trending`} className="cl link">
              బిజినెస్
            </a>
          </div>
          <div className="px-4">
            <a href={`/news/trending`} className="cl link">
              ట్రెండింగ్
            </a>
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
