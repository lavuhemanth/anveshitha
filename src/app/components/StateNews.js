
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import HomeContent from '../templates/home-content/HomeContent';
import newsData from '../../assets/data';

function StateNews() {
  const [data, setData] = useState();
  const { category } = useParams();
  const [myCategory, setMyCategory] = useState({});
  const [current, setCurrent] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0)
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    if (category) {
      fetch("http://localhost:9093/api/v1/category/" + category)
    .then(res => res.json())
    .then(data => {
      if (data.statusCode === 200) {
        const catData = data?.response?.data;
        setMyCategory(catData);
        if (catData._id) {
          callNewsApi(1, catData._id);
        }
      } else {
        alert('No Cateory found. Try After some time')
      }
    })
    .catch(error => {
      alert('Error fetching category data');
    })
    }
  }, []);

  const callNewsApi = async (page, categoryId = myCategory._id, ) => {
    await fetch(`http://localhost:9093/api/v1/news/list/${categoryId}?limit=10&page=${page}&sortBy=ASC`)
    .then(res => res.json())
    .then(data => {
      if (data.statusCode === 200) {
        const response = data?.response;
        const newsItems = data?.response?.data;
        setData([...data, ...newsItems]);
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
  return (
      <Container fluid>
          <HomeContent categoryNews={data}/>
      </Container>
  )
}

export default StateNews;