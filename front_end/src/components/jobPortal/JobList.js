import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import JobPost from './JobPost';
import { Link, useParams } from 'react-router-dom'


const { Search } = Input;


const JobList = () => {
    const [jobList, setJobList] = useState([]);
    const [deleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [openEditOrderModal, setOpenEditOrderModal] = useState(false);
    const [searchResult, setSearchResult] = useState([])
    const { _id } = useParams();
    const [refresh, setRefresh] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const addOrder = async () => {
        setIsModalOpen(false);
        setOpenEditOrderModal(false);
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
    function getJobList() {
        axios.get("http://localhost:4000/jobHire/")
            .then((res) => {
                setJobList(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }
    useEffect(() => {
        getJobList();
    }, [])

    const handleDelete = async (_id) => {
        axios.delete("http://localhost:4000/jobHire/delete/" + _id)
            .then((result) => {
                console.log("Deleted", result);
            }).catch((err) => {
                console.log(err);
            })
    };

    const onSearch = (value) => console.log(value);

    const Columns = [{
        title: 'Job Title',
        dataIndex: 'jobTitle',
        key: 'jobTitle',
    }, {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
    }, {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Opening Date',
        dataIndex: 'openingDate',
        key: 'openingDate',
    }, {
        title: 'Closing Date',
        dataIndex: 'closingDate',
        key: 'closingDate',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>

                <Button icon={<EditTwoTone />}
                    onClick={() => { setIsModalOpen(true);
                    setSelectedItem(record) }} type="primary">
                </Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />}
                    onClick={() => handleDelete(record._id)
                    }>
                </Button>

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
                    <Button onClick={() => { setIsModalOpen(true) }} type="primary">Create Report</Button>


                </div>
                <br></br>
                <br></br>
                <div style={{ paddingLeft: 50 }} >
                    <div style={{ padding: 1, alignItems: "center", width: 900, height: 650, borderRadius: 5 }}>
                        {/* <Col span={50} />
            <Col span={30}> */}
                        <WrapperCard style={{ backgroundColor: "#37475E" }}>
                            <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                                <h1 style={{ color: "White" }}>Job Vacancies</h1>
                                <Col span={12} />
                                <Search
                                    placeholder="input search text"
                                    onSearch={onSearch}
                                    style={{
                                        width: 250,
                                    }}
                                />
                                <Button icon={<FilePdfOutlined style={{ fontSize: '21px', color: 'red' }} />} />
                            </CustomRow>
                        </WrapperCard>
                        <Table columns={Columns} dataSource={jobList}
                        // bordered
                        // title={() => 'Financial Details'}
                        />
                        {/* </Col> */}

                        <JobPost
                            isOpen={isModalOpen}
                            handleCancel={handleCancel}
                            handleOk={addOrder}

                        />
                        <JobPost
                            isOpen={isEditModalOpen}
                            handleCancel={handleCancel}
                            handleOk={addOrder}
                            selectedItem={selectedItem}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default JobList