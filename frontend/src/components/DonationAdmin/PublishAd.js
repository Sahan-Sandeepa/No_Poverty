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

const PublishAd = () => {
    const [size, setSize] = useState('large'); // default is 'middle'


    return (
        <>
            <div style={{ padding: 1, alignItems: "center", backgroundColor: '#D3D3D3', width: 900, height: 650, borderRadius:5 }}>

            <WrapperCard style={{ backgroundColor: "#37475E"}}>
                        <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                            <h1 style={{ color: "White" }}>Publish Donation Opportunities</h1>

                        </CustomRow>
                    </WrapperCard>
                <Form
                    layout='vertical'
                    autoComplete="false"
                    style={{padding:1, paddingLeft:140}}
                >
                    <br></br>
                    <Row>
                    <Col span={12}>
                        <Form.Item
                            name="Enter the program name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter name"
                                }

                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    
                    <br></br>

                    

                        <Form.Item
                            name="Location"
                            label="Location"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter Location!',
                                },
                            ]}
                        >
                            <Input placeholder='Enter Location'/>
                        </Form.Item>
                        <Col span={4} />
                    </Row>
                    <Row>
                        
                    
                    
                        <Form.Item
                            name="Enter Small Description"
                            label="Enter Small Description"

                            rules={[
                                {
                                    required: true,
                                    message: "Please enter data"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    <Col span={3}/>
                        <Form.Item
                            name="Help Required"
                            label="Help Required"

                            rules={[
                                {
                                    required: true,
                                    message: "Please enter data"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    
                    <br></br>
                    </Row>        
                    <Row>
                    <Col span={13}  >

                        <Form.Item
                            name="Enter Long Description"
                            label="Enter Long Description"

                            rules={[

                                {
                                    required: true,
                                    message: "Please enter data"
                                }
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        </Col>
                        <br></br>
                        {/* <Col span={5} />

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
                        </Form.Item> */}
                        {/* </Col> */}
                    </Row>
                    {/* <br></br> */}


                    <Row>
                        <Col span={13} />
                        <Form.Item label=" " colon={false} >
                            <Button type="primary" color='red' htmlType="submit" style={{backgroundColor:"#f44336", fontWeight:"bold"}}>
                                Cancel
                            </Button>
                        </Form.Item>
                        <Col span={1}/>
                        <Form.Item label=" " colon={false}>
                            <Button type="primary" htmlType="submit" style={{ fontWeight:"bold"}} >
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