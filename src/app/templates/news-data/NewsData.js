import React, { useState } from 'react';
import { Button, Table, Pagination, Container } from 'react-bootstrap';
import RightOffCanvas from '../RIghtOffCanvas';

function NewsData({ list, onEdit, onDelete, category, onPagnation, totalRecords, totalpages = 1}) {

  const [showShuffle, setShowShuffle] = useState(false);
  let active = 1;
let items = [];
for (let number = 1; number <= totalpages; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={() => onPagnation(number, category._id)}>
      {number}
    </Pagination.Item>,
  );
}

const onCloseSubjectNav = () => {
  setShowShuffle(false);
}
  return (
    <>
    <div className='d-flex justify-content-end m-2'>
    <Button onClick={() => setShowShuffle(true)}>Shuffle News</Button>
    </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th colSpan={2}>Title</th>
            <th>Status</th>
            <th>Publish Date</th>
            <th className="w-100x">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td colSpan={2}>{item?.title}</td>
                <td >{item?.is_public === '1' ? 'Yes' : 'No'}</td>
                <td>
                  {new Date(item?.publish_date).getDate()}-
                  {new Date(item?.publish_date).getMonth() + 1}-
                  {new Date(item?.publish_date).getFullYear()}
                </td>
                <td>
                  <Button
                    className="btn btn-primary mx-3"
                    onClick={() => onEdit(i)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn btn-primary"
                    onClick={() => onDelete(i)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className='d-flex flex-column align-items-md-end'>
      <p className='m-0'><Pagination>{items}</Pagination></p>
      <p className='text-small m-0'>{totalRecords} records</p>
      </div>
      <Container>
        <RightOffCanvas
          handleClose={onCloseSubjectNav}
          show={showShuffle}
          title="Shuffle Data"
          className="w-50"
        >
        
        </RightOffCanvas>
      </Container>
    </>
  );
}

export default NewsData;