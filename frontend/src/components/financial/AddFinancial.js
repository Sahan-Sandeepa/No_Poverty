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
import Form_header from '../common/Form_header';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import WrapperContainer from '../common/Wrapper_container';
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

const AddFinancial = () => {
    const [size, setSize] = useState('large'); // default is 'middle'


    return (
        <>
            <div style={{ padding: 1, alignItems: "center", backgroundColor: '#D3D3D3', width: 900, height: 650 }}>

            <WrapperCard style={{ backgroundColor: "#37475E" }}>
                        <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                            <h1 style={{ color: "White" }}>Financial Summmary</h1>

                        </CustomRow>
                    </WrapperCard>
                <Form
                    layout='vertical'
                    autoComplete="false"
                    style={{padding:1, paddingLeft:140}}
                >
                    <br></br>
                    
                    <Col span={12}>
                        <Form.Item
                            name="Enter the program name"
                            label="Program_name"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter the Program name"
                                }

                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <br></br>

                    <Row>

                        <Form.Item
                            name="Type"
                            label="Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Type!',
                                },
                            ]}
                        >
                            <Select placeholder="select your type">
                                <Option value="male">Donation</Option>
                                <Option value="female">Events</Option>
                            </Select>
                        </Form.Item>
                        <Col span={4} />

                        <Form.Item name="date-picker" label="DatePicker" {...config}>
                            <DatePicker />
                        </Form.Item>
                    </Row>
                    <br></br>

                    <Col span={18}>
                        <Form.Item
                            name="Enter the venue"
                            label="Venue"

                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the place or venue"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <br></br>

                    <Row>
                    <Col span={5} >

                        <Form.Item
                            name="Total"
                            label="Total"

                            rules={[
                                {
                                    type: "number",
                                    message: "invalid format"
                                },
                                {
                                    required: true,
                                    message: "Please enter the total amount"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        </Col>
                        <br></br>
                        <Col span={5} />

                        <Form.Item
                            name="Status"
                            label="Status"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Status!',
                                },
                            ]}
                        >
                            <Select placeholder="select your Status">
                                <Option value="male">Completed</Option>
                                <Option value="female">inCompleted</Option>
                            </Select>
                        </Form.Item>
                        {/* </Col> */}
                    </Row>
                    <br></br>


                    <Row>
                        <Col span={13} />
                        <Form.Item label=" " colon={false}>
                            <Button type="default" color='red' htmlType="submit">
                                Cancel
                            </Button>
                        </Form.Item>
                        <Col span={2}/>
                        <Form.Item label=" " colon={false}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        

                    </Row>
                    

                </Form >
            </div>
        </>

    )
}

export default AddFinancial