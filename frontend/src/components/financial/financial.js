import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import Header from '../header';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';


const { Search } = Input;


const Financial = () => {
    const [financial, setFinancial] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost/5000/financial/')
    //         .then(response => {
    //             setFinancial(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);
    // function getAllBranchDetails() {
    //     axios.get("http://localhost:3000/financial/")
    //         .then((res) => {
    //             setFinancial(res.data);
    //         })
    //         .catch((err) => {
    //             alert(err.message);
    //         });
    // }

    // const fetchData=()=>{
    //     return
    //     fetch('http://localhost:3000/financial')
    //     .then((response)=> response.json())
    //     .then((data)=>setFinancial(data));
    // }
    // const fetchFinancial=async()=>{
    //     const response=await fetch('http://localhost:5000/financial/')
    //     const json=await response.json()

    //     if(response.ok){
    //         setFinancial(json)

    //     }
    // }

    // useEffect(() => {
    //     fetchFinancial();
    // }, [])


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



    const fincolums = [{
        title: 'Program Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    }, {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Venue',
        dataIndex: 'venue',
        key: 'venue',
    }, {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
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
                        <h1 style={{ color: "White" }}>Financial Summmary</h1>
                        <Col span={10} />
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />
                        <Button icon={<FilePdfTwoTone />} />
                    </CustomRow>
                </WrapperCard>
                <Table columns={fincolums} dataSource={financial}
                    bordered
                // title={() => 'Financial Details'}
                />
            </Col>
        </div>
    )
}

export default Financial