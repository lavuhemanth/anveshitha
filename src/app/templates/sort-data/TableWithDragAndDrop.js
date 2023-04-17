import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TableRowDraggable from './TableRowDraggable';
import update from "immutability-helper";


const TableWithDragAndDrop = () => {
  const [rows, setRows] = useState([
    { title: "Title one", subject: "Some text" },
    { title: "Title Two", subject: "Some text" },
    { title: "Title Three", subject: "Some text" },
    { title: "Title four", subject: "Some text" },
    { title: "Title five", subject: "Some text" },
    { title: "Title six", subject: "Some text" },
  ]);

  const moveRow = (dragIndex, hoverIndex) => {
    const draggedRow = rows[dragIndex];
    setRows(
      update(rows, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedRow],
        ],
      })
    );
  };

  

  return (
    <DndProvider backend={HTML5Backend}>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRowDraggable
              key={index}
              id={index + 1+ 'rs'}
              index={index}
              moveRow={moveRow}
            >
              <td>{index + 1}</td>
              <td>
                <h3>{row?.title}</h3>
                <p>{row?.subject}</p>
              </td>
              <td></td>
            </TableRowDraggable>
          ))}
        </tbody>
      </Table>
    </DndProvider>
  );
};

export default TableWithDragAndDrop;
