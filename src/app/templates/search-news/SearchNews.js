import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';




function SearchNews() {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  } 

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

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
  ]

  return (
    // <h1>Form</h1>
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Control type="text" placeholder="Enter Title" value={title} onChane={handleTitle}/>
            </Form.Group>
          </Col>
          <Col>  
            <Form.Group className="mb-3" controlId="formGroupCategory">
              <Form.Select defaultValue="sports" onChane={handleSelectChange} >
                {categoryList.map((item, i) => (<option key={i} value={item.value}>{item.label}</option>))}
              </Form.Select>
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




