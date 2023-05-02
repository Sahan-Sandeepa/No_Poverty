import React, { createContext } from 'react'
import { Button, Checkbox, Col, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import axios from "axios";
import { } from "react-router-dom";

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

        <div style={{ backgroundColor: "#37475E" }}>
            <h1>Job Application</h1>
            <Form>
                <Form.Item
                    name="firstName"
                    label="FirstName"
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
                <Form.Item
                    name="lastName"
                    label="LastName"
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
                <Form.Item
                    name="contactNum"
                    label="ContactNum"
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
                <Form.Item
                    name="pastExp"
                    label="PastExp"
                    rules={[
                        {
                            message: "Past Experience"
                        },
                    ]}
                >
                    <Input onChange={(val) => {
                        setPastExp(val.target.value);
                    }} />
                </Form.Item>

                <Form.Item
                // wrapperCol={{
                //     ...layout.wrapperCol,
                //     offset: 8,
                // }}
                >
                    <Button type="primary" htmlType="submit" onClick={sendApplication}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );

}

export default JobApply