import React, { useEffect , useEffect} from 'react'
import WrapperCard from '../common/Wrapper_card';
import CustomRow from '../common/Form_header';
import axios, { Axios } from 'axios';
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

const UpdateFinancial = () => {
  return (
    <>

    <Modal
        open={isOpen}
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
                    initialValue={selectedItem?.name}
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
                    initialValue={selectedItem?.type}


                >
                    <Select
                        rules={[
                            {
                                required: true,
                                message: "select the type"
                            }

                        ]}
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

                <Form.Item name="date-picker" label="DatePicker" {...config}
                                                // initialValue={selectedItem?.date}


                >

                    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat}
                        onChange={onChange}
                        initialValue={selectedItem?.date}



                    />

                </Form.Item>
            </Row>
            <br></br>

            <Col span={18}>
                <Form.Item
                    name="venue"
                    label="venue"
                    initialValue={selectedItem?.venue}

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
                        initialValue={selectedItem?.total}

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
                    initialValue={selectedItem?.status}

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
                        {selectedItem ? "Edit" : "Submit"}
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

export default UpdateFinancial