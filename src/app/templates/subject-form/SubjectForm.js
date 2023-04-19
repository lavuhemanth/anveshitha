import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const SubjectForm = ({ addToSubject, subjectData, btn }) => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (subjectData) {
      setTitle(subjectData?.title);
      setSubject(subjectData?.subject);
    }
  }, [subjectData]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = () => {
    if (subject.length === 0 || subject.length <=  10) {
      setError("Description is required. Minimum 10 letters");
      return;
    }
    addToSubject({ title, subject });
  }

  return (
    <Container>
      <Form.Group controlId="title" className="my-2">
        <Form.Label className="my-2">Title</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group controlId="description" className="my-2">
        <Form.Label className="my-2">Subject</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          size="lg"
          type="text"
          value={subject}
          onChange={handleSubjectChange}
          required
          placeholder="Enter Context"
        />
      </Form.Group>
      <span className="color-red">{error && error}</span>
      {}

      <Button className="mt-1 p-2 w-100" onClick={handleSubmit}>
        {btn}
      </Button>
    </Container>
  );
};


export default SubjectForm;