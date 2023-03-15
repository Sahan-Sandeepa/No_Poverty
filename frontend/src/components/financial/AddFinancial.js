import React, { useEffect } from 'react'
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
    message,
    Menu, Dropdown, Icon,
    Modal
} from 'antd';
import { useState } from 'react';
import Form_header from '../common/Form_header';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import WrapperContainer from '../common/Wrapper_container';
import axios, { Axios } from 'axios';
import { } from "react-router-dom";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Link from 'antd/es/typography/Link';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const { Option } = Select;
const { Header, Content, Footer } = Layout;
const url = "http://localhost/4000/financial/";

const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};
const dateFormat = 'YYYY/MM/DD';


const AddFinancial = props => {
    const {isModalOpen,setIsModalOpen,showModal,handleCancel,handleOk}=props;
    const [size, setSize] = useState('large'); // default is 'middle'
    const [finid, setfinid] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState("");
    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("");



    const onChange = (date, dateString) => {
        console.log(date, dateString);
        setDate(dateString)
    };
    const onStatus = (value) => {
        console.log(`selected ${value}`);
        setStatus(value)
    };
    const onType = (value) => {
        console.log(`selected ${value}`);
        setType(value)
    };
  
    function sendData(e) {
        e.preventDefault();

        const financialSchema = {
            name,
            type,
            date,
            venue,
            total,
            status
        };

        axios.post("http://localhost:4000/financial/create", financialSchema)

            .then(value => {
                console.log(value);
            })
            .catch((err) => {
                console.log(`Error: ${err?.response?.data}`);
            })
        //   .catch((err)=> console.log(err));
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

            <div style={{ padding: 1, alignItems: "center", backgroundColor: '#D3D3D3', width: 900, height: 650, borderRadius: 5 }}>

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Financial Summmary</h1>

                    </CustomRow>
                </WrapperCard>

                    <Form

                        style={{ padding: 1, paddingLeft: 140 }}
                    >
                        <br></br>

                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Enter the Program name"
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
                            >
                                <Select
                                    defaultValue="Type"
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={onType}
                                    options={[
                                        {
                                            value: 'Donation',
                                            label: 'Donation',
                                        },
                                        {
                                            value: 'Event',
                                            label: 'Event',
                                        },


                                    ]}
                                />
                            </Form.Item>
                            <Col span={4} />

                            <Form.Item name="date-picker" label="DatePicker" {...config}>

                                <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat}
                                    onChange={onChange}

                                />

                            </Form.Item>
                        </Row>
                        <br></br>

                        <Col span={18}>
                            <Form.Item
                                name="venue"
                                label="venue"

                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter the place or venue"
                                    }
                                ]}
                            >
                                <Input
                                    onChange={(e) => {
                                        setVenue(e.target.value);
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <br></br>

                        <Row>
                            <Col span={5} >

                                <Form.Item
                                    name="total"
                                    label="total"

                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter the total amount"
                                        }
                                    ]}
                                >
                                    <Input
                                        onChange={(val) => {
                                            setTotal(val.target.value);

                                        }}
                                    />
                                </Form.Item>
                            </Col>
                            <br></br>
                            <Col span={5} />

                            <Form.Item
                            >
                                <Select
                                    defaultValue="lucy"
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={onStatus}
                                    options={[
                                        {
                                            value: 'Completed',
                                            label: 'Completed',
                                        },
                                        {
                                            value: 'INCompleted',
                                            label: 'INCompleted',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            {/* </Col> */}
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

                                <a href='/financial'><Button type="primary" htmlType="submit"
                                    style={{ fontWeight: "bold" }} onClick={sendData}
                                >
                                    Submit
                                </Button>
                                </a>
                            </Form.Item>


                        </Row>


                    </Form >

            </div>

        </>

    )
}

export default AddFinancial