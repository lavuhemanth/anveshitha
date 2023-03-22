
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import HomeContent from '../templates/home-content/HomeContent';
import newsData from '../../assets/data';

function StateNews() {
  const [data, setData] = useState();
  const { category } = useParams();
  
  useEffect(() => {
    if (category) {
      setData(newsData[category]);
    }
  }, [category]);
  return (
      <Container fluid>
          <HomeContent categoryNews={data}/>
      </Container>
  )
}

export default StateNews;