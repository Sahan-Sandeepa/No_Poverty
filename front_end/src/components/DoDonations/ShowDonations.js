import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';


const { Search } = Input;

const Donations = () => {
    const [donate, setDonate] = useState([]);
    const [column, setColumns] = useState([]);
    const [ran,setran] =useState([]);

    function getDonations() {
        axios.get("http://localhost:4000/donation/")
            .then((res) => {
                setDonate(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }
    useEffect(() => {
        getDonations();
    }, [])


    const onSearch = (value) => console.log(value);

    // const columns = [{
    //     title: 'Donation Name',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: text => <a href="#">{text}</a>,
    // }, {
    //     title: 'Fund',
    //     dataIndex: 'address',
    //     key: 'address',
    // },
    // ];
    

    const Columns=[{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: 'Contact Number',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    // }, {
    //     title: 'Status',
    //     dataIndex: 'status',
    //     key: 'status',
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
    return (
        <div style={{ padding: 1, alignItems: "center", width: 900, height: 650, borderRadius: 5 }}>
            <Col span={50} />
            <Col span={30}>

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Donation History</h1>
                        <Col span={10} />
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />
                        <Button icon={<FilePdfOutlined style={{ fontSize: '22px', color: 'red' }} />} />
                    </CustomRow>
                </WrapperCard>
                <Table columns={Columns} dataSource={donate}
                    bordered
                // title={() => 'Financial Details'}
                />
            </Col>
        </div>
    )
}

export default Donations