import React, { useState, useEffect, useContext } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import Header from '../header';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import swal from 'sweetalert';
import { Link, useParams } from 'react-router-dom'
import AddFinancial from './AddFinancial';



const { Search } = Input;


const Financial = () => {
    const [financial, setFinancial] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState("");
    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const { _id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState < boolean > (false);




    const openCloseEditModal = async () => {
        await refresher();
        setIsEditModalOpen(false);
    }

    const handleOk = async () => {
        await refresher();
        setIsOpen(false)
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setIsOpen(false);
    };

    function getFinancial() {
        axios.get("http://localhost:4000/financial/")
            .then((res) => {
                setFinancial(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }
    useEffect(() => {
        getFinancial();
    }, [])

    useEffect(() => {


    }, [])

    // const handleDelete = (_id) => {
    //     setFinancial(financial => financial.filter(financial => financial._id !== _id));
    //   };
    const handleDelete = async (_id) => {
        axios.delete("http://localhost:4000/financial/" + _id)
            .then((result) => {
                console.log("Deleted", result);
            }).catch((err) => {
                console.log(err);
            })
    };


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


    const Columns = [{
        title: '_id',
        dataIndex: '_id',
        key: '_id',
        hidden: true

    }, {
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

                <Button icon={<EditTwoTone />} onClick={() => {
                    const d = {
                        _id: record._id,
                        name: record.name,
                        type: record.type,
                        date: record.date,
                        venue: record.venue,
                        total: record.total,
                        status: record.status
                    }
                    setSelectedOrder(d)
                    setIsEditModalOpen(true)
                }} ></Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />}
                    //  onClick={handleDelete}
                    onClick={() => handleDelete(record._id)}

                ></Button>

                {/* <a href="#">Action 一 {record.name}</a>
                <span className="ant-divider" />
                <a href="#">Delete</a> */}
            </span>
        ),
    }];
    return (

        //     
        <>

            <div>
                <a href="/addfinancial"> <Button >Create Report</Button></a>
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
                                <Button icon={<FilePdfOutlined style={{ fontSize: '22px', color: 'red' }} />} />
                            </CustomRow>
                        </WrapperCard>
                        <Table columns={Columns} dataSource={financial}
                            bordered
                        // title={() => 'Financial Details'}
                        />
                        <AddFinancial
                            shouldOpen={isEditModalOpen}
                            handleCancel={openCloseEditModal}
                            handleDelete={openCloseEditModal}
                            handleOk={handleOk}

                        />
                    </Col>
                </div>
            </div>
        </>
    )
}

export default Financial