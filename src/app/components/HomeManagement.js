import React, { useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import DragableTable from "../templates/dragable-table/DragableTable";
import RightOffCanvas from "../templates/RIghtOffCanvas";
import { IS_BOOLEAN } from "../../mapper";
import InfiniteList from "../templates/multi-select-list/InfiniteList";
import SearchNews from "../templates/search-news/SearchNews";
import SearchComponent from "./SearchComponent";




function HomeManagement() {

    const [showRightNav, setShowRightNav] = useState(IS_BOOLEAN['FALSE']);
    const [searchData, setSearchData] = useState([]);

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

            <SearchComponent onCloseRightNav={onCloseRightNav} showRightNav={showRightNav}></SearchComponent>
      </Container>
        
        </Container>

       </Container>
    );
}

export default HomeManagement;