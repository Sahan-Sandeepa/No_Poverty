import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import { Link, useParams } from 'react-router-dom'
import PublishAd from './PublishAd';

const { Search } = Input;


const Ads = () => {
    const [ads, setAds] = useState([]);
    const [column, setColumns] = useState([]);

    const [deleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [openEditOrderModal, setOpenEditOrderModal] = useState(false);

    const { _id } = useParams();
    const [refresh, setRefresh] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null)
    const addOrder = async () => {
        setIsModalOpen(false);
        // setOpenEditOrderModal(false);
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        setIsEditModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsEditModalOpen(false);

    };



    function getAds() {
        axios.get("http://localhost:4000/adDonations/")
            .then((res) => {
                setAds(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }
    useEffect(() => {
        getAds();
    }, [])

    const handleDelete = async (_id) => {
        axios.delete("http://localhost:4000/adDonations/" + _id)
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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    }, {
        title: 'Small Description',
        dataIndex: 'smallDes',
        key: 'smallDes',
    },
    {
        title: 'Help Required',
        dataIndex: 'help',
        key: 'help',
    }, {
        title: 'Long Description',
        dataIndex: 'longDes',
        key: 'longDes',
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

                <Button icon={<EditTwoTone key={record._id} />}onClick={()=>{
                    setIsEditModalOpen(true);
                    setSelectedItem(record)
                }}>

                </Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }}
                    onClick={() => handleDelete(record._id)} />}></Button>

                {/* <a href="#">Action 一 {record.name}</a>
                <span className="ant-divider" />
                <a href="#">Delete</a> */}
            </span>
        ),
    }];
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div style={{ paddingLeft: 150 }} >
                <div style={{ paddingLeft: 870 }} >
                    <Button onClick={() => { setIsModalOpen(true) }} type="primary">Create Advertistment</Button>
                </div>
                <div style={{ padding: 1, alignItems: "center", width: 900, height: 650, borderRadius: 5 }}>
                    <Col span={50} />
                    <Col span={30}>

                        <WrapperCard style={{ backgroundColor: "#37475E" }}>
                            <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                                <h1 style={{ color: "White" }}>Advertistment Summmary</h1>
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
                        <Table columns={Columns} dataSource={ads}
                            bordered
                        // title={() => 'Financial Details'}
                        />

                        <PublishAd
                            isOpen={isModalOpen}
                            handleCancel={handleCancel}
                            handleOk={addOrder}

                        />
                        <PublishAd
                            isOpen={isEditModalOpen}
                            handleCancel={handleCancel}
                            handleOk={addOrder}
                            selectedItem={selectedItem}
                        />
                    </Col>
                </div>
            </div>

        </>
    )
}

export default Ads