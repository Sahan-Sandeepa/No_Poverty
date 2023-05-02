import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Row, Input, Col } from 'antd';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import { Link, useParams, useNavigate } from 'react-router-dom'
import DeleteModal from '../common/DeleteModal';

import jsPDF from 'jspdf'
import 'jspdf-autotable'

const { Search } = Input;


const Showvacancies = () => {
    const [jobList, setJobList] = useState([]);
    const [searchResult, setSearchResult] = useState([])
    const [searchText, setSearchText] = useState("");

    // const history = useNavigate();

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
    }, []);



    const Columns = [{
        title: 'Job Title',
        dataIndex: 'jobTitle',
        key: 'jobTitle',
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Opening Date',
        dataIndex: 'openingDate',
        key: 'openingDate',
    },
    {
        title: 'Closing Date',
        dataIndex: 'closingDate',
        key: 'closingDate',
    },
    {
        title: 'Action',
        key: 'createdAt',

    }, {
        title: 'Action',
        key: 'updatedAt',

    }, {
        title: 'Action',
        key: '_id',

    }, ];
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div style={{ paddingLeft: 150 }} >
                {/* <div style={{ paddingLeft: 870 }} >
                    <Button onClick={() => { setIsModalOpen(true) }} type="primary">Add New Vacancy</Button>


                </div> */}
                <br></br>
                <br></br>
                <div style={{ padding: 1, alignItems: "center", width: 1000, height: 650, borderRadius: 5 }}>
                    <WrapperCard style={{ backgroundColor: "#37475E" }}>
                        <CustomRow style={{ justifyContent: "space-between", padding: "10px" }} >
                            <h1 style={{ color: "White", fontSize: 18 }}>Job Vacancies</h1>
                            <Col span={12} />
                            <Search
                                placeholder="Input search text"
                                onChange={(e) => setSearchText(e.target.value)}
                                style={{
                                    width: 250,
                                }}

                            />

                            {jobList.filter((val) => {
                                if (searchText === "") {
                                    return val;
                                } else if (val.jobTitle.toLowerCase().includes(searchText.toLowerCase()) ||
                                    val.location.toLowerCase().includes(searchText.toLowerCase()) ||
                                    val.company.toLowerCase().includes(searchText.toLowerCase()) ||
                                    val.openingDate.toLowerCase().includes(searchText.toLowerCase()) ||
                                    val.closingDate.toLowerCase().includes(searchText.toLowerCase())) {
                                    return val;
                                }
                            })}
                            {/* <Button icon={<FilePdfOutlined style={{ fontSize: '21px', color: 'red' }} onClick={generatePdf} />} /> */}
                        </CustomRow>
                    </WrapperCard>
                    <Table columns={Columns} dataSource={jobList} />

                </div>
            </div>

        </>
    )
}

export default Showvacancies;