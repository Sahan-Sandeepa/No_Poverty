import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Row, Input, Col, Card } from 'antd';
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


    function getAds() {
        axios.get("http://localhost:4000/jobHire/")
            .then((res) => {
                setJobList(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }
    useEffect(() => {
        getAds();
    }, [])

    // const navigate = useNavigate();
    // const navigateJobApply = () => {
    //     navigate('./components/JobFind/JobApply');
    // };

    const columns = [{
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
        key: 'action',
        render: (text, record) => (
            <span>
                <Link to={"/jobApply" } ><Button icon={<EditTwoTone />}></Button></Link>

                {/* <Button icon={<DeleteOutlined style={{ color: 'red' }} />}
                    onClick={() => {
                        navigateJobApply();
                    }}
                /> */}
            </span>
        ),
    },
    ];

    return (
        <>
            <br></br>
            <br></br>
            <br></br>


            <div style={{ paddingLeft: 150 }} >


                <br></br>
                <br></br>
                <div style={{ padding: 1, alignItems: "center", width: 1000, height: 650, borderRadius: 5 }}>
                    <Card style={{ backgroundColor: "lightblue" }}>

                        <WrapperCard style={{ backgroundColor: "#37475E", borderRadius: 5 }}>
                            <CustomRow style={{ justifyContent: "space-between", padding: "10px" }} >
                                <Row>
                                    <h1 style={{ color: "White", fontSize: 18, paddingLeft: 25 }}>Job vacancies</h1>

                                </Row>
                                <Col span={9} />

                                <Search
                                    placeholder="input search text"
                                    onChange={(e) => setSearchText(e.target.value)}
                                    style={{
                                        width: 200,
                                    }}

                                />
                                <br></br>
                                {/* <Button icon={<FilePdfOutlined style={{ fontSize: '21px', color: 'red' }} />} onClick={generatePdf} /> */}
                            </CustomRow>
                        </WrapperCard>


                        <br></br>
                        <br></br>
                        <br></br>
                        <Table columns={columns} dataSource={jobList.filter((job) =>
                            job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
                        )}
                        />
                    </Card>

                </div>

            </div>


        </>
    )
}
export default Showvacancies;