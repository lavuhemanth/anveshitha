import { Button, Table } from "react-bootstrap";


function ContextViewer({ list, onEdit, onDelete }) {
    if (!list.length) return ('');
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th colSpan={2}>Subject</th>

            <th colSpan={1} className="w-100x">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, i) => (
              <tr key={item?.id}>
                <td>{i + 1}</td>
                <td colSpan={2}>{item?.subject}</td>
                <td>
                  <Button
                    className="btn btn-primary mx-3"
                    onClick={(e) => onEdit(e, i)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn btn-primary"
                    onClick={(e) => onDelete(e, i)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
}

export default ContextViewer;