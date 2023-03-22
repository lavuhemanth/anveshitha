import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import newsData from "../../../assets/data";
var screen = Screen;

function HomeTrending() {
  const [bannerLists, setBannerLists] = useState([]);
  const [screenWidth, setScreenWidth] = useState(2)

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };

  function screenResize() {
    if (screen.width < 900) {
      setScreenWidth(1);
    }
  }
  useEffect(() => {     
      setBannerLists(newsData['trending']);
    }, []);

    return (
      <Container fluid className="mb-160x" onResize={() => screenResize()}>
        <Row className="my-3 py-2 ">
          <Col md={3} className="p-3 sec-cartoon mb-30x">
            <Tabs
              defaultActiveKey="home"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="home" title="నేటి కార్టూన్">
                <img
                  src={
                    "https://www.sakshi.com/sites/default/files/styles/storypage_main/public/article_images/2022/01/28/Cot.jpg?itok=hEvlmGhO"
                  }
                  alt={"cartoon"}
                  width="100%"
                  height={"400px"}
                />
              </Tab>
              <Tab eventKey="profile" title="మరిన్ని చుడండి">
                <img
                  src={
                    "http://3.bp.blogspot.com/-07bdI0pQVfQ/UDXeFUcVLWI/AAAAAAAADc0/0FvF-1W4euc/s640/23-8cart2.jpg"
                  }
                  alt={"cartoon"}
                  width="100%"
                  height={"400px"}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col md={9} className="sec-trending mb-160x">
            <div className="p-3 sec-trending-content">
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