import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateFrom from "../templates/create-form/CreateForm";
import NewsData from "../templates/news-data/NewsData";


function GenerateNews() {

  const [show, setShow] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [selectedDataIndex, setSelectedDataIndex] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const handleCreateForm = () => setShow(true);

  const handleNewsList = () => {

    if (selectedDataIndex) {
    }
  };

  const addToDescriptionList = (data) => {
    if (selectedDataIndex && selectedDataIndex >= 0) {
      const newList = newsList;
      newList[selectedDataIndex] = data;
      setSelectedData(null);
      setSelectedDataIndex(null);
      setNewsList(newList);
    } else {
      setNewsList([...newsList, data]);
    }
    setShow(false);
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
    <>
      <div>
        <h1>News Data</h1>
        <Button onClick={handleCreateForm}>Add News</Button>
      </div>

      {show && (
        <>
          <Button onClick={handleCreateForm}>close News</Button>
          <CreateFrom onSubmit={addToDescriptionList} newsData={selectedData} />
        </>
      )}
      {!show && newsList.length > 0 && (
        <NewsData
          onSubmit={handleNewsList}
          onDelete={deleteSubject}
          onEdit={onEditSubject}
        />
      )}
    </>
  );
}

export default GenerateNews;
