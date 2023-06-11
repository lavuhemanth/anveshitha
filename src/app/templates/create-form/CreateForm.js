import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ContextViewer from "../context-viewer/ContextViewer";
import RightOffCanvas from "../RIghtOffCanvas";
import SubjectForm from '../subject-form/SubjectForm';
// import ContextViewer from "../context-viewer/ContextViewer";
import HandleFileUpload from "./HandleFileUpload";
// import TableWithDragAndDrop from '../sort-data/TableWithDragAndDrop';
import DatePicker from 'react-datepicker';
import slug  from 'slug';
import { v4 as uuidv4 } from 'uuid';


function CreateFrom({onSubmit, newsData}) {
  // Form fields Start
  const [title, setTitle] = useState("title onw");
  const [id, setId] = useState(null);
  const [slugGen, setSlugGen] = useState("");
  const [headLine, setHeadLine] = useState("head line one");
  const [subHeadline, setSubHeadline] = useState("sub head line one");
  const [category, setCategory] = useState("political");
  const [imgDesc, setImgDesc] = useState("img desc");
  const [reportedBy, setReportedBy] = useState("reporter one");
  const [isPublic, setIsPublic] = useState('0');
  const [publishDate, setPublishDate] = useState(new Date());
  const [tags, setTags] = useState([]);
  const [thumbnails, setThumbnails] = useState({
      filepc: "",
      filetab: ""
    });
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

  const handleTitleChange = (event) =>  {
    setTitle(event.target.value);
    const uniqueId = uuidv4();
    setId(uniqueId)
    setSlugGen(slug(`${title}-${id}`));
  }
  const handleImgDescChange = (event) => setImgDesc(event.target.value);
  const handleReportedByChange = (event) => setReportedBy(event.target.value);
  const handleHeadLineChange = (event) => setHeadLine(event.target.value);
  const handleSubHeadLineChange = (event) => setSubHeadline(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handlePublicPrivateChange = (event) => setIsPublic(event.target.value === '0' ? '0' : '1');
  const handleDatePicker = (date) => setPublishDate(date);

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

  const handleFileUploadLocation = (type, url) => {
    const images = {
      ...thumbnails
    };
    images[type] = url;
    setThumbnails(images);
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
      id,
      slug: slugGen,
      title,
      head_line: headLine,
      sub_head_line: subHeadline,
      category,
      img_desc: imgDesc,
      publish_date: publishDate,
      is_public: isPublic,
      reported_by: reportedBy,
      address,
      tags,
      subject_list: subjectList,
      thumbnails
    };

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
      setId(newsData?.id);
      setSlugGen(newsData?.slug);
      setTitle(newsData?.title);
      setHeadLine(newsData?.head_line);
      setSubHeadline(newsData?.sub_head_line);
      setCategory(newsData?.category);
      setImgDesc(newsData?.img_desc);
      setReportedBy(newsData?.reported_by);
      setIsPublic(newsData?.is_public);
      setPublishDate(newsData?.publish_date);
      setTags(newsData?.tags);
      setThumbnails(newsData?.thumbnails);
      setAddress(newsData?.address);
      setSubjectList(newsData?.subject_list);
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
              size="lg"
              as="select"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="political">రాజకీయం</option>
              <option value="ap">ఆంధ్రప్రదేశ్</option>
              <option value="tn">తెలంగాణ</option>
              <option value="international">జాతీయం</option>
              <option value="sports">క్రీడలు</option>
              <option value="entertainment">చిత్ర</option>
              <option value="education">విద్య</option>
              <option value="business">బిజినెస్</option>
              <option value="trending">ట్రెండింగ్</option>
              <option value="cartoon_tabs">Cartoon tab</option>
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
              value={reportedBy}
              onChange={handleReportedByChange}
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
            <b>Publish Date</b> - <span>MM/DD/YYYY</span>
          </Form.Label>
          <DatePicker
            showIcon
            id="example-datepicker"
            selected={publishDate}
            minDate={new Date()}
            onChange={handleDatePicker}
            className="w-100 p-2 input-border"
          />
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
          <HandleFileUpload onImageLoad={handleFileUploadLocation} images={thumbnails}/>
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