import React from "react";
import { Table } from "react-bootstrap";

const HeadLinesTable = () => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="sticky-col">Header 1</th>
            <th className="sticky-col">Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
            <th>Header 5</th>
            <th>Header 5</th>
            <th>Header 5</th>
            <th>Header 5</th>
            <th>Header 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sticky-col">Row 1, Column 1</td>
            <td className="sticky-col">Row 1, Column 2</td>
            <td>Row 1, Column 3</td>
            <td>Row 1, Column 4</td>
            <td>Row 1, Column 5</td>
            <td>Row 1, Column 4</td>
            <td>Row 1, Column 5</td>
            <td>Row 1, Column 4</td>
            <td>Row 1, Column 5</td>
          </tr>
          <tr>
            <td className="sticky-col">Row 2, Column 1</td>
            <td className="sticky-col">Row 2, Column 2</td>
            <td>Row 2, Column 3</td>
            <td>Row 2, Column 4</td>
            <td>Row 2, Column 5</td>
            <td>Row 2, Column 4</td>
            <td>Row 2, Column 5</td>
            <td>Row 2, Column 4</td>
            <td>Row 2, Column 5</td>
          </tr>
          <tr>
            <td className="sticky-col">Row 3, Column 1</td>
            <td className="sticky-col">Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
            <td>Row 3, Column 4</td>
            <td>Row 3, Column 5</td>
            <td>Row 3, Column 4</td>
            <td>Row 3, Column 5</td>
            <td>Row 3, Column 4</td>
            <td>Row 3, Column 5</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HeadLinesTable;
