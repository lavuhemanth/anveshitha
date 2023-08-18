import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { getApiCall } from '../../util/api.service';



const categoryList = [
  { value: 'politics', label: 'Politics' },
  { value: 'andhra', label: 'Andhra Pradesh' },
  { value: 'telengana', label: 'Telengana' },
  { value: 'sports', label: 'Sports' },
  { value: 'national', label: 'National' },
  { value: 'cenima', label: 'Cenima' },
  { value: 'education', label: 'Education' },
  { value: 'business', label: 'Business' },
  { value: 'trending', label: 'Trinding' }
];

function SearchNews({updateData}) {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [publish_date, setPublishDate] = useState(new Date().toLocaleDateString().toString());
  const [selectedDate, setSelecteDate] = useState(new Date());

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  } 

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleDatePicker = (date) =>{ setPublishDate(new Date(date).toString()); setSelecteDate(date)};

  const onSearch = async (event) => {
    event.preventDefault();
    console.log('title :: ', title);
    console.log('category :: ', category);
    console.log('publish_date :: ', publish_date);
    console.log('selectedDate :: ', selectedDate);

    const serchData = {
      title,
      category,
      formatData: new Date(selectedDate).toISOString()
    }
    updateData(serchData);
  }
  return (
    // <h1>Form</h1>
    <Container>
      <Form onSubmit={onSearch}>
        <Row>
          <Col>  
            <Form.Group className="mb-3" controlId="formGroupCategory">
              <Form.Select defaultValue="sports" onChange={handleSelectChange} >
                {categoryList.map((item, i) => (<option key={i} value={item.value}>{item.label}</option>))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
                    
          <div>
     <DatePicker
     showIcon
     selected={selectedDate}
     className=""
      value={selectedDate}
  
       onChange={handleDatePicker}
     />
     </div>
        </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Control type="text" placeholder="Enter Title" value={title} onChange={handleTitle}/>
            </Form.Group>
          </Col>
          <Col>   
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
    </Form>
    </Container>
  );
}

export default SearchNews;




