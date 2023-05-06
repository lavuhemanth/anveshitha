import React, { Component } from "react";
import { Table } from "antd";
import ReactDragListView from 'react-drag-listview';



// https://github.com/raisezhang/react-drag-listview

class DragableTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    key: "1",
                    name: "Boran",
                    gender: "male",
                    age: "12",
                    address: "New York"
                },
                {
                    key: "2",
                    name: "JayChou",
                    gender: "male",
                    age: "38",
                    address: "TaiWan"
                },
                {
                    key: "3",
                    name: "Lee",
                    gender: "female",
                    age: "22",
                    address: "BeiJing"
                },
                {
                    key: "4",
                    name: "ChouTan",
                    gender: "male",
                    age: "31",
                    address: "HangZhou"
                },
                {
                    key: "5",
                    name: "AiTing",
                    gender: "female",
                    age: "22",
                    address: "Xi’An"
                }
            ]
        };
        this.columns = [
            {
                title: "Key",
                dataIndex: "key"
            },
            {
                title: "News Title",
                dataIndex: "name"
            },
            {
                title: "Status",
                dataIndex: "gender"
            },
            {
                title: "Published",
                dataIndex: "age"
            },
            {
                title: "Date",
                dataIndex: "address"
            },
            {
                title: "Actions",
                dataIndex: "address",
                render: (text, record, index) => {
                    return (
                        <>
                            <a className="drag-handle" href="#" onClick={this.onEdit(record)}>Edit</a>
                            <a className="drag-handle" href="#" onClick={this.onDelete(record)}>Delete</a>
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
            },
            handleSelector: "a",
        };
    }

    onEdit(data) {
        // Edit code here
    }

    onDelete(data) {
        // code goes here
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                <h2>Table row with dragging</h2>
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