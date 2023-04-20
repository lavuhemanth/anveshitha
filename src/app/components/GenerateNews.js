import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import CreateFrom from "../templates/create-form/CreateForm";
import NewsData from "../templates/news-data/NewsData";


function GenerateNews() {

  const [show, setShow] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [selectedDataIndex, setSelectedDataIndex] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const clsEdit = () => {
    setSelectedData(null);
    setSelectedDataIndex(null);
    setShow(false);
  };

  const addToDescriptionList = (data) => {
    console.log(
      typeof selectedDataIndex,
      selectedDataIndex , selectedDataIndex >= 0, ' COnditions'
    );
    if (selectedDataIndex !== null && Number(selectedDataIndex) >= 0) {
      const newList = newsList;
      newList[selectedDataIndex] = data;
      setNewsList(newList);
    } else {
      setNewsList([...newsList, data]);
    }
    clsEdit();
    console.log(newsList);
  };

  const onEditSubject = (indx) => {
    setShow(true);
    setSelectedDataIndex(indx);
    setSelectedData(newsList[indx]);
  };

  const deleteSubject = (indx) => {
    const newList = newsList;
    newList.splice(indx, 1);
    setNewsList([...newList]);
  };


 
  return (
    <div>
      <Row className="mb-2">
        <Col>
          <h1>News Data</h1>
        </Col>
        <Col className="align-right">
          {!show && <Button onClick={() => setShow(true)}>Add News</Button>}
          {show && <Button onClick={() => clsEdit()}>close News</Button>}
        </Col>
      </Row>

      <Row className="mb-2">
        {show && (
          <CreateFrom onSubmit={addToDescriptionList} newsData={selectedData} />
        )}
        {!show && newsList.length > 0 && (
          <NewsData
            list={newsList}
            onDelete={deleteSubject}
            onEdit={onEditSubject}
          />
        )}

        {!show && newsList.length === 0 && (
          <h1 className="text-center m-5 p-5">No Data found</h1>
        )}
      </Row>
    </div>
  );
}

export default GenerateNews;
