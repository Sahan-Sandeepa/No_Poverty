import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col } from 'antd';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';


const { Search } = Input;


const JobList = () => {
    const [jobList, setJobList] = useState([]);
    const [column, setColumns] = useState([]);

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

                <Button icon={<EditTwoTone />}></Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />}></Button>

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

                        {/* <AddFinancial
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}

            />
            <AddFinancial
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
            /> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default JobList