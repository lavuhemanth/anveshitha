import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
import BannerImageTile from "./banner-tile/BannerImageTIle";
// import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import newsData from "../../assets/data";

function HomeBanner() {
  // const [index, setIndex] = useState(0);
  const [bannerLists, setBannerLists] = useState([]);

  useEffect(() => {
    setBannerLists(newsData["banner"]);
  }, [])
  
  return (
    <>
      <Container fluid className="container-bg commonFirstSec HomeBanSec py-5 px-3">
        <Row className="d-none d-md-block">
          <h2>Add A Small Heading Hear</h2>
          <Col className="pt-3">
            <Swiper
              speed="400"
              spaceBetween={30}
              slidesPerView={3}
              navigation={true}
              pagination={{ clickable: true }}
              className="mySwiper"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
            >
              {bannerLists.map((image) => (
                <SwiperSlide key={image.id}>
                  <BannerImageTile
                    imgSrc={image?.img_url}
                    navigateUrl={`/content/${image.category}/${image.slug}`}
                    title={image?.headline_subject}
                    headline={image?.headline}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
        <Row className="d-block d-sm-block d-md-none">
          <Col>
            <Swiper
              speed="400"
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              className="mySwiper"
              modules={[Navigation]}
            >
              {bannerLists.map((image) => (
                <SwiperSlide key={image.id}>
                  <BannerImageTile
                    imgSrc={image?.img_url}
                    navigateUrl={`/content/${image.category}/${image.slug}`}
                    title={image?.headline_subject}
                    headline={image?.headline}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeBanner;
