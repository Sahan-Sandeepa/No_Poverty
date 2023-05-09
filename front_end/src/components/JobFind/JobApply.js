import React, { createContext } from 'react'
import { Button, Checkbox, Col, Form, Input, Card, Row } from 'antd';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import { useState, useEffect } from 'react';
import axios from "axios";
import { } from "react-router-dom";

const { TextArea } = Input;

const JobApply = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNum, setContactNum] = useState();
    const [pastExp, setPastExp] = useState();

    function sendApplication(e) {
        e.preventDefault();

        const jobApplySchema = {
            firstName,
            lastName,
            email,
            contactNum,
            pastExp
        }

        axios.post("http://localhost:4000/jobFind/add", jobApplySchema)
            .then(value => {
                console.log(value);
            })
            .catch((err) => {
                console.log(`Error: ${err?.response?.data}`);
            })
    }
    return (


        <div style={{ paddingLeft: 150 }} >


            <br></br>
            <br></br>
            <div style={{ padding: 1, alignItems: "center", width: 1000, height: 650, borderRadius: 5 }}>
                <Card style={{ backgroundColor: "lightblue" }}>

                    <WrapperCard style={{ backgroundColor: "#37475E", borderRadius: 5 }}>
                        <CustomRow style={{ justifyContent: "space-between", padding: "10px" }} >
                            <Row>
                                <h1 style={{ color: "White", fontSize: 18, paddingLeft: 25 }}>Job Application</h1>
                            </Row>
                            <Col span={9} />
                        </CustomRow>
                    </WrapperCard>
                    {/* <div style={{ backgroundColor: "#37475E" }}>
            <h1>Job Application</h1> */}
                    <br></br>
                    <br></br>
                    <Form>
                        <Row>
                            <Col className="gutter-row" span={8}>
                                <Form.Item
                                    name="firstName"
                                    label="First Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Enter Your First Name"
                                        },
                                    ]}
                                >
                                    <Input onChange={(val) => {
                                        setFirstName(val.target.value);
                                    }} />
                                </Form.Item>
                            </Col>
                            <Col span={6} />

                            <Col className="gutter-row" span={8}>
                                <Form.Item
                                    name="lastName"
                                    label="Last Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Enter Your Last Name"
                                        },
                                    ]}
                                >
                                    <Input onChange={(val) => {
                                        setLastName(val.target.value);
                                    }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="gutter-row" span={8}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: "Enter Email"
                                        },
                                    ]}
                                >
                                    <Input onChange={(val) => {
                                        setEmail(val.target.value);
                                    }} />
                                </Form.Item>
                            </Col>
                            <Col span={6} />

                            <Col className="gutter-row" span={8}>
                                <Form.Item
                                    name="contactNum"
                                    label="Contact Number"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Enter Your Contact Number"
                                        },
                                    ]}
                                >
                                    <Input onChange={(val) => {
                                        setContactNum(val.target.value);
                                    }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Col className="gutter-row" span={22}>
                            <Form.Item
                                name="pastExp"
                                label="Past Experience"
                                rules={[
                                    {
                                        message: "Past Experience"
                                    },
                                ]}
                            >
                                <TextArea rows={4}>
                                    <Input onChange={(val) => {
                                        setPastExp(val.target.value);
                                    }} />
                                </TextArea>
                            </Form.Item>

                        </Col>

                        <Col span={6} offset={20}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={sendApplication}>
                                Submit
                            </Button>
                        </Form.Item>
                        </Col>
                    </Form>

                    {/* </div> */}

                    <br></br>
                    <br></br>
                    <br></br>

                </Card>

            </div>

        </div>
    );

}

export default JobApply