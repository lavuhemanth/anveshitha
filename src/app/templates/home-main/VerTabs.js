import React, { useEffect, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import newsData from "../../../assets/data";

export default function VerTabs() {
  const [apSpecial, setApSpecial] = useState({});
  const [tnSpecial, setTnSpecial] = useState({});

  useEffect(() => {
    setApSpecial(newsData?.main_ap_special[0]);
    setTnSpecial(newsData?.main_tn_special[0]);
  }, []);

  return (
    <div>
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="AP SPECIAL">
          <div className="p-2 TabsContent">
            <div className="card border-0">
              <img src={apSpecial?.img_url} width="100%" className="" alt="" />
              <h4 className="pt-3">{apSpecial?.headline_subject}</h4>
              <div className="text-end">
              <a href="#" className="knowMoreBtn">ఇంకా </a>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="second" title="TS SPECIAL">
        <div className="p-2 TabsContent">
            <div className="card border-0">
              <img src={tnSpecial?.img_url} width="100%" className="" alt="" />
              <h4 className="pt-3">{tnSpecial?.headline_subject}</h4>
              <div className="text-end">
              <a href="#" className="">ఇంకా </a>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
