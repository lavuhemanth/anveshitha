import React, { useState, useEffect, useContext } from "react";
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
import { Navigation } from "swiper";
import MyContext from "../../assets/MyContext";

function HomeBanner() {
  const context = useContext(MyContext);
  const [bannerLists, setBannerLists] = useState([]);
  const [newsData, setNewsData] = useState(context);

  useEffect(() => {
    setNewsData(context);
    if (newsData) {
      setBannerLists(newsData["banner"]);
    }
    console.log(newsData, 'Banner');
  }, [newsData, context])
  
  return (
    <>
      <Container fluid className="container-bg commonFirstSec HomeBanSec py-5 px-3">
        <Row className="d-none d-md-block">
          <h2>రాజకీయం & జాతీయం</h2>
          <Col className="pt-3">
            <Swiper
              speed="400"
              spaceBetween={30}
              slidesPerView={3}
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
        <Row className="d-block d-sm-block d-md-none">
          <Col>
            <Swiper
              speed="600"
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
