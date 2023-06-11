import React, { useEffect, useState } from "react";
import {  Col,  Row, Form } from "react-bootstrap";
// import Resizer from "react-image-file-resizer";
import AWS from 'aws-sdk';
import { environment as config } from "../../../assets/config";

AWS.config.update({
  accessKeyId: config.aws.aws_accesss,
  secretAccessKey: config.aws.aws_sec,
  region: config.aws.aws_region,
});

const s3 = new AWS.S3();

// import NewImageCropper from "../../service/NewImageCropper";
// import RightOffCanvas from "../RIghtOffCanvas";

function HandleFileUpload({ images, onImageLoad }) {
    // const [fileTab, setFileTab] = useState(thumbnails['fileTab']);
    // const [filePc, setFilePc] = useState(thumbnails['filePc']);
    // const [fileMobile, setFileMobile] = useState(null);
    // const [selectedFile, setSelectedFile] = useState(null);
    const [thumbnails, setThumbnails] = useState({
      filePc: "",
      fileTab: ""
    });

    useEffect(() => {
      setThumbnails({
        filePc: images['filePc'],
        fileTab: images['fileTab']
      })
    }, [images])
    // const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    // const childRef = useRef();
    // const childRefTwo = useRef();
    // const childRefThree = useRef();



    const handleFileSelect = (event, name) => {
    // setShow(true);
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const img = new Image();
      img.onload = async function () {
        // const height = img.height;
        // if (height < 720) {
        //   setErrorMessage("Image height should be at least 720 pixels");
        // } else if (height > 1080) {
        //   setErrorMessage("Image height should be no more than 1080 pixels");
        // } else if (file.size > 5 * 1024 * 1024) {
        //   setErrorMessage("File size should be less than 5MB");
        // } else {
          // setErrorMessage("");
          // Resizer.imageFileResizer(
          //   file,
          //   1280, // max width
          //   720, // max height
          //   "JPEG", // output format
          //   70, // quality
          //   0, // rotation
          //   (uri) => {
          //     // setSelectedFile({ file, uri });

          //   },
          //   "base64", // output type
          //   200 // max file size in bytes
          // );
        const date = new Date();
          const fileUrl = `images/${date.getUTCDate()}-${date.getMonth()}-${date.getFullYear()}/${name}/${file.name}`

          const params = {
                  Bucket: config.aws.aws_bucket,
                  Key: fileUrl,
                  Body: file,
                  ContentType: file.type,
                };
                try {
                  const result = await s3.upload(params).promise();
                  console.log('File uploaded successfully:', result.Location);
                  onImageLoad(name, result.Location);
                } catch (error) {
                  console.log('Error uploading file:', error);
                }
        // }
      };
      img.src = URL.createObjectURL(file);
    } else {
      setErrorMessage("Please select a valid image file");
    }
    };

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
    
    return (
      <>
        <Form.Group>
            <Row>
              <Col>
              <Form.Label>Image (16:9)</Form.Label>
              <Form.Control
                className="p-1 cl-gray"
                type="file"
                accept="image/*"
                name="filePc"
                onChange={e => handleFileSelect(e, 'filePc')}
                />
              </Col>
              <Col>
              <Form.Label>Image (9:16)</Form.Label>
              <Form.Control
                className="p-1 cl-gray"
                type="file"
                accept="image/*"
                name="fileTab"
                onChange={e => handleFileSelect(e, 'fileTab')}
                />
              </Col>
            </Row>

            {errorMessage && (
            <Form.Text className="text-danger">{errorMessage}</Form.Text>
            )}
            <Row>
                <Col>
                    {thumbnails && thumbnails['filePc'] && (
                    <img
                    className="p-2 m-1"
                        alt="cropped"
                        src={thumbnails['filePc']}
                        height="150px"
                        width="150px"
                    />
                    )}
                </Col>
                <Col>
                    {thumbnails && thumbnails['fileTab'] && (
                    <img
                    className="p-2 m-1"
                        alt="cropped"
                        src={thumbnails['fileTab']}
                        height="150px"
                        width="150px"
                    />
                    )}
                </Col>
                {/* <Col>
                    {fileMobile && (
                    <img
                        alt="cropped"
                        src={fileMobile}
                        height="150px"
                        width="150px"
                    />
                    )}
                </Col> */}
            </Row>
        </Form.Group>

        {/* Right toggle  to crop upload image  Start*/}
        {/* <Container className="w-50">
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
        </Container> */}
        {/* Right toggle  to crop upload image  Start*/}
      </>
    );
}

export default HandleFileUpload;