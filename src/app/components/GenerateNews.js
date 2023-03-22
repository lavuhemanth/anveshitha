import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Resizer from "react-image-file-resizer";
// import Image from "react-bootstrap/Image";
import ImageViewer from '../templates/ImageViewer';
import ContextViewer from '../templates/ContextViewer';

let nextId = 0;

function GenerateNews() {
  const [title, setTitle] = useState("");
  const [headLine, setHeadLine] = useState("");
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [updateSubject, setUpdateSubject] = useState(null);
  const [category, setCategory] = useState("sports");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileTab, setSelectedFileTab] = useState(null);
  const [selectedFileMobile, setSelectedFileMobile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleHeadLineChange = (event) => {
    setHeadLine(event.target.value);
  };
  
  const handleSubjectChange = (event, i) => {
    setSubject(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to handle form submission
  };

  const addSubjectToSubjects = () => {
    subjects.push({ id: nextId++, subject });
    setSubject('');

  };
  const updateSubjectToSubjects = () => {
    subjects[updateSubject] = { id: updateSubject, subject };
    setUpdateSubject(null);
    setSubject('');
  }

  const editSubjectToSubjects = (event, i) => {
    setUpdateSubject(i);
    setSubject(subjects[i].subject);
  };
  
  
  const deleteSubjectFromSubjects = (event, i) => {
    subjects.splice(i, 1);
    setSubjects(subjects);
  };
  useEffect(() => {
    setSubjects(subjects);
  }, [subjects]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      debugger
      const img = new Image();
      img.onload = function () {
        const height = img.height;
        if (height < 720) {
          setErrorMessage("Image height should be at least 720 pixels");
        } else if (height > 1080) {
          setErrorMessage("Image height should be no more than 1080 pixels");
        } else if (file.size > 5 * 1024 * 1024) {
          setErrorMessage("File size should be less than 5MB");
        } else {
          setErrorMessage("");
          Resizer.imageFileResizer(
            file,
            776, // max width
            513, // max height
            "JPEG", // output format
            70, // quality
            0, // rotation
            (uri) => {
              setSelectedFile({ file, uri });
            },
            "base64", // output type
            200 // max file size in bytes
          );
           Resizer.imageFileResizer(
             file,
             530, // max width
             350, // max height
             "JPEG", // output format
             90, // quality
             0, // rotation
             (uri) => {
               setSelectedFileTab({ file, uri });
             },
             "base64", // output type
             200 // max file size in bytes
           );
          Resizer.imageFileResizer(
            file,
            363, // max width
            400, // max height
            "JPEG", // output format
            90, // quality
            0, // rotation
            (uri) => {
              setSelectedFileMobile({ file, uri });
            },
            "base64", // output type
            200 // max file size in bytes
          );
        }
      };
      img.src = URL.createObjectURL(file);
    } else {
      setErrorMessage("Please select a valid image file");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col>
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
        </Col>
        <Col>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              size="lg"
              as="select"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="sports">Sports</option>
              <option value="news">News</option>
              <option value="business">Business</option>
              <option value="cultural">Cultural</option>
              <option value="health">Health</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="title">
          <Form.Label>Head Line</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            value={headLine}
            onChange={handleHeadLineChange}
            placeholder="Enter Head line"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="subject">
          <Form.Label>Subject </Form.Label>
          <ContextViewer
            list={subjects}
            onEdit={editSubjectToSubjects}
            onDelete={deleteSubjectFromSubjects}
          />
          <Row>
            <Col md="11">
              <Form.Control
                type="text"
                size="lg"
                value={subject}
                onChange={handleSubjectChange}
                placeholder="Enter subject"
              />
            </Col>
            <Col md="1">
              {!Number(updateSubject) ? (
                <Button variant="primary" onClick={addSubjectToSubjects}>
                  Add
                </Button>
              ) : (
                <Button variant="primary" onClick={updateSubjectToSubjects}>
                  Update
                </Button>
              )}
            </Col>
          </Row>
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Label>Upload an image</Form.Label>
        <Form.Control
          className="p-5 cl-gray"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
        />
        {errorMessage && (
          <Form.Text className="text-danger">{errorMessage}</Form.Text>
        )}
      </Form.Group>

      <Container>
        <Row>
          <Col>
            <ImageViewer srcImg={selectedFile?.uri} />
          </Col>
          <Col>
            <ImageViewer srcImg={selectedFileTab?.uri} />
          </Col>
          <Col>
            <ImageViewer srcImg={selectedFileMobile?.uri} />
          </Col>
        </Row>
      </Container>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default GenerateNews;
