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
import DeleteModal from '../common/DeleteModal';


const { Search } = Input;


const Financial = () => {
    const [financial, setFinancial] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState("");
    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("");
    const [deleteModalOpen, setIsDeleteModalOpen] = useState(false)


    const { _id } = useParams();
    const [refresh, setRefresh] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
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
    }, [refresh])


    // const handleDelete = (_id) => {
    //     setFinancial(financial => financial.filter(financial => financial._id !== _id));
    //   };
    const handleDelete = async (_id) => {
        setIsDeleteModalOpen(true)
        axios.delete("http://localhost:4000/financial/" + _id)
            .then((result) => {
                console.log("Deleted", result);
            }).catch((err) => {
                console.log(err);
            })
    };

    const handleUpdate = async (_id) => {
        setIsDeleteModalOpen(true)
        axios.put("http://localhost:4000/financial/" + _id)
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
                <Button icon={<EditTwoTone />} onClick={() => handleUpdate(record._id)}></Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />}
                    //  onClick={handleDelete}
                    onClick={() => handleDelete(record._id)
                    }

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

            <br></br>
            <br></br>
            <br></br>

            <div style={{ paddingLeft: 180 }} >
                <div style={{ paddingLeft: 780 }} >
                    <Button onClick={() => { setIsModalOpen(true) }} type="primary">Create Report</Button>


                </div>
                <br></br>
                <br></br>

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
                        />
                        <AddFinancial
                            isModalOpen={isModalOpen}
                            handleCancel={handleCancel}
                            handleOk={handleOk}

                        />

                    </Col>
                </div>
            </div>
        </>
    )
}

export default Financial