import React from 'react';
import { Button, Table } from 'react-bootstrap';

function NewsData({ list, onEdit, onDelete }) {
  return (
    <>
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

      {/* <TableWithDragAndDrop data={list} /> */}
    </>
  );
}

export default NewsData;