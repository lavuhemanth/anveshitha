import React from "react";
// import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
// import Resizer from "react-image-file-resizer";
// import ContextViewer from '../templates/context-viewer/ContextViewer';
// import NewImageCropper from '../service/NewImageCropper';
// import RightOffCanvas from '../templates/RIghtOffCanvas';
// import SubjectForm from "../templates/subject-form/SubjectForm";
import CreateFrom from "../templates/create-form/CreateForm";


function GenerateNews() {
  // const [title, setTitle] = useState("");
  // const [headLine, setHeadLine] = useState("");
  // const [sub_headline, setSub_headline] = useState("");
  // const [subjects, setSubjects] = useState([]);
  // const [updateSubject, setUpdateSubject] = useState(null);
  // const [category, setCategory] = useState("sports");
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [is_public, setIs_Public] = useState(false);
  // const [img_desc, setImg_desc] = useState("");
  // const [subjectList, setSubjectList] = useState([]);
  // const [reported_by, setReported_by] = useState("");
  // const [editSubjectIndx, setEditSubjectIndx] = useState(null);
  // const [thumbnails, setThumbnails] = useState({
  //   pc: "",
  //   tab: "",
  //   mobile: "",
  // });
  // const [address, setAddress] = useState({
  //   city: "",
  //   district: "",
  //   state: "",
  // });
  // const [subjShow, setSubjShow] = useState(false);
  // const [fileTab, setFileTab] = useState(null);
  // const [fileMobile, setFileMobile] = useState(null);
  // const [filePc, setFilePc] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [show, setShow] = useState(false);
  // const [subjectIndex, setSubjectIndex] = useState(null);
  // const [btnName, setBtnName] = useState();
  // const childRef = useRef();
  // const childRefTwo = useRef();
  // const childRefThree = useRef();

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // const handleImgDescChange = (event) => {
  //   setImg_desc(event.target.value);
  // };

  // const handleReportedByChange = (event) => {
  //   setReported_by(event.target.value);
  // };

  // const handleHeadLineChange = (event) => {
  //   setHeadLine(event.target.value);
  // };

  // const handleSubHeadLineChange = (event) => {
  //   setSub_headline(event.target.value);
  // };

  // const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // code to handle form submission
  // };

  // const handlePublicPrivateChange = (event) => {
  //   setIs_Public(event.target.value);
  // };


  // const deleteSubjectFromSubjects = (event, i) => {
  //   subjectList.splice(i, 1);
  //   setSubjectList(subjectList);
  // };
  // useEffect(() => {
  //   setSubjects(subjects);
  // }, [subjects]);

  // const handleFileSelect = (event) => {
  //   setShow(true);
  //   const file = event.target.files[0];
  //   if (file && file.type.substr(0, 5) === "image") {
  //     const img = new Image();
  //     img.onload = function () {
  //       const height = img.height;
  //       if (height < 720) {
  //         setErrorMessage("Image height should be at least 720 pixels");
  //       } else if (height > 1080) {
  //         setErrorMessage("Image height should be no more than 1080 pixels");
  //       } else if (file.size > 5 * 1024 * 1024) {
  //         setErrorMessage("File size should be less than 5MB");
  //       } else {
  //         setErrorMessage("");
  //         Resizer.imageFileResizer(
  //           file,
  //           1280, // max width
  //           720, // max height
  //           "JPEG", // output format
  //           70, // quality
  //           0, // rotation
  //           (uri) => {
  //             setSelectedFile({ file, uri });
  //           },
  //           "base64", // output type
  //           200 // max file size in bytes
  //         );
  //       }
  //     };
  //     img.src = URL.createObjectURL(file);
  //   } else {
  //     setErrorMessage("Please select a valid image file");
  //   }
  // };

  // const handleCrop = (type, data) => {
  //   if (type === "PC") {
  //     setFilePc(data);
  //     setThumbnails({ ...thumbnails, pc: filePc });
  //   } else if (type === "MOBILE") {
  //     setFileMobile(data);
  //     setThumbnails({ ...thumbnails, mobile: fileMobile });
  //   } else if (type === "TAB") {
  //     setFileTab(data);
  //     setThumbnails({ ...thumbnails, tab: fileTab });
  //   }
  // };

  // // Subject Create Edit and delete methods
  // // Starts
  // const addToDescriptionList = (data, i) => {
  //   debugger;
  //   if (i >= 0) {
  //     subjectList[i] = data;
  //     setSubjectList(subjectList);
  //   } else {
  //     setSubjectList([data]);
  //   }
  //   setSubjShow(false);
  // };

  // const onEditSubject = (index) => {
  //   setSubjectIndex(index);
  //   setSubjShow(true);
  // };

  // const deleteSubject = (indx) => {
  //   const deletedSubject = subjectList.splice(indx, 1);
  //   setSubjectList(deletedSubject);
  // };

  // Ends

  return (
    <>
    <CreateFrom/>
    </>
    // <Form onSubmit={handleSubmit}>
    //   <Row className="mb-3">
    //     <Col>
    //       <Form.Group controlId="title">
    //         <Form.Label>Title</Form.Label>
    //         <Form.Control
    //           size="lg"
    //           type="text"
    //           value={title}
    //           onChange={handleTitleChange}
    //           placeholder="Enter title"
    //         />
    //       </Form.Group>
    //     </Col>
    //     <Col>
    //       <Form.Group controlId="category">
    //         <Form.Label>Category</Form.Label>
    //         <Form.Control
    //           size="lg"
    //           as="select"
    //           value={category}
    //           onChange={handleCategoryChange}
    //         >
    //           <option value="sports">Sports</option>
    //           <option value="news">News</option>
    //           <option value="business">Business</option>
    //           <option value="cultural">Cultural</option>
    //           <option value="health">Health</option>
    //         </Form.Control>
    //       </Form.Group>
    //     </Col>
    //   </Row>
    //   <Row className="mb-3">
    //     <Col>
    //       <Form.Group controlId="headline">
    //         <Form.Label>Head Line</Form.Label>
    //         <Form.Control
    //           size="md"
    //           type="text"
    //           value={headLine}
    //           onChange={handleHeadLineChange}
    //           placeholder="Enter Head line"
    //         />
    //       </Form.Group>
    //     </Col>
    //     <Col>
    //       <Form.Group controlId="headline">
    //         <Form.Label>SUB Head Line</Form.Label>
    //         <Form.Control
    //           size="md"
    //           type="text"
    //           value={sub_headline}
    //           onChange={handleSubHeadLineChange}
    //           placeholder="Enter Head line"
    //         />
    //       </Form.Group>
    //     </Col>
    //   </Row>

    //   <Row className="mb-3">
    //     <Col>
    //       <Form.Group controlId="is_public">
    //         <Form.Label>Publish Status</Form.Label>
    //         <Row>
    //           <Col sm="1" md="1" lg="1">
    //             <Form.Check
    //               size="sm"
    //               type="radio"
    //               value={true}
    //               name="is_public"
    //               onChange={handlePublicPrivateChange}
    //               placeholder="Enter Head line"
    //             />
    //           </Col>
    //           <Col>
    //             <span>Public</span>
    //           </Col>
    //           <Col sm="1" md="1" lg="1">
    //             <Form.Check
    //               size="sm"
    //               type="radio"
    //               value={false}
    //               name="is_public"
    //               onChange={handlePublicPrivateChange}
    //               placeholder="Enter Head line"
    //             />
    //           </Col>
    //           <Col>
    //             <span>Public</span>
    //           </Col>
    //         </Row>
    //       </Form.Group>
    //     </Col>
    //     <Col>
    //       <Form.Group controlId="img_desc">
    //         <Form.Label>Image Description</Form.Label>
    //         <Form.Control
    //           size="md"
    //           type="text"
    //           value={img_desc}
    //           onChange={handleImgDescChange}
    //           placeholder="Image Description"
    //         />
    //       </Form.Group>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>
    //       <Form.Group>
    //         <Form.Label>Upload an image</Form.Label>
    //         <Form.Control
    //           className="p-5 cl-gray"
    //           type="file"
    //           accept="image/*"
    //           onChange={handleFileSelect}
    //         />
    //         {errorMessage && (
    //           <Form.Text className="text-danger">{errorMessage}</Form.Text>
    //         )}
    //         <Row>
    //           <Col>
    //             {filePc && (
    //               <img
    //                 alt="cropped"
    //                 src={filePc}
    //                 height="150px"
    //                 width="150px"
    //               />
    //             )}
    //           </Col>
    //           <Col>
    //             {fileTab && (
    //               <img
    //                 alt="cropped"
    //                 src={fileTab}
    //                 height="150px"
    //                 width="150px"
    //               />
    //             )}
    //           </Col>
    //           <Col>
    //             {fileMobile && (
    //               <img
    //                 alt="cropped"
    //                 src={fileMobile}
    //                 height="150px"
    //                 width="150px"
    //               />
    //             )}
    //           </Col>
    //         </Row>
    //       </Form.Group>
    //     </Col>
    //     <Col>
    //       <Row>
    //         <Form.Label>Location</Form.Label>
    //         <Form.Group className="py-1">
    //           <Form.Control
    //             size="md"
    //             type="text"
    //             value={address.city}
    //             onChange={handleImgDescChange}
    //             placeholder="City"
    //           />
    //         </Form.Group>
    //         <Form.Group className="py-1">
    //           <Form.Control
    //             size="md"
    //             type="text"
    //             value={address.district}
    //             onChange={handleImgDescChange}
    //             placeholder="District"
    //           />
    //         </Form.Group>
    //         <Form.Group className="py-1">
    //           <Form.Control
    //             size="md"
    //             type="text"
    //             value={address.state}
    //             onChange={handleImgDescChange}
    //             placeholder="State"
    //           />
    //         </Form.Group>
    //       </Row>
    //     </Col>
    //   </Row>

    //   <Row className="mb-3">
    //     <Col>
    //       <Form.Group controlId="img_desc">
    //         <Form.Label>Reported By</Form.Label>
    //         <Form.Control
    //           size="md"
    //           type="text"
    //           value={reported_by}
    //           onChange={handleReportedByChange}
    //           placeholder="Reporter name"
    //         />
    //       </Form.Group>
    //     </Col>
    //   </Row>

    //   {/* Right toggle  to crop upload image  Start*/}
    //   <Container>
    //     {selectedFile && (
    //       <RightOffCanvas
    //         handleClose={() => setShow(false)}
    //         show={show}
    //         title={"Image Cropper"}
    //       >
    //         <h3>Banner Image</h3>
    //         <NewImageCropper
    //           yourImage={selectedFile?.uri}
    //           aspectRatio={16 / 9}
    //           setImageSrc={(data) => handleCrop("PC", data)}
    //           ref={childRef}
    //         />
    //         <h3>Mobile Size</h3>
    //         <NewImageCropper
    //           yourImage={selectedFile?.uri}
    //           aspectRatio={9 / 16}
    //           setImageSrc={(data) => handleCrop("MOBILE", data)}
    //           ref={childRefTwo}
    //         />
    //         <h3>Normal Size</h3>
    //         <NewImageCropper
    //           yourImage={selectedFile?.uri}
    //           aspectRatio={4 / 3}
    //           setImageSrc={(data) => handleCrop("TAB", data)}
    //           ref={childRefThree}
    //         />

    //         <Button
    //           onClick={() => {
    //             setShow(false);
    //             childRef.current.cropped();
    //             childRefTwo.current.cropped();
    //             childRefThree.current.cropped();
    //           }}
    //           className="mt-3 w-100p"
    //         >
    //           Save Crop
    //         </Button>
    //       </RightOffCanvas>
    //     )}
    //   </Container>
    //   {/* Right toggle  to crop upload image  Start*/}

    //   {/* SUbject Adding starts hear */}
    //   <Container>
    //     <Row>
    //       <Col>
    //         <b>Subjects</b>
    //       </Col>
    //       <Col className="position-relative">
    //         {" "}
    //         <Button
    //           className="ml-5 position-right"
    //           onClick={() => {
    //             setSubjShow(true);
    //             setBtnName("Add");
    //           }}
    //         >
    //           Add New Subject
    //         </Button>
    //       </Col>
    //     </Row>
    //     {subjectList && (
    //       <div className="table-responsive">
    //         <Table striped bordered hover responsive>
    //           <thead>
    //             <tr>
    //               <th>Title</th>
    //               <th>Subject</th>
    //               <th></th>
    //               <th></th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {subjectList &&
    //               subjectList.map((item, indx) => {
    //                 return (
    //                   <tr key={indx}>
    //                     <td>{item.title && <p>{item.title}</p>}</td>
    //                     <td>{item.subject && <p>{item.subject}</p>}</td>
    //                     <td>
    //                       <Button
    //                         onClick={() => {
    //                           setSubjShow(true);
    //                           setEditSubjectIndx(indx);
    //                           setBtnName("Update");
    //                         }}
    //                       >
    //                         Edit
    //                       </Button>
    //                     </td>
    //                     <td>
    //                       {" "}
    //                       <Button onClick={() => deleteSubject(indx)}>
    //                         Delete
    //                       </Button>
    //                     </td>
    //                   </tr>
    //                 );
    //               })}
    //           </tbody>
    //         </Table>
    //       </div>
    //     )}
    //   </Container>
    //   <Container>
    //     <RightOffCanvas
    //       handleClose={() => setSubjShow(false)}
    //       show={subjShow}
    //       title={"Create Or Update Subject"}
    //       className="w-50"
    //     >
    //       <SubjectForm
    //         addToSubject={addToDescriptionList}
    //         indx={subjectIndex}
    //         btn={btnName}
    //         subjectList={subjectList}
    //       />
    //     </RightOffCanvas>
    //   </Container>
    //   <Button variant="primary" type="submit" className="mt-3">
    //     Submit
    //   </Button>
    // </Form>
  );
}

export default GenerateNews;
