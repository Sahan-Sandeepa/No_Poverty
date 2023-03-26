import React, { useEffect, useState } from 'react'
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
} from 'antd';

import WrapperCard from '../common/Wrapper_card';
import CustomRow from '../common/Form_header';
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [sex, setSex] = useState('');
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cNo, setCno] = useState("");

    const onSex = (value) => {
        console.log(`selected ${value}`);
        setSex(value)
    };

    function sendData(e) {
        e.preventDefault();

        const UserSchema = {
            name, designation, sex, address, email, password, cNo
        };

        axios.post("http://localhost:4000/regiUser/", UserSchema)

            .then(value => {
                console.log(value);
            })
            .catch((err) => {
                console.log(`Error: ${err?.response?.data}`);
            })
    }
    //   .ca
    return (
        <>
            <div style={{ padding: 1, alignItems: "center", backgroundColor: '#D3D3D3', width: 900, height: 650, borderRadius: 5 }}>

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Register </h1>

                    </CustomRow>
                </WrapperCard>
                <Form

                    style={{ padding: 1, paddingLeft: 120 }}
                >
                    <br></br>

                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter the name"
                                }

                            ]}
                        >
                            <Input
                                onChange={(val) => {
                                    setName(val.target.value);

                                }}
                            />
                        </Form.Item>
                    </Col>
                    <br></br>

                    <Row>
                        <Form.Item
                            name="designation"
                            label="Designation"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter the name"
                                }

                            ]}
                        >
                            <Input
                                onChange={(val) => {
                                    setDesignation(val.target.value);

                                }}
                            />
                        </Form.Item>

                        <Col span={2} />
                        <Form.Item
                            label="Gender"
                        >
                            <Select
                                defaultValue="Gender"
                                style={{
                                    width: 120,
                                }}
                                onChange={onSex}
                                options={[
                                    {
                                        value: 'male',
                                        label: 'male',
                                    },
                                    {
                                        value: 'female',
                                        label: 'female',
                                    },


                                ]}
                            />
                        </Form.Item>
                        <Col span={4} />
                    </Row>
                    <br></br>

                    <Col span={18}>
                        <Form.Item
                            name="address"
                            label="Address"

                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the place"
                                }
                            ]}
                        >
                            <Input
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <br></br>

                    <Row>
                        <Col span={11}>
                            <Form.Item
                                name="eamil"
                                label="Email"

                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter the email"
                                    }
                                ]}
                            >
                                <Input
                                    onChange={(val) => {
                                        setEmail(val.target.value);

                                    }}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={1} />
                        <Col span={9}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    onChange={(val) => {
                                        setPassword(val.target.value);
                                    }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <br></br>
                    <Col span={11}>
                        <Form.Item
                            name="total"
                            label="Contact Number"

                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the Contact No"
                                }
                            ]}
                        >
                            <Input
                                onChange={(val) => {
                                    setCno(val.target.value);

                                }}
                            />
                        </Form.Item>
                    </Col>


                    <br></br>
                    <br></br>

                    <Row>
                        <Col span={13} />
                        <Form.Item label=" " colon={false} >
                            <Button type="primary" color='red' htmlType="submit" style={{ backgroundColor: "#f44336", fontWeight: "bold" }}>
                                Cancel
                            </Button>
                        </Form.Item>
                        <Col span={1} />
                        <Form.Item label=" " colon={false}>

                            <a href='/financial'><Button type="primary" htmlType="submit"
                                style={{ fontWeight: "bold" }} onClick={sendData}
                            >
                                Register
                            </Button>
                            </a>
                        </Form.Item>


                    </Row>


                </Form >
            </div>
        </>
    )

}

export default Register;