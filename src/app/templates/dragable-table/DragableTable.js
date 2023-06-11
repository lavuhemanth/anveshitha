import React, { Component } from "react";
import { Table } from "antd";
import ReactDragListView from 'react-drag-listview';



// https://github.com/raisezhang/react-drag-listview

class DragableTable extends Component {
    constructor(props) {

        super(props);
        this.state = {
            data: []
        };

        console.log(this.state.data , ' ::: State ::::: data')
        this.columns = [
            {
                title: "Key",
                dataIndex: "slug",
                render: (text, record, index) => {
                    return (
                        <>
                            {index + 1}
                        </>
                    )
                }
            },
            {
                title: "Title",
                dataIndex: "title",
                key: "title"
            },
            {
                title: "Status",
                dataIndex: "is_public",
                render: (text, record, index) => {
                    return (
                        <>
                        {record?.is_public === '1' ? 'Yes' : 'No'}
                        </>
                    )
                }
            },
            {
                title: "Publish Date",
                dataIndex: "head_line",
                key: "head_line"
            },
            {
                title: "Actions",
                dataIndex: "category",
                render: (text, record, index) => {
                    return (
                        <>
                            {/* <a className="drag-handle pr-2" href="#" onClick={this.onEdit.bind(record, index)}>Edit</a>
                            <a className="drag-handle" href="#" onClick={this.onDelete.bind(record, index)}>Delete</a> */}
                        </>
                    )
                }
            },
            {
                title: "Operates",
                key: "operate",
                render: (text, record, index) =>
                    <a className="drag-handle" href="#">Drag</a>

            }
        ];

        const that = this;
        this.dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const data = [...that.state.data];
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.setState({
                    data
                });
                this.props.onDrag(data, this.props.category)
            },
            handleSelector: "a",
        };
    }

    onEdit(index) {
        // Edit code here
        console.log(this.state, 'state in cat');
            const data = [...this.state.data];
            this.props.onEdit(data, data[index]);
    }

    onDelete(index) {
        // code goes here
        const data = [...this.state.data];
            this.props.onDelete(data, data[index]);
    }


    render() {
        return (
            <div style={{ margin: 20 }}>
                <ReactDragListView {...this.dragProps}>
                    <Table
                        columns={this.columns}
                        pagination={false}
                        dataSource={this.state.data}
                    />
                </ReactDragListView>
            </div>
        );
    }
}


export default DragableTable;