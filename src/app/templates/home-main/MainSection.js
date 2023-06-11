import React, { useContext, useEffect, useState } from "react";
import VerTabs from "./VerTabs";
import { Link } from "react-router-dom";
import MyContext from "../../../assets/MyContext";

const MainSection = () => {
  const context = useContext(MyContext);
  const [mainData, setMainData] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [secOneMainData, setSecOneMainData] = useState({});
  const [secTwoMainData, setSecTwoMainData] = useState({});
  const [secThreeMainData, setSecThreeMainData] = useState({});
  const [newsData, setNewsData] = useState(context);
  

  useEffect(() => {
    setNewsData(context);
      setMainData(newsData?.main_news);
      setNewsList(newsData?.main_news_list);
      setSecOneMainData(mainData[0]);
      setSecTwoMainData(mainData[1]);
      setSecThreeMainData(mainData[2]);
  }, [mainData, newsData, context]);

  return (
    <div className="container p-0">
      <div className="card Maincard border-0 pt-2">
        <div className="container">
          <div className="row">
            <div className="col-8 left_col">
              <h2>ప్రధాన వార్తలు</h2>
              <hr />
              <div className="row">
                <div className="col-6">
                  <div className="card border-0">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <img
                            src={secOneMainData?.img_url}
                            width="100%"
                            alt="min-banner"
                          />
                          <h4 className="pt-3">
                            <Link
                              to={`/content/${secOneMainData?.category}/${secOneMainData?.slug}`}
                              className="read-link"
                            >
                              {secOneMainData?.headline_subject}
                            </Link>
                          </h4>
                        </div>

                        <div className="col-6 mt-5">
                          <img
                            src={secTwoMainData?.img_url}
                            width="100%"
                            alt="min-banner"
                          />
                          <h6 className="pt-3">
                          <Link
                            to={`/content/${secTwoMainData?.category}/${secTwoMainData?.slug}`}
                            className="read-link"
                          >
                            {secTwoMainData?.headline_subject}
                          </Link>
                          </h6>
                        </div>
                        <div className="col-6 mt-5">
                          <img
                            src={secThreeMainData?.img_url}
                            width="100%"
                            alt="min-banner"
                          />
                          <h6 className="pt-3">

                          <Link
                            to={`/content/${secThreeMainData?.category}/${secThreeMainData?.slug}`}
                            className="read-link"
                          >
                            {secThreeMainData?.headline_subject}
                          </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 ListCol " id="list">
                  <ul className="UL">
                    {newsList?.length &&
                      newsList?.map((item) => (
                        <li className="li" key={item.id}>
                          <Link
                            to={`/content/${item?.category}/${item?.slug}`}
                            className="read-link"
                          >
                            {item?.headline}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4">
              <VerTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
