import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import CreateFrom from "../templates/create-form/CreateForm";
import NewsData from "../templates/news-data/NewsData";
import { useParams } from "react-router-dom";


function GenerateNews() {

  const [show, setShow] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [selectedDataIndex, setSelectedDataIndex] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [myCategory, setMyCategory] = useState({});
  const [current, setCurrent] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0)
  const [totalPages, setTotalPages] = useState(0);
  const { category } = useParams();


  useEffect(() => {
    fetch("http://localhost:9093/api/v1/category")
    .then(res => res.json())
    .then(data => {
      if (data.statusCode === 200) {
        const catData = data?.response?.data;
        const myCat = catData.filter(cat => cat.slug === category)[0];
        setMyCategory(myCat);
        if (myCat._id) {
          callNewsApi(1, myCat._id);
        }
      } else {
        alert('No Cateory found. Try After some time')
      }
    })
    .catch(error => {
      alert('Error fetching category data');
    })
  }, []);

  const callNewsApi = async (page, categoryId = myCategory._id, ) => {
    await fetch(`http://localhost:9093/api/v1/news/list/${categoryId}?limit=10&page=${page}&sortBy=ASC`)
    .then(res => res.json())
    .then(data => {
      if (data.statusCode === 200) {
        const response = data?.response;
        const newsItems = data?.response?.data;
        setNewsList(newsItems);
        setCurrent(response?.currentPage);
        setTotalPages(response?.totalPages);
        setTotalRecords(response?.total);
      } else {
        alert('No Cateory found. Try After some time')
      }
    })
    .catch(error => {
      alert('Error fetching category data');
    })
  }

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
      const selectedData = newList[selectedDataIndex];
      const finalData = {...selectedData, ...data};
      fetch(`http://localhost:9093/api/v1/news/update/${finalData.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData)
      }).then(res => res.json()).then(res => {
        if (res.statusCode === 201) {
          console.log('res', res);
          callNewsApi(1, myCategory._id);
        } else {
          alert('Error fetching news data');
        }
      })
      .catch(error => {
        console.log('error', error);
        alert('Error fetching news data');
      })
      
      // do your PUT api or Update
    } else {

      // Do your post api
      fetch("http://localhost:9093/api/v1/news/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(res => {
        if (res.statusCode === 201) {
          console.log('res', res);
          callNewsApi(1, myCategory._id);
        } else {
          alert('Error fetching news data');
        }
      })
      .catch(error => {
        console.log('error', error);
        alert('Error fetching news data');
      })
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
          <CreateFrom onSubmit={addToDescriptionList} newsData={selectedData} categoryItm={myCategory}/>
        )}
        {!show && newsList.length > 0 && (
          <NewsData
            list={newsList}
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            totalpages={totalPages}
            category={myCategory}
            onPagnation={callNewsApi}
            totalRecords={totalRecords}
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
