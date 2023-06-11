
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import HomeContent from '../templates/home-content/HomeContent';
import MyContext from '../../assets/MyContext';

function StateNews() {
  const context = useContext(MyContext);
  const [data, setData] = useState();
  const [newsData, setNewsData] = useState(context);
  const { category } = useParams();
  
  useEffect(() => {
    if (category) {
      console.log(context, ' context');
      setNewsData(context);
      setData(newsData[category]);
      
    }
  }, [category, newsData, context]);
  return (
      <Container fluid>
          <HomeContent categoryNews={data}/>
      </Container>
  )
}

export default StateNews;