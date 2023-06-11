import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Link, useParams } from "react-router-dom";
import MyContext from "../../../assets/MyContext";

function HomeContent({ categoryNews }) {
  const [selectedContent, setSelectedContent] = useState({});
  const [newsList, setNewsList] = useState([]);
  const { slug, category } = useParams();
  const context = useContext(MyContext);
  const [newsData, setNewsData] = useState(context);

  useEffect(() => {
      setNewsData(context);
     if (slug && category) {
       setNewsList(newsData[category]);
       setSelectedContent(newsList.filter((item) => item.slug === slug)[0]);
     } else if (categoryNews) {
       setNewsList(categoryNews);
       setSelectedContent(categoryNews[0]);
     } else {
       setNewsList(newsData["homeContent"]);
       setSelectedContent(newsList[0]);
     }
  }, [slug, category, newsList, categoryNews, newsData, context]);

  const handleSelectContent = (data) => { 
    setSelectedContent(data);
    
  };

  return (
    <Container className=" text-format home-content commonFirstSec">
      <div className="d-none d-md-block">
        <Row>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <h2 className="my-3">{selectedContent?.headline}</h2>
                <img src={selectedContent?.img_url} width="100%" alt="banner" />
              </Col>
            </Row>
            {slug && (
            <Row className="py-2">
              <Col  md={12}>
                <h6>
                  <Badge bg="secondary" className="mx-1">{selectedContent?.date}</Badge> 
                  <Badge bg="secondary" className="mx-1">{selectedContent?.reported_by}</Badge> 
                  <Badge bg="secondary" className="mx-1">{selectedContent?.address_line}</Badge> 
                </h6>
              </Col>
            </Row>
            )}
            <Row className="py-3">
              <Col md={12}>
                {selectedContent?.subjectsList?.map((subject, i) => (
                    <p className="my-2" key={i}>
                      {subject}
                    </p>
                ))}
                {!slug && (
                  <Link
                    to={`/content/${selectedContent?.category}/${selectedContent?.slug}`}
                    className="read-link"
                  >
                    ఇంకా చదవండి..
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div className="headline-format-sec">
              <div className="head-line bb-solid">
                <p className="headline-title">ముఖ్యాంశాలు</p>
              </div>
              <div className="headline-list" id="style-1">
                <ul className="m-0">
                {!slug && (
                  <>
                  {newsList.map((news, i) => (
                    <li
                      key={news.id}
                      onClick={() => handleSelectContent(news)}
                      className="bb-solid headline-format"
                    >
                      <Row>
                        <Col md={3}>
                          {news?.img_url && (<img
                            src={news?.img_url}
                            width={"85px"}
                            height={"75px"}
                            alt={"small img"}
                          />)}
                        </Col>
                        <Col md={9} className="pl-1">{news?.headline}</Col>
                      </Row>
                    </li>
                  ))}
                  </>
                )}
                 {slug && (
                  <>
                  {newsList.map((news, i) => (
                    <li
                      key={news.id}
                      className="bb-solid headline-format"
                    >
                    <Link to={`/content/${news?.category}/${news?.slug}`}>
                      <Row>
                        <Col md={3}>
                          {news?.img_url && (<img
                            src={news?.img_url}
                            width={"85px"}
                            height={"75px"}
                            alt={"small img"}
                          />)}
                        </Col>
                        <Col md={9}>{news?.headline}</Col>
                      </Row>
                    </Link>
                    </li>
                  ))}
                  </>
                )}
                 
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="d-block d-md-none">
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
            {newsList.map((item) => (
              <SwiperSlide key={item.id}>
                <Row>
                  <Col md={12}>
                    <h2 className="my-3">
                      <span className="cl-black">{item.headline}</span>
                    </h2>
                    <img src={item?.img_url} width="100%" alt="banner" />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    {item?.subjectsList?.map((subject, i) => (
                      <p className="my-2 cl-black " key={i}>
                        {subject}
                      </p>
                    ))}
                    {!slug && (
                      <Link
                        to={`/content/${selectedContent?.category}/${selectedContent?.slug}`}
                        className="read-link cl-black"
                      >
                        ఇంకా చదవండి..
                      </Link>
                    )}
                  </Col>
                </Row>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeContent;
