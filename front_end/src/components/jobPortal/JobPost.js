import React from 'react'
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    DatePicker,
    Layout,
    message
} from 'antd';
import { useState } from 'react';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import WrapperContainer from '../common/Wrapper_container';
import axios from "axios";
import { } from "react-router-dom";


const { Option } = Select;
const { Header, Content, Footer } = Layout;


const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};

const JobPost = () => {
    const [size, setSize] = useState('large'); // default is 'middle'
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [openingDate, setOpeningDate] = useState("");
    const [closingDate, setClosingDate] = useState("");
    const [company, setCompany] = useState("");


    function sendData(e) {
        e.preventDefault();

        const jobPostSchema = {
            jobTitle, location, openingDate, closingDate, company,
        };

        axios
            .post("http://localhost:4000/jobHire/add", jobPostSchema)
            .then(() => {
                message("inserted!", "Data Inserted!", "success");
                window.location.reload(false);
            })
            .catch((err) => {
                alert(err);
            });
    }


    return (
        <>
            <div style={{ padding: 1, alignItems: "center", backgroundColor: '#D3D3D3', width: 900, height: 650, borderRadius: 5 }}>

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Add New Vacancy</h1>
                    </CustomRow>
                </WrapperCard>
                <Form
                    style={{ padding: 1, paddingLeft: 140 }}
                >
                    <br></br>
                    <h1 style={{ color: "Black" }}>Add New Vacancy</h1><br></br>
                    <Row>
                        {/* <Col span={12}> */}
                        <Form.Item
                            name="jobTitle"
                            label="Job Title"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter Job Title"
                                }

                            ]}
                        >
                            <Input
                                onChange={(val) => {
                                    setJobTitle(val.target.value);
                                }}
                            />
                        </Form.Item>
                        <Form.Item name="openingDate" label="Opening Date" {...config}>
                            <DatePicker
                                onChange={(val) => {
                                    setOpeningDate(val);
                                }} />
                        </Form.Item>
                        {/* </Col> */}
                    </Row>

                    <Row>
                        <Form.Item
                            name="location"
                            label="Location"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter Location"
                                }

                            ]}
                        >
                            <Input
                                onChange={(val) => {
                                    setLocation(val.target.value);
                                }}
                            />
                        </Form.Item>
                        <Form.Item name="closingDate" label="Closing Date" {...config}>
                            <DatePicker
                                onChange={(val) => {
                                    setClosingDate(val);
                                }} />
                        </Form.Item>
                    </Row>

                    <Row>
                        <Form.Item
                            name="company"
                            label="Company"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter the Company name"
                                }

                            ]}
                        >
                            <Input
                                onChange={(val) => {
                                    setCompany(val.target.value);
                                }}
                            />
                        </Form.Item>
                    </Row>

                    <Row>
                        <Col span={13} />
                        <Form.Item label=" " colon={false} >
                            <Button type="primary" color='red' htmlType="submit" style={{ backgroundColor: "#f44336", fontWeight: "bold" }}>
                                Cancel
                            </Button>
                        </Form.Item>
                        <Col span={1} />
                        <Form.Item label=" " colon={false}>
                            <Button type="primary" htmlType="submit"
                                style={{ fontWeight: "bold" }} onClick={sendData}>
                                Submit
                            </Button>
                        </Form.Item>


                    </Row>


                </Form >
            </div>
        </>

    )
}

export default JobPost