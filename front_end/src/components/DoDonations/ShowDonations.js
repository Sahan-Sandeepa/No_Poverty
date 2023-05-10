import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col, Row, Card } from 'antd';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';

import jsPDF from 'jspdf';
import 'jspdf-autotable'
import { Link, useParams } from 'react-router-dom';


const { Search } = Input;

const Donations = () => {
    const [trans, setTrans] = useState([]);
    const [donate, setDonate] = useState([]);
    const [column, setColumns] = useState([]);
    const [ran, setran] = useState([]);
    const [selectedDonation, setSelected] = useState([])
    const { _id } = useParams();
    function getDonations() {
        axios.get("http://localhost:4000/donation/")
            .then((res) => {
                setDonate(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }
    useEffect(() => {
        getDonations();
    }, [])

    async function handleUpdateStatus(id, value) {

        // console.log(id, value);




        axios

            .patch(

                `http://localhost:4000/donation/${id}`,

                {

                    eventStatus: value,

                },

                { headers: { "Content-Type": "application/json" } }

            )

            .then(() => {

                // alert("Details Successfully Updated!");

                window.location.reload(false);

            })

            .catch((err) => {

                alert(err.message);

            });

    }

    const generatePdf = () => {
        const watermarkTitle = 'My Donations Report';
        // Create the PDF document
        var doc = new jsPDF();
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(10, 10, 'My Donations Report');
        doc.setFillColor(220, 220, 220);
        doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');

        //header and columns of the pdf
        doc.autoTable(
            {
                columns: [
                    { header: 'Name', dataKey: 'name' },
                    { header: ' Email', dataKey: 'email' },
                    { header: 'Contact Number', dataKey: 'contact' },
                    { header: 'Amount Donated', dataKey: 'amount' },
                    { header: 'Status', dataKey: 'status' },



                ],
                body: donate.map(donate => {
                    return {
                        Row: Row,
                        name: donate.name,
                        email: donate.email,
                        contact: donate.contact,
                        amount: donate.amount,
                        status: donate.status,

                    };
                }),
                didDrawPage: function (data) {
                    const pageSize = doc.internal.pageSize;
                    const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                    const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
                    const x = pageWidth / 2;
                    const y = pageHeight / 2;
                    doc.setFontSize(35);
                    doc.setTextColor(255, 128, 128);
                    doc.text(watermarkTitle, x, y, null, null, 'center');

                }
            })
        doc.save('My Donations Report.pdf')

    }


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
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: 'Contact Number',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
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

                <Link to={"/editDonation/" + record._id} ><Button icon={<EditTwoTone />}></Button></Link>
                {/* <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />}></Button> */}

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

                <div style={{ padding: 1, alignItems: "center", width: 900, height: 650, borderRadius: 5 }}>

                    <Card style={{ backgroundColor: "purple" }}>
                        <WrapperCard style={{ backgroundColor: "#37475E", borderRadius: 5 }}>
                            <CustomRow style={{ justifyContent: "space-between", padding: "10px" }} >
                                <h1 style={{ color: "White", fontSize: 18, paddingLeft: 25 }}>Donation History</h1>
                                <Col span={2} />
                                <div style={{paddingRight:50}}>
                                    <Search
                                        placeholder="Input Search Text"
                                        onSearch={onSearch}
                                        style={{
                                            width: 200,
                                        }}
                                    />
                                </div>


                            </CustomRow>
                        </WrapperCard>

                        <Table columns={Columns} dataSource={donate}
                            bordered
                        // title={() => 'Financial Details'}
                        />
                    </Card>

                </div>

            </div>



        </>
    )
}

export default Donations