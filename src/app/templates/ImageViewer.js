'user strict';

import { Container, Image} from "react-bootstrap";


function ImageViewer({srcImg}) {
    return (
      <Container fluid className="m-2 p-1">
       { srcImg ? <Image src={srcImg} shape="thumbnail" fluid /> : <span></span> }
      </Container>
    );
}

export default ImageViewer;