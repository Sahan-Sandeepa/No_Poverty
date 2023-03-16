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
    Layout
} from 'antd';
import { useState } from 'react';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import WrapperContainer from '../common/Wrapper_container';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';


const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};

const PublishAd = () => {
    
    const [ name, setName ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ smallDes, setSmallDes ] = useState('');
    const [ longDes, setLongDes ] = useState("");
    const [ help, setHelp ] = useState("");

    function sendAdData(e) {
        e.preventDefault();

        const adSchema = {
            name,
            location,
            smallDes,
            longDes,
            help
        };

        axios.post("http://localhost:4000/adDonations/create", adSchema)
            .then(value => {
                console.log(value);
            })
            .catch((err) => {
                console.log(`Error: ${err?.response?.data}`);
            })
    }


    return (
        <>
            <div style={{ padding: 1, alignItems: "center", backgroundColor: '#D3D3D3', width: 900, height: 650, borderRadius: 5 }}>

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Publish Donation Opportunities</h1>

                    </CustomRow>
                </WrapperCard>
                <Form
                    layout='vertical'
                    autoComplete="false"
                    style={{ padding: 1, paddingLeft: 140 }}
                >
                    <br></br>
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Enter name"
                                    }

                                ]}
                            >
                                <Input onChange={(val) => {
                                    setName(val.target.value);
                                }}
                                />
                            </Form.Item>
                        </Col>

                        <br></br>



                        <Form.Item
                            name="location"
                            label="Location"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter Location!',
                                },
                            ]}
                        >
                            <Input placeholder='Enter Location' onChange={(val) => {
                                setLocation(val.target.value);
                            }} />
                        </Form.Item>
                        <Col span={4} />
                    </Row>
                    <Row>



                        <Form.Item
                            name="smallDes"
                            label="Enter Small Description"

                            rules={[
                                {
                                    required: true,
                                    message: "Please enter data"
                                }
                            ]}
                        >
                            <Input onChange={(val) => {
                                setSmallDes(val.target.value);
                            }} />
                        </Form.Item>
                        <Col span={3} />
                        <Form.Item
                            name="help"
                            label="Help Required"

                            rules={[
                                {
                                    required: true,
                                    message: "Please enter data"
                                }
                            ]}
                        >
                            <Input onChange={(val) => {
                                setHelp(val.target.value);
                            }} />
                        </Form.Item>

                        <br></br>
                    </Row>
                    <Row>
                        <Col span={13}  >

                            <Form.Item
                                name="longDes"
                                label="Enter Long Description"

                                rules={[

                                    {
                                        required: true,
                                        message: "Please enter data"
                                    }
                                ]}
                            >
                                <Input.TextArea onChange={(val) => {
                                    setLongDes(val.target.value);
                                }} />
                            </Form.Item>
                        </Col>
                        <br></br>
                    </Row>
                    {/* <br></br> */}


                    <Row>
                        <Col span={13} />
                        <Form.Item label=" " colon={false} >
                            <Button type="primary" color='red' htmlType="submit" style={{ backgroundColor: "#f44336", fontWeight: "bold" }}>
                                Cancel
                            </Button>
                        </Form.Item>
                        <Col span={1} />
                        <Form.Item label=" " colon={false}>
                            <Button type="primary" htmlType="submit" style={{ fontWeight: "bold" }} onClick={sendAdData} >
                                Submit
                            </Button>
                        </Form.Item>


                    </Row>


                </Form >

            </div>
        </>

    )
}

export default PublishAd