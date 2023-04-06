import React, { useEffect, useState } from 'react'
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    Modal,
    Row,
    Select,
    DatePicker,
    Layout,
    message
} from 'antd';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import WrapperContainer from '../common/Wrapper_container';
import axios from "axios";
import { } from "react-router-dom";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const { Option } = Select;
const { Header, Content, Footer } = Layout;

const dateFormat = 'YYYY/MM/DD';

const JobPost = props => {
    const { isModalOpen, isEditModalOpen, isOpen, showModal, handleCancel, handleOk, selectedItem } = props;

    const [size, setSize] = useState('large'); // default is 'middle'
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [openingDate, setOpeningDate] = useState("");
    const [closingDate, setClosingDate] = useState("");
    const [company, setCompany] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (jobTitle !== '' && location !== '') {
            const i =
            {
                jobTitle: jobTitle,
                location: location,
                openingDate: openingDate,
                closingDate: closingDate,
                company: company,
            };
            try {
                if (selectedItem) {
                    await axios.put(`http://localhost:4000/jobHire/update/${selectedItem._id}`, i);

                } else {
                    await axios.post('http://localhost:4000/jobHire/add', i);

                }
                handleOk();

            } catch (error) {
                console.log('create item failes ${error}');

            }
        } else {
            console.log("else called ${name}");

        }
    };

    useEffect(() => {
        if (selectedItem) {
            setJobTitle(selectedItem.jobTitle);
            setLocation(selectedItem.location);
            setOpeningDate(selectedItem.openingDate);
            setClosingDate(selectedItem.closingDate);
            setCompany(selectedItem.company);
        }
    }, [])

    const onChangeOP = (openingDate, dateString) => {
        console.log(openingDate, dateString);
        setOpeningDate(dateString);
    };
    const onChangeCD = (closingDate, dateString) => {
        console.log(closingDate, dateString);
        setClosingDate(dateString);
    };


    // function sendData(e) {
    //     e.preventDefault();

    //     const jobPostSchema = {
    //         jobTitle, location, openingDate, closingDate, company,
    //     };

    //     axios
    //         .post("http://localhost:4000/jobHire/add", jobPostSchema)
    //         .then(() => {
    //             message("inserted!", "Data Inserted!", "success");
    //             window.location.reload(false);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // }


    return (
        <>
         <Modal
                open={isOpen}
                onCancel={handleCancel}
                onOk={handleOk}
                width={1000}
                footer={null}

            >
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
                            initialValue={selectedItem?.jobTitle}
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
                        <Form.Item name="openingDate" label="Opening Date" >
                        <DatePicker
                                value={openingDate}
                                // defaultValue={String(dayjs(selectedItem?.date, dateFormat))}
                                defaultValue={selectedItem ? dayjs(selectedItem.openingDate, dateFormat) : null}
                                onChange={onChangeOP}
                            />
                        </Form.Item>
                        {/* </Col> */}
                    </Row>

                    <Row>
                        <Form.Item
                            name="location"
                            label="Location"
                            initialValue={selectedItem?.location}
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
                        <Form.Item name="closingDate" label="Closing Date" >
                        <DatePicker
                                value={closingDate}
                                // defaultValue={String(dayjs(selectedItem?.date, dateFormat))}
                                defaultValue={selectedItem ? dayjs(selectedItem.closingDate, dateFormat) : null}
                                onChange={onChangeCD}
                            />
                        </Form.Item>
                    </Row>

                    <Row>
                        <Form.Item
                            name="company"
                            label="Company"
                            initialValue={selectedItem?.company}
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
                            <Button type="primary" color='red' htmlType="submit"
                                style={{ backgroundColor: "#f44336", fontWeight: "bold" }}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        </Form.Item>
                        <Col span={1} />
                        <Form.Item label=" " colon={false}>

                            <Button type="primary" htmlType="submit"
                                style={{ fontWeight: "bold" }} onClick={handleSubmit}
                            >
                                {selectedItem ? "Edit" : "Submit"}
                            </Button>
                    
                        </Form.Item>

                        {/* <Col span={13} />
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
                        </Form.Item> */}


                    </Row>


                </Form >
            </div>
            </Modal>
        </>

    )
}

export default JobPost