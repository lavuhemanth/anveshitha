import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BannerImageTile({ imgSrc, navigateUrl, title, headline }) {
  return (
    <Container className="banner-title">
      <Link to={navigateUrl}>
        <img className="" src={imgSrc} alt="First slide" />
        <div className="banner-tile-context">
          <span>{title}</span>
        </div>
        <div className="banner-headline-context">
          <span>{headline}</span>
        </div>
      </Link>
    </Container>
  );
}

export default BannerImageTile;;