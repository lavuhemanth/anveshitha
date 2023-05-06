import React, { useEffect, useState } from "react";
import VerTabs from "./VerTabs";
import newsData from "../../../assets/data";


const MainSection = () => {
  const [mainData, setMainData] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [secOneMainData, setSecOneMainData] = useState({});
  const [secTwoMainData, setSecTwoMainData] = useState({});
  const [secThreeMainData, setSecThreeMainData] = useState({});

  useEffect(() => {
    setMainData(newsData?.main_news);
    setNewsList(newsData?.main_news_list);
    setSecOneMainData(mainData[0]);
    setSecTwoMainData(mainData[1]);
    setSecThreeMainData(mainData[2]);
  }, [mainData]);

  return (
    <div className="container">
      <div className="card Maincard border-0 pt-2">
        <div className="container">
          <div className="row">
            <div className="col-8 left_col">
              <h4>ప్రధాన వార్తలు</h4>
              <hr />
              <div className="row">
                <div className="col-6">
                  <div className="card border-0">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <img src={secOneMainData?.img_url} width="100%" alt="min-banner" />
                          <h4>{secOneMainData?.headline_subject}</h4>
                        </div>

                        <div className="col-6 mt-5">
                          <img src={secTwoMainData?.img_url} width="100%" alt="min-banner" />
                          <h6>{secTwoMainData?.headline_subject}</h6>
                        </div>
                        <div className="col-6 mt-5">
                          <img src={secThreeMainData?.img_url} width="100%" alt="min-banner" />
                          <h6>{secThreeMainData?.headline_subject}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 ListCol " id="list">
                  <ul className="UL">
                    {
                      newsList?.length && newsList?.map(item => (
                        <li className="li">
                          {item?.headline}
                        </li>
                      ))
                    }
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
