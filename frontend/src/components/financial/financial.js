import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input } from 'antd';
import Header from '../header';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, SelectOutlined, MessageOutlined } from '@ant-design/icons';


const { Search } = Input;


const Financial = () => {
    const [financial, setFinancial] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/5000/financial/')
            .then(response => {
                setFinancial(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
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
        // <>

        //     <div style={{ padding: 80, backgroundColor: "whitesmoke" }}>


        //         <div style={{ paddingLeft: 980 }}>
        //             <Button style={{ alignfinancials: "end", backgroundColor: "red" }} type="primary">Create Report</Button>
        //         </div>
        //         <div style={{ padding: 25 }}>
        //             <Search
        //                 placeholder="input search text"
        //                 onSearch={onSearch}
        //                 style={{
        //                     width: 200,
        //                 }}
        //             />
        //             <Table columns={fincolums} dataSource={financial}
        //                 bordered
        //                 title={() => 'Financial Details'}
        //                 style={{ backgroundColor: "grey" }}
        //                 footer={() => 'Total Bill:'} />

        //             <br></br><br></br>
        //             {/* <Table columns={columns} dataSource={financial}
        //                 bordered
        //                 title={() => 'Donation History'}
        //                 footer={() => 'Total Bill:'} /> */}

        //         </div>
        //     </div>
        // </>
        <div>
            <h1>My App</h1>
            <ul>
                {financial.map(financial => (
                    <><td>{financial.name}</td><td>{financial.type}</td><td>{financial.date}</td><td>{financial.venue}</td><td>{financial.total}</td><td>{financial.status}</td></>
                ))}
            </ul>
        </div>

    )
}

export default Financial