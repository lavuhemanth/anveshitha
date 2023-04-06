import Cropper from "react-easy-crop";
import { useState, useImperativeHandle, forwardRef } from "react";
import { useCallback } from 'react';
import { getCroppedImg } from "./canvasUtils";

const NewImageCropper = forwardRef(({ yourImage, aspectRatio, setImageSrc }, ref) => {
  const [crop, setCrop] = useState({ x: 2, y: 2 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppdImage = await getCroppedImg(yourImage, croppedAreaPixels);
      setCroppedImage(croppdImage);
      setImageSrc(croppdImage);
    } catch (e) {
      console.error(e);
    }
  }, [yourImage, croppedImage, setImageSrc, croppedAreaPixels]);

  useImperativeHandle(ref, () => ({
    cropped() {
      showCroppedImage();
    },
    onClose() {
      setCroppedImage(null);
    }
  }));

  return (
    <div className="App">
      <div className="crop-container w-100p h-450px py-10x">
        <Cropper
          image={yourImage}
          crop={crop}
          zoom={zoom}
          aspect={aspectRatio}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="controls">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(e.target.value);
          }}
          className="zoom-range"
        />
      </div>
      {/* <Button
        onClick={showCroppedImage}
        variant="contained"
        color="primary"
        className="btn btn-primary crop-button py-10x my-3"
        // classes={{ root: classes.cropButton }}
      >
        Crop
      </Button> */}
      {/* <img src={croppedImage} alt={"crop"} /> */}
    </div>
  );
});

export default NewImageCropper;