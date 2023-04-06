import React, { useRef, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Resizer from "react-image-file-resizer";
// import Image from "react-bootstrap/Image";
// import ImageViewer from '../templates/ImageViewer';
import ContextViewer from '../templates/ContextViewer';
import NewImageCropper from '../service/NewImageCropper';
import RightOffCanvas from '../templates/RIghtOffCanvas';
import SubjectForm from "../templates/subject-form/SubjectForm";

let nextId = 0;

function GenerateNews() {
  const [title, setTitle] = useState("");
  const [headLine, setHeadLine] = useState("");
  const [sub_headline, setSub_headline] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [updateSubject, setUpdateSubject] = useState(null);
  const [category, setCategory] = useState("sports");
  const [selectedFile, setSelectedFile] = useState(null);
  const [is_public, setIs_Public] = useState(false);
  const [img_desc, setImg_desc] = useState("");
  const [desc_list, SetDesc_list] = useState([]);
  const [reported_by, setReported_by] = useState("");
  const [editSubjectIndx, setEditSubjectIndx] = useState(null)
  const [thumbnails, setThumbnails] = useState({
    pc: "",
    tab: "",
    mobile: "",
  });
  const [address, setAddress] = useState({
    city: "",
    district: "",
    state: "",
  });
  const [subjShow, setSubjShow] = useState(false)
  const [fileTab, setFileTab] = useState(null);
  const [fileMobile, setFileMobile] = useState(null);
  const [filePc, setFilePc] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [subjectIndex, setSubjectIndex] = useState(null);
  const [btnName, setBtnName] = useState();
  const childRef = useRef();
  const childRefTwo = useRef();
  const childRefThree = useRef();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to handle form submission
  };

  const handlePublicPrivateChange = (event) => {
    setIs_Public(event.target.value);
  };

  // const addSubjectToSubjects = () => {
  //   subjects.push({ id: nextId++, subject });
  //   setSubject('');

  // };
  // const updateSubjectToSubjects = () => {
  //   subjects[updateSubject] = { id: updateSubject, subject };
  //   setUpdateSubject(null);
  //   setSubject('');
  // }

  // const editSubjectToSubjects = (event, i) => {
  //   setUpdateSubject(i);
  //   setSubject(subjects[i].subject);
  // };
  
  
  const deleteSubjectFromSubjects = (event, i) => {
    desc_list.splice(i, 1);
    SetDesc_list(desc_list);
  };
  useEffect(() => {
    setSubjects(subjects);
  }, [subjects]);

  const handleFileSelect = (event) => {
    setShow(true);
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
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
            1280, // max width
            720, // max height
            "JPEG", // output format
            70, // quality
            0, // rotation
            (uri) => {
              setSelectedFile({ file, uri });
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

  const handleCrop = (type, data) => {
    if (type === 'PC') {
      setFilePc(data);
      setThumbnails({...thumbnails, pc: filePc});
    } else if (type === 'MOBILE') {
      setFileMobile(data);
      setThumbnails({ ...thumbnails, mobile: fileMobile });
    } else if (type === 'TAB') {
      setFileTab(data);
      setThumbnails({ ...thumbnails, tab: fileTab });
    }
  }

  const deleteSubject = (indx) => {

  }

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
        <Col>
          <Form.Group controlId="headline">
            <Form.Label>Head Line</Form.Label>
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
            <Form.Label>SUB Head Line</Form.Label>
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
      {/* <Row className="mb-3">
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
      </Row> */}

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="is_public">
            <Form.Label>Publish Status</Form.Label>
            <Row>
              <Col sm="1" md="1" lg="1">
                <Form.Check
                  size="sm"
                  type="radio"
                  value={true}
                  name="is_public"
                  onChange={handlePublicPrivateChange}
                  placeholder="Enter Head line"
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
                  placeholder="Enter Head line"
                />
              </Col>
              <Col>
                <span>Public</span>
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="img_desc">
            <Form.Label>Image Description</Form.Label>
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
      <Row>
        <Col>
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
            <Row>
              <Col>
                {filePc && (
                  <img
                    alt="cropped"
                    src={filePc}
                    height="150px"
                    width="150px"
                  />
                )}
              </Col>
              <Col>
                {fileTab && (
                  <img
                    alt="cropped"
                    src={fileTab}
                    height="150px"
                    width="150px"
                  />
                )}
              </Col>
              <Col>
                {fileMobile && (
                  <img
                    alt="cropped"
                    src={fileMobile}
                    height="150px"
                    width="150px"
                  />
                )}
              </Col>
            </Row>
          </Form.Group>
        </Col>
        <Col>
          <Row>
            <Form.Label>Location</Form.Label>
            <Form.Group className="py-1">
              <Form.Control
                size="md"
                type="text"
                value={address.city}
                onChange={handleImgDescChange}
                placeholder="City"
              />
            </Form.Group>
            <Form.Group className="py-1">
              <Form.Control
                size="md"
                type="text"
                value={address.district}
                onChange={handleImgDescChange}
                placeholder="District"
              />
            </Form.Group>
            <Form.Group className="py-1">
              <Form.Control
                size="md"
                type="text"
                value={address.state}
                onChange={handleImgDescChange}
                placeholder="State"
              />
            </Form.Group>
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="img_desc">
            <Form.Label>Reported By</Form.Label>
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
      <Container>
        {selectedFile && (
          <RightOffCanvas
            handleClose={() => setShow(false)}
            show={show}
            title={"Image Cropper"}
          >
            <h3>Banner Image</h3>
            <NewImageCropper
              yourImage={selectedFile?.uri}
              aspectRatio={16 / 9}
              setImageSrc={(data) => handleCrop("PC", data)}
              ref={childRef}
            />
            <h3>Mobile Size</h3>
            <NewImageCropper
              yourImage={selectedFile?.uri}
              aspectRatio={9 / 16}
              setImageSrc={(data) => handleCrop("MOBILE", data)}
              ref={childRefTwo}
            />
            <h3>Normal Size</h3>
            <NewImageCropper
              yourImage={selectedFile?.uri}
              aspectRatio={4 / 3}
              setImageSrc={(data) => handleCrop("TAB", data)}
              ref={childRefThree}
            />

            <Button
              onClick={() => {
                setShow(false);
                childRef.current.cropped();
                childRefTwo.current.cropped();
                childRefThree.current.cropped();
              }}
              className="mt-3 w-100p"
            >
              Save Crop
            </Button>
          </RightOffCanvas>
        )}
      </Container>
      <Container>
        <Row>
          <Col>Subjects</Col>
          <Col>
            {" "}
            <Button onClick={() => { setSubjShow(true); setBtnName('Add');}}>Add New Subject</Button>
          </Col>
        </Row>
        {desc_list.map((item, indx) => {
          return (
            <Container key={indx}>
              <Row>
                <Col>
                  {item.title & <h2>{item.title}</h2>}
                  {item.subject & <h2>{item.subject}</h2>}
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setSubjShow(true);
                      setEditSubjectIndx(indx);
                      setBtnName("Add");
                    }}
                  >
                    Edit
                  </Button>
                  <Button onClick={() => deleteSubjectFromSubjects(indx)}>
                    Delete
                  </Button>
                </Col>
              </Row>
            </Container>
          );
        })}
      </Container>
      <Container>
        <RightOffCanvas
          handleClose={() => setSubjShow(false)}
          show={subjShow}
          title={"Create Or Update Subject"}
        >
          <SubjectForm addToSubject indx={subjectIndex} btn={btnName} />
        </RightOffCanvas>
      </Container>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default GenerateNews;
