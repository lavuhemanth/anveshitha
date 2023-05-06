import React, { useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import DragableTable from "../templates/dragable-table/DragableTable";
import RightOffCanvas from "../templates/RIghtOffCanvas";
import { IS_BOOLEAN } from "../../mapper";
import InfiniteList from "../templates/multi-select-list/InfiniteList";
import SearchNews from "../templates/search-news/SearchNews";




function HomeManagement() {

    const [showRightNav, setShowRightNav] = useState(IS_BOOLEAN['FALSE']);

    const onCloseRightNav = () => {
        // code goes here
        setShowRightNav(IS_BOOLEAN['FALSE'])
    }

    const onRightNav = () => {
            // code goes here
            setShowRightNav(IS_BOOLEAN['TRUE']) 
    }
    
    return (
       <Container>
        <Container>
            <Row>
                <Col>
                    <h2>Home Part 1</h2>
                </Col>
                <Col>
                    <Button className="btn" onClick={onRightNav}>Add</Button>
                </Col>
            </Row>
            <DragableTable/>
            <Container>
        <RightOffCanvas
          handleClose={onCloseRightNav}
          show={showRightNav}
          title={`News List`}
          className="w-50"
        >
        
            <SearchNews/>
            <InfiniteList/>
            
        </RightOffCanvas>
      </Container>
        
        </Container>

       </Container>
    );
}

export default HomeManagement;