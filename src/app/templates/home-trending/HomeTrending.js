import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import MyContext from "../../../assets/MyContext";

var screen = Screen;

function HomeTrending() {
  const [bannerLists, setBannerLists] = useState([]);
  const [screenWidth, setScreenWidth] = useState(2)
  const context = useContext(MyContext);
  const [newsData, setNewsData] = useState(context);
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };

  function screenResize() {
    if (screen.width < 900) {
      setScreenWidth(1);
    }
  }
  useEffect(() => {    
    setNewsData(context);
      setBannerLists(newsData['trending']);
    }, [newsData, context]);

    return (
      <Container fluid className="mb-160x HomeTredSec" onResize={() => screenResize()}>
        <Row className="my-3">
          {newsData?.cartoon_tabs?.length && (
          <Col md={3} className="p-3 sec-cartoon mb-30x">
            <Tabs
              defaultActiveKey="one"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              {
                newsData?.cartoon_tabs?.map(item => (
                  <Tab key={item.tab_key} eventKey={item.tab_key} title={item.tab_name}>
                    <img
                      src={item.img_url}
                      alt={"cartoon"}
                      width="100%"
                      height={"400px"}
                      />
                  </Tab>
                    
                ))
              }
            </Tabs>
          </Col>
          ) }
          <Col md={9} className="sec-trending mb-160x">
            <div className="py-5 px-3 sec-trending-content">
              <h2 className="text-center p-2">ట్రెండింగ్ అప్‌డేట్‌లు</h2>
              <div>
                <Swiper
                  slidesPerView={screenWidth}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                >
                  {bannerLists.map((image) => (
                    <SwiperSlide key={image.id} className="img-container">
                      <Link to={`/content/${image?.category}/${image?.slug}`}>
                        <div className="image-container">
                          <img src={image?.img_url} alt="temp" />
                          <p className="bottom-text p-2">{image?.headline}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default HomeTrending;