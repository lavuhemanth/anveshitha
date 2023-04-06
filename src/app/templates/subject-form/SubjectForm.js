import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";

const SubjectForm = ({addToSubject, index = 0, btn}) => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <Container>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          value={subject}
          onChange={handleSubjectChange}
          placeholder="Enter title"
        />
      </Form.Group>

      <Button onClick={() => addToSubject({ title, subject })}>{btn}</Button>
    </Container>
  );
};


export default SubjectForm;