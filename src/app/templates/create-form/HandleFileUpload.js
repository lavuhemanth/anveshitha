import React, { useRef, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Resizer from "react-image-file-resizer";
import NewImageCropper from "../../service/NewImageCropper";
import RightOffCanvas from "../RIghtOffCanvas";

function HandleFileUpload() {
    const [fileTab, setFileTab] = useState(null);
    const [fileMobile, setFileMobile] = useState(null);
    const [filePc, setFilePc] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [thumbnails, setThumbnails] = useState({
      pc: "",
      tab: "",
      mobile: "",
    });

    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const childRef = useRef();
    const childRefTwo = useRef();
    const childRefThree = useRef();



    const FILE_CHUNK_SIZE = 10_000_000

    const uploadParts = async (file, urls) => {
      const promises = []
      for (let index = 0; index < urls.length; index++) {
        const start = index * FILE_CHUNK_SIZE
        const end = (index + 1) * FILE_CHUNK_SIZE
        const blob = index < urls.length
          ? file.slice(start, end)
          : file.slice(start)
    
        promises.push({url: urls[index], blob});
      }

      console.log(promises);
      await Promise.all(fetch('http://localhost:9091/api/v1/fileProcess/fetchFileProcess?fileName=4k_24fps.mp4', {
        
      }))
    
      // const resParts = await Promise.all(promises)
    
      // return resParts.map((part, index) => ({
      //   ETag: (part).headers.etag,
      //   PartNumber: index + 1
      // }))
    }
    const handleFileSelect = (event) => {
    setShow(true);
    const file = event.target.files[0];
    fetch('http://localhost:9091/api/v1/fileProcess/fetchFileProcess?fileName=4k_24fps.mp4')
    .then(response => {
      return response.json();
    })
    .then(response => {
      if (response.statusCode === 200) {
        const urls = response.response;
        uploadParts(file, urls);
      }
    })
    // if (file && file.type.substr(0, 5) === "image") {
    //   const img = new Image();
    //   img.onload = function () {
    //     const height = img.height;
    //     if (height < 720) {
    //       setErrorMessage("Image height should be at least 720 pixels");
    //     } else if (height > 1080) {
    //       setErrorMessage("Image height should be no more than 1080 pixels");
    //     } else if (file.size > 5 * 1024 * 1024) {
    //       setErrorMessage("File size should be less than 5MB");
    //     } else {
    //       setErrorMessage("");
    //       Resizer.imageFileResizer(
    //         file,
    //         1280, // max width
    //         720, // max height
    //         "JPEG", // output format
    //         70, // quality
    //         0, // rotation
    //         (uri) => {
    //           setSelectedFile({ file, uri });
    //         },
    //         "base64", // output type
    //         200 // max file size in bytes
    //       );
    //     }
    //   };
    //   img.src = URL.createObjectURL(file);
    // } else {
    //   setErrorMessage("Please select a valid image file");
    // }
    };

    const handleCrop = (type, data) => {
      if (type === "PC") {
        setFilePc(data);
        setThumbnails({ ...thumbnails, pc: filePc });
      } else if (type === "MOBILE") {
        setFileMobile(data);
        setThumbnails({ ...thumbnails, mobile: fileMobile });
      } else if (type === "TAB") {
        setFileTab(data);
        setThumbnails({ ...thumbnails, tab: fileTab });
      }
    };
    
    return (
      <>
        <Form.Group>
            <Form.Label>Upload an image</Form.Label>
            <Form.Control
            className="p-5 cl-gray"
            type="file"
            accept="video/*"
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

        {/* Right toggle  to crop upload image  Start*/}
        <Container className="w-50">
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
        {/* Right toggle  to crop upload image  Start*/}
      </>
    );
}

export default HandleFileUpload;