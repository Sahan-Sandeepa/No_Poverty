import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import JobPost from './JobPost';
import { Link, useParams, useNavigate } from 'react-router-dom'


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
    const [searchText, setSearchText] = useState("");

    const history = useNavigate();


    //popup modal method.if add order click modal pop out
    const addOrder = async () => {
        setIsModalOpen(false);
        setOpenEditOrderModal(false);
        refresh();
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        setIsEditModalOpen(false);
    };

    //modal cancel button 
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsEditModalOpen(false);

    };

    //retireve all the  data
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


    //delete method 

    const handleDelete = async (_id) => {
        setIsDeleteModalOpen(true)
        axios.delete("http://localhost:4000/jobHire/delete/" + _id)
            .then((result) => {
                console.log("Deleted", result);
                // window.location.reload();
                // history.push(history.location.Financial);

            }).catch((err) => {
                console.log(err);
            })
    };

    //tables header

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

                <Button icon={<EditTwoTone key={record._id} />} onClick={() => {
                    setIsEditModalOpen(true);
                    setSelectedItem(record)
                }} >
                </Button>

                <Button icon={<DeleteOutlined style={{ color: 'red' }} />}
                    onClick={() => {
                        handleDelete(record._id);
                        setRefresh(true);
                    }}
                />
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
                <div style={{ padding: 1, alignItems: "center", width: 1000, height: 650, borderRadius: 5 }}>
                    <WrapperCard style={{ backgroundColor: "#37475E" }}>
                        <CustomRow style={{ justifyContent: "space-between", padding: "10px" }} >
                            <h1 style={{ color: "White",fontSize: 18 }}>Job Vacancies</h1>
                            <Col span={12} />
                            <Search
                                placeholder="Input search text"
                                onChange={(e) => setSearchText(e.target.value)}
                                style={{
                                    width: 250,
                                }}

                            />
                            <Button icon={<FilePdfOutlined style={{ fontSize: '21px', color: 'red' }} />} />
                        </CustomRow>
                    </WrapperCard>
                    <Table columns={Columns} dataSource={jobList.filter((jobList) =>
                        jobList.jobTitle.toLowerCase().includes(searchText.toLowerCase())
                    )} />

                    {/* passig data to Job post using props */}

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

        </>
    )
}

export default JobList