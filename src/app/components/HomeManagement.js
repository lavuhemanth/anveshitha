import React, { useEffect, useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import DragableTable from "../templates/dragable-table/DragableTable";
import RightOffCanvas from "../templates/RIghtOffCanvas";
import { IS_BOOLEAN } from "../../mapper";
import InfiniteList from "../templates/multi-select-list/InfiniteList";
import SearchNews from "../templates/search-news/SearchNews";
import { environment as config } from "../../assets/config";
import { ToastContainer, toast } from "react-toastify";




function HomeManagement() {

    const [showRightNav, setShowRightNav] = useState(IS_BOOLEAN['FALSE']);
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        fetch(`${config.api_url}/`, {
            method: 'GET',
            'Content-Type': 'application/json' 
        })
        .then(response => response.json())
        .then(response => {
            if (response.statusCode === 200) {

                if (response && response.data) {
                    const data = response.data;
                    setGlobalData(data);
                    toast.success(response.message);
                } else {

                    toast.info(response.message);
                }
            } else {
                toast.warn(response.message)
            }

        })
        .catch(error => {
            toast.error(error.message);
          });
    }, [setGlobalData]);

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
        <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>

       </Container>
    );
}

export default HomeManagement;