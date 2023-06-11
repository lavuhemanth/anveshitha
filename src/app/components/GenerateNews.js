import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import CreateFrom from "../templates/create-form/CreateForm";
import data from "../../assets/raw_data.json";
import { environment as config } from "../../assets/config";
import DragableTable from "../templates/dragable-table/DragableTable";
import { ToastContainer, toast } from "react-toastify";
import { IS_BOOLEAN } from "../../mapper";


function GenerateNews() {
  const [isLoading, setIsLoading] = useState(IS_BOOLEAN['FALSE'])
  const [globalItems, setGlobalItems] = useState(data);
  const [show, setShow] = useState(IS_BOOLEAN['FALSE']);
  const [selectedDataIndex, setSelectedDataIndex] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const clsEdit = () => {
    setSelectedData(null);
    setSelectedDataIndex(null);
    setShow(false);
  };

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(IS_BOOLEAN['TRUE']);

      fetch(`${config.api_url}/?folder=11-4-2023`, {
          method: 'GET',
          'Content-Type': 'application/json' 
      })
      .then(response => response.json())
      .then(response => {
          if (response.statusCode === 200) {
  
              if (response && response.data) {
                  const data = response.data;
                  setGlobalItems(data);
                  toast.success(response.message);
              } else {
  
                  toast.info(response.message);
              }
          } else {
              toast.warn(response.message)
          }
          setIsLoading(IS_BOOLEAN['FALSE']);
      })
      .catch(error => {
          toast.error(error.message);
          setIsLoading(IS_BOOLEAN['FALSE']);
        });
    }
}, [setGlobalItems, setIsLoading, isLoading]);

  const updateJSON = (payload) => {
    debugger
    if (!isLoading) {
      setIsLoading(IS_BOOLEAN['TRUE']);
      fetch(`${config?.api_url}/update?folder=11-4-2023`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(response => {
        console.log(response, 'Updated json');
        if (response.statusCode === 201) {
          if (response.data) {
            const data = response.data;
            setGlobalItems(data);
            toast.success(response.message);
          } else {
            toast.warn(response.message)
          }
        } else {
          toast.error(response.message);
        }
        setIsLoading(IS_BOOLEAN['FALSE']);
      })
      .catch(error => {
        toast.error(error.message);
        setIsLoading(IS_BOOLEAN['FALSE']);
      });
    } 
    return;
  }

  const addToDescriptionList = (data) => {
    console.log(
      typeof selectedDataIndex,
      selectedDataIndex , selectedDataIndex >= 0, ' COnditions'
    );
    if (selectedDataIndex !== null && Number(selectedDataIndex) >= 0) {
      const newList = [...globalItems[data?.category]];
      newList[selectedDataIndex] = data;
      const jsonDataUpdate = {
        ...globalItems,
      };
      jsonDataUpdate[data?.category] = newList;
      setGlobalItems(jsonDataUpdate);
      updateJSON(jsonDataUpdate);
    } else {
      const jsonDataCreate = {
        ...globalItems,
      };
      const newsList = [...jsonDataCreate[data?.category], data];
      jsonDataCreate[data?.category] = newsList;
      setGlobalItems(jsonDataCreate);
      updateJSON(jsonDataCreate);
    }
    clsEdit();
    console.log(globalItems, 'Global Object updateds');
  };

  const onEditSubject = (data, indx) => {
    debugger
    if (data && data?.category) {
      setShow(true);
      setSelectedDataIndex(indx);
      setSelectedData(data);
    }
  };

  const deleteSubject = (data, indx) => {
    if (data && data?.category) {
      const newsList = globalItems[data?.category];
      const categorysData= {
        ...globalItems,
      };
      newsList.splice(indx, 1);
      categorysData[data?.category] = newsList;
      setGlobalItems(categorysData);
      // updateJSON(categorysData);
    }
  };

  const onDragCategory = (list, category) => {
    if (list && category) {
      const categorysData= {
        ...globalItems,
      };
      categorysData[data?.category] = list;
      setGlobalItems(categorysData);
      // updateJSON(categorysData);
    }
  }


 
  return (
    <div>
      <Row className="mb-2">
        <Col>
          <h1>News Data</h1>
        </Col>
        <Col className="align-right">
          {!show && <Button onClick={() => setShow(true)}>Add News</Button>}
          {show && <Button onClick={() => clsEdit()}>close News</Button>}
        </Col>
      </Row>

      <Row className="mb-2">
        {show && (
          <CreateFrom onSubmit={addToDescriptionList} newsData={selectedData} />
        )}
        
         {!show && globalItems && globalItems['political'].length > 0 && (
          <>
          <h1>రాజకీయం</h1>
          <DragableTable
            data={globalItems['political']}
            category='political'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )}

      {!show && globalItems && globalItems['ap'].length > 0 && (
        <>
        <h1>ఆంధ్రప్రదేశ్</h1>
          <DragableTable
            data={globalItems['ap']}
            category='ap'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
          />
            </>
        )}
{/*
{!show && globalItems && globalItems['tn'].length > 0 && (
          <>
          <h1>తెలంగాణ</h1>
          <DragableTable
            list={globalItems['tn']}
            category='tn'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )}

{!show && globalItems && globalItems['international'].length > 0 && (
          <>
          <h1>జాతీయం</h1>
          <DragableTable
            list={globalItems['international']}
            category='international'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )}

{!show && globalItems && globalItems['sports'].length > 0 && (
          <>
          <h1>క్రీడలు</h1>
          <DragableTable
            list={globalItems['sports']}
            category='sports'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )}

{!show && globalItems && globalItems['entertainment'].length > 0 && (
          <>
          <h1>చిత్ర</h1>
          <DragableTable
            list={globalItems['entertainment']}
            category='entertainment'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )}

{!show && globalItems && globalItems['education'].length > 0 && (
          <>
          <h1>విద్య</h1>
          <DragableTable
            list={globalItems['education']}
            category='education'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )}

{!show && globalItems && globalItems['business'].length > 0 && (
          <>
          <h1>బిజినెస్</h1>
          <DragableTable
            list={globalItems['business']}
            category='business'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )}

{!show && globalItems && globalItems['trending'].length > 0 && (
          <>
          <h1>ట్రెండింగ్</h1>
          <DragableTable
            list={globalItems['trending']}
            category='trending'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )}

{!show && globalItems && globalItems['cartoon_tabs'].length > 0 && (
          <>
          <h1>Cartoon Tab</h1>
          <DragableTable
            list={globalItems['cartoon_tabs']}
            category='cartoon_tabs'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            onDrag={onDragCategory}
            />
            </>
        )} */}
        {/* {!show && globalItems && globalItems['main_news'].length > 0 && (
          <>
          <h1>Home Page Section-1</h1>
          <NewsData
            list={globalItems['main_news']}
            category='main_news'
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            />
            </>
        )}

{!show && globalItems && globalItems['main_news_list'].length > 0 && (
          <>
          <h1>Home Page Section-2 List</h1>
          <NewsData
            list={globalItems['main_news_list']}
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            />
            </>
        )}
        
        {!show && globalItems && globalItems['main_ap_special'].length > 0 && (
          <>
          <h1>Home Page Ap Special</h1>
          <NewsData
            list={globalItems['main_ap_special']}
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            />
            </>
        )}
        {!show && globalItems && globalItems['main_tn_special'].length > 0 && (
          <>
          <h1>Home Page Tn Special</h1>
          <NewsData
            list={globalItems['main_tn_special']}
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            />
            </>
        )}

{!show && globalItems && globalItems['banner'].length > 0 && (
          <>
          <h1>Home Page Swiping Baners</h1>
          <NewsData
            list={globalItems['banner']}
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            />
            </>
        )}

{!show && globalItems && globalItems['homeContent'].length > 0 && (
          <>
          <h1>Home Page Swiping Baners</h1>
          <NewsData
            list={globalItems['homeContent']}
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            />
            </>
        )}

{!show && globalItems && globalItems['tranding_updates'].length > 0 && (
          <>
          <h1>Home Page Tranding Updates</h1>
          <NewsData
            list={globalItems['tranding_updates']}
            onDelete={deleteSubject}
            onEdit={onEditSubject}
            />
            </>
        )} */}

        {!show && globalItems && (
          <h1 className="text-center m-5 p-5">No Data found</h1>
        )}
      </Row>
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
    </div>
  );
}

export default GenerateNews;
