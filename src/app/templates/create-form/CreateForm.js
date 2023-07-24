import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ContextViewer from "../context-viewer/ContextViewer";
import RightOffCanvas from "../RIghtOffCanvas";
import SubjectForm from '../subject-form/SubjectForm';
// import ContextViewer from "../context-viewer/ContextViewer";
import HandleFileUpload from "./HandleFileUpload";
// import TableWithDragAndDrop from '../sort-data/TableWithDragAndDrop';
import DatePicker from 'react-datepicker';

function CreateFrom({onSubmit, newsData, categoryItm}) {
  console.log('newsData :: ', newsData);
  // Form fields Start
  const [title, setTitle] = useState("title onw");
  const [headLine, setHeadLine] = useState("head line one");
  const [subHeadline, setSubHeadline] = useState("sub head line one");
  const [category_id, setCategoryId] = useState(categoryItm._id);
  const [imgDesc, setImgDesc] = useState("img desc");
  const [reported_by, setReportedId] = useState("reporter one");
  const [isPublic, setIsPublic] = useState('0');
  const [publish_date, setPublishDate] = useState(new Date().toLocaleDateString().toString());
  const [selectedDate, setSelecteDate] = useState(new Date());
  const [tags, setTags] = useState([]);
  const options = [
    {
      label: "Latest",
      value: "LATEST",
    },
    {
      label: "Hot Topic",
      value: "HOT_TOPIC",
    },
    {
      label: "Trending",
      value: "TRENDING",
    },
    {
      label: "Updates",
      value: "UPDATES",
    },
  ]; 

  const [address, setAddress] = useState({
    city: "city ",
    district: "distric",
    state: "state"
  });

    const [subjectList, setSubjectList] = useState([
      { title: "My text ", subject: "this is a lengthy subject" },
      { title: "My text one", subject: "this is a lengthy subject one" },
      { title: "My text two", subject: "this is a lengthy subject two" },
    ]);
    const [subjectObj, setSubjectObj] = useState(null);
  // Form fields end

  const [subjShow, setSubjShow] = useState(false);
  const [subjectIndex, setSubjectIndex] = useState(null);
  const [btnName, setBtnName] = useState();

  const handleTitleChange = (event) =>  setTitle(event.target.value);
  const handleImgDescChange = (event) => setImgDesc(event.target.value);
  const handleReportedIdChange = (event) => setReportedId(event.target.value);
  const handleHeadLineChange = (event) => setHeadLine(event.target.value);
  const handleSubHeadLineChange = (event) => setSubHeadline(event.target.value);
  const handlePublicPrivateChange = (event) => setIsPublic(event.target.value === '0' ? '0' : '1');
  const handleDatePicker = (date) =>{ setPublishDate(new Date(date).toString()); setSelecteDate(date)};
  

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
    const data = {
      title,
      head_line: headLine,
      sub_head_line: subHeadline,
      category_id,
      img_desc: imgDesc,
      publish_date: new Date(selectedDate).toISOString(),
      is_public: isPublic,
      reported_by: "64aaec55d66dd9528cf982df",
      address,
      tags,
      subject_list: subjectList 
    };
    console.log('data :: ', data);
    onSubmit(data);
  };

 const handleSelectChange = (event) => {
   const value = event.target.value;
   const checked = event.target.checked;
   if (checked) {
     setTags([...tags, value]);
   } else {
     setTags(tags.filter((val) => val !== value));
   }
 };

  useEffect(() => {
    if (newsData) {
      setTitle(newsData?.title);
      setHeadLine(newsData?.head_line);
      setSubHeadline(newsData?.sub_head_line);
      setCategoryId(categoryItm?._id);
      setImgDesc(newsData?.img_desc);
      setReportedId("64aaec55d66dd9528cf982df");
      setIsPublic(newsData?.is_public);
      setPublishDate(new Date(newsData?.publish_date).toLocaleDateString().toString());
      setTags(newsData?.tags);
      setAddress(newsData?.address);
    }
  }, [newsData]);

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
              disabled
              size="lg"
              type="text"
              value={categoryItm.name}
            />
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
              value={subHeadline}
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
          <Form.Group controlId="imgDesc">
            <Form.Label>
              <b>Reported By</b>
            </Form.Label>
            <Form.Control
              size="md"
              type="text"
              value={reported_by}
              onChange={handleReportedIdChange}
              placeholder="Reporter name"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="isPublic">
            <Form.Label>
              <b>Publish Status</b>
            </Form.Label>
            <Row>
              <Col sm="1" md="1" lg="1">
                <Form.Check
                  size="sm"
                  type="radio"
                  value="1"
                  name="isPublic"
                  onChange={handlePublicPrivateChange}
                />
              </Col>
              <Col sm="1" md="1" lg="1">
                <span>Public</span>
              </Col>
              <Col sm="1" md="1" lg="1">
                <Form.Check
                  size="sm"
                  type="radio"
                  value="0"
                  name="isPublic"
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
          <Form.Group controlId="imgDesc">
            <Form.Label>
              <b>Image Description</b>
            </Form.Label>
            <Form.Control
              size="md"
              type="text"
              value={imgDesc}
              onChange={handleImgDescChange}
              placeholder="Image Description"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Label>
            <b>Publish Date</b> - <span>MM/DD/YYYY {publish_date}</span>
          </Form.Label>          
          <div>
     <DatePicker
     showIcon
     selected={selectedDate}
     className=""
      value={selectedDate}
      minDate={new Date()}
       onChange={handleDatePicker}
     />
     </div>
        </Col>
        <Col>
          <Form.Group controlId="formMultiSelect">
            <Form.Label>
              <b>Select Tags</b>
            </Form.Label>

            <div className="d-flex justify-around">
              {options.map((option) => (
                <Form.Check
                  className="d-flex justify-around"
                  key={option.value}
                  type="checkbox"
                  id={option.value}
                  label={option.label}
                  value={option.value}
                  checked={tags.includes(option.value)}
                  onChange={handleSelectChange}
                />
              ))}
            </div>
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
        {/* <TableWithDragAndDrop /> */}
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