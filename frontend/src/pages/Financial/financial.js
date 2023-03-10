import React from 'react'
import { Table, Icon, Button, Space, Input } from 'antd';
import Header from '../../components/header';
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, SelectOutlined, MessageOutlined } from '@ant-design/icons';


const { Search } = Input;


const Financial = props => {

    const onSearch = (value) => console.log(value);

    const columns = [{
        title: 'Donation Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>,
    }, {
        title: 'Fund',
        dataIndex: 'address',
        key: 'address',
    },
    ];

    const eventColumn = [{
        title: 'Event Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>,
    }, {
        title: 'Fund',
        dataIndex: 'address',
        key: 'address',
    },
    ];

    const fincolums = [{
        title: 'Program Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>,
    }, {
        title: 'Type',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Date',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Venue',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Total',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Status',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>

                <Button icon={<EditTwoTone />}></Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />}></Button>

                {/* <a href="#">Action 一 {record.name}</a>
                <span className="ant-divider" />
                <a href="#">Delete</a> */}
            </span>
        ),
    }];


    const data = [{
        key: '1',
        name: 'Blood donation',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Manusath derana',
        age: 42,
        address: 'London No. 1 Lake Park',

    }, {
        key: '3',
        name: 'Blood',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }];
    return (
        <>

            <div style={{ padding: 80, backgroundColor: "whitesmoke" }}>


                <div style={{ paddingLeft: 980 }}>
                    <Button style={{ alignItems: "end", backgroundColor: "red" }} type="primary">Create Report</Button>
                </div>
                <div style={{ padding: 25}}>
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        style={{
                            width: 200,
                        }}
                    />
                    <Table columns={fincolums} dataSource={data}
                        bordered
                        title={() => 'Financial Details'}
                        style={{backgroundColor:"grey"}}
                        footer={() => 'Total Bill:'} />

<br></br><br></br>
                    <Table columns={columns} dataSource={data}
                        bordered
                        title={() => 'Donation History'}
                        footer={() => 'Total Bill:'} />

                </div>
            </div>
        </>


    )
}

export default Financial