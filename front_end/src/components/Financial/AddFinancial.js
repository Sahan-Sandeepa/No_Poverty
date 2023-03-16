import React, { useEffect } from 'react'
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    DatePicker,
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
dayjs.extend(customParseFormat);

const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};

const selection = {
    rules: [
        {
            required: true,
            message: "Select the type"
        }
    ]
}
const dateFormat = 'YYYY/MM/DD';


const AddFinancial = props => {
    const { isModalOpen, isEditModalOpen, showModal, handleCancel, handleOk } = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState("");
    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("");
    const [refresh, seRefresh] = useState(false);




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
            handleOk();
            

        //   .catch((err)=> console.log(err));
    }

    
    return (
        <>

            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={handleOk}
                width={1000}
                footer={null}
                
            >
                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between" }} >
                        <h1 style={{ color: "White", paddingLeft: 30, fontSize: 22 }}>Financial Summmary</h1>
                    </CustomRow>
                </WrapperCard>
                <Form

                    style={{ padding: 1, paddingLeft: 120 }}
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
                            label="Select Program type"
                            {...selection}
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the place or venue"
                                }
                            ]}

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
                            label="Status"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select status"
                                }
                            ]}
                        >
                            <Select
                                defaultValue="Status"
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
                    <br></br>


                    <Row>
                        <Col span={13} />
                        <Form.Item label=" " colon={false} >
                            <Button type="primary" color='red' htmlType="submit"
                                style={{ backgroundColor: "#f44336", fontWeight: "bold" }}
                                onClick={handleCancel}
                            >
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
            </Modal>

            {/* </div> */}


        </>

    )
}

export default AddFinancial