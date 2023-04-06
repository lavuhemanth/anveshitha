import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function RightOffCanvas({ show, handleClose, title, children, ...props }) {
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightOffCanvas;

// function Example() {
//   return (
//     <>
//       {["start", "end", "top", "bottom"].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

