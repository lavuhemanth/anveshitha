import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ContextViewer from "../context-viewer/ContextViewer";
import RightOffCanvas from "../RIghtOffCanvas";
import SubjectForm from '../subject-form/SubjectForm';
// import ContextViewer from "../context-viewer/ContextViewer";
import HandleFileUpload from "./HandleFileUpload";
import TableWithDragAndDrop from '../sort-data/TableWithDragAndDrop';


function CreateFrom() {
  // Form fields Start
  const [title, setTitle] = useState(" ");
  const [headLine, setHeadLine] = useState(" ");
  const [sub_headline, setSub_headline] = useState(" ");
  const [category, setCategory] = useState("sports");
  const [img_desc, setImg_desc] = useState(" ");
  const [reported_by, setReported_by] = useState(" ");
  const [is_public, setIs_Public] = useState(false);

  const [address, setAddress] = useState({
    city: "",
    district: "",
    state: ""
  });

    const [subjectList, setSubjectList] = useState([]);
    const [subjectObj, setSubjectObj] = useState(null);
  // Form fields end

  const [subjShow, setSubjShow] = useState(false);
  const [subjectIndex, setSubjectIndex] = useState(null);
  const [btnName, setBtnName] = useState();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImgDescChange = (event) => {
    setImg_desc(event.target.value);
  };

  const handleReportedByChange = (event) => {
    setReported_by(event.target.value);
  };

  const handleHeadLineChange = (event) => {
    setHeadLine(event.target.value);
  };

  const handleSubHeadLineChange = (event) => {
    setSub_headline(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePublicPrivateChange = (event) => {
    setIs_Public(event.target.value);
  };

  const handleAddressCityChange = (event) => {  
    setAddress({ ...address, city: event.target.value });
  };
    const handleAddressDistrictChange = (event) => {
      setAddress({ ...address, district: event.target.value });
    };
    const handleAddressStateChange = (event) => {
      setAddress({ ...address, state: event.target.value });
    };

    const toggleSubjectCreation = () => {
      setSubjShow(true);
      setBtnName("Add");
    }
  const onEditSubject = (indx) => {
    setSubjShow(true);
    setSubjectIndex(indx);
    setSubjectObj(subjectList[indx]);
    setBtnName("Update");
  };
    
    const onCloseSubjectNav = () => {
      setSubjShow(false);
        setSubjectIndex(null);
        setSubjectObj(null);
  }

  const addToDescriptionList = (data) => {
      if (subjectIndex && subjectIndex >= 0) {
        const newList = subjectList;
          newList[subjectIndex] = data;
          setSubjectObj(null);
          setSubjectIndex(null);
        setSubjectList(newList);
      } else {
        setSubjectList([...subjectList, data]);
      }
    setSubjShow(false);
  };

    const deleteSubject = (indx) => {
    const newList = subjectList;
    newList.splice(indx, 1);
    setSubjectList([...newList]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to handle form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="title">
            <Form.Label>
              <b>Title</b>
            </Form.Label>
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
            <Form.Label>
              <b>Category</b>
            </Form.Label>
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
        <Col>
          <Form.Group controlId="headline">
            <Form.Label>
              <b>Head Line</b>
            </Form.Label>
            <Form.Control
              size="md"
              type="text"
              value={headLine}
              onChange={handleHeadLineChange}
              placeholder="Enter Head line"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="headline">
            <Form.Label>
              <b>SUB Head Line</b>
            </Form.Label>
            <Form.Control
              size="md"
              type="text"
              value={sub_headline}
              onChange={handleSubHeadLineChange}
              placeholder="Enter Head line"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Row>
            <Form.Label>
              <b>Location</b>
            </Form.Label>
            <Col>
              <Form.Group className="py-1">
                <Form.Control
                  size="md"
                  type="text"
                  value={address.city}
                  onChange={handleAddressCityChange}
                  placeholder="City"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="py-1">
                <Form.Control
                  size="md"
                  type="text"
                  value={address.district}
                  onChange={handleAddressDistrictChange}
                  placeholder="District"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="py-1">
                <Form.Control
                  size="md"
                  type="text"
                  value={address.state}
                  onChange={handleAddressStateChange}
                  placeholder="State"
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col>
          <Form.Group controlId="img_desc">
            <Form.Label>
              <b>Reported By</b>
            </Form.Label>
            <Form.Control
              size="md"
              type="text"
              value={reported_by}
              onChange={handleReportedByChange}
              placeholder="Reporter name"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="is_public">
            <Form.Label>
              <b>Publish Status</b>
            </Form.Label>
            <Row>
              <Col sm="1" md="1" lg="1">
                <Form.Check
                  size="sm"
                  type="radio"
                  value={true}
                  name="is_public"
                  onChange={handlePublicPrivateChange}
                />
              </Col>
              <Col>
                <span>Public</span>
              </Col>
              <Col sm="1" md="1" lg="1">
                <Form.Check
                  size="sm"
                  type="radio"
                  value={false}
                  name="is_public"
                  onChange={handlePublicPrivateChange}
                />
              </Col>
              <Col>
                <span>Private</span>
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="img_desc">
            <Form.Label>
              <b>Image Description</b>
            </Form.Label>
            <Form.Control
              size="md"
              type="text"
              value={img_desc}
              onChange={handleImgDescChange}
              placeholder="Image Description"
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Image Upload Component */}
      <Row className="mb-3">
        <Col>
          <HandleFileUpload />
        </Col>
      </Row>
      {/* SUbject Adding starts hear */}
      <Container className="mb-3">
        <Row className="mb-3">
          <Col>
            <b>Subjects</b>
          </Col>
          <Col className="position-relative">
            <Button
              className="ml-5 position-right"
              onClick={toggleSubjectCreation}
            >
              Add New Subject
            </Button>
          </Col>
        </Row>
        <ContextViewer
          list={subjectList}
          onEdit={onEditSubject}
          onDelete={deleteSubject}
        />
        <TableWithDragAndDrop />
      </Container>
      <Container>
        <RightOffCanvas
          handleClose={onCloseSubjectNav}
          show={subjShow}
          title={`${btnName} Subject`}
          className="w-50"
        >
          <SubjectForm
            addToSubject={addToDescriptionList}
            subjectData={subjectObj}
            btn={btnName}
          />
        </RightOffCanvas>
      </Container>
      <Row className="color-red btn-center">
        <Button variant="primary" type="submit" className="mt-3 w-150x">
          Submit
        </Button>
      </Row>
    </Form>
  );
}

export default CreateFrom;