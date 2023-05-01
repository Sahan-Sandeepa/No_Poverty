import React, { useState, useEffect } from 'react'
import { Table, Icon, Button, Space, Input, Col, Row, Modal,Form } from 'antd';
import axios from "axios";
import { EditTwoTone, DeleteOutlined, DeleteTwoTone, DownloadOutlined, FilePdfOutlined, FilePdfTwoTone, SelectOutlined, MessageOutlined } from '@ant-design/icons';
import CustomRow from '../common/Form_header';
import WrapperCard from '../common/Wrapper_card';
import { useParams } from 'react-router-dom';
import { ExclamationCircleFilled } from "@ant-design/icons";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const { Search } = Input;

const EditDonations = () => {
    const [trans, setTrans] = useState([]);
    const [donate, setDonate] = useState([]);
    const [column, setColumns] = useState([]);
    const [ran, setran] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [amount, setAmount] = useState();
    const [total, setTotal] = useState();
    const [status, setStatus] = useState('');

    const {id} = useParams();

    // function getDonations() {
    //     axios.get("http://localhost:4000/donation/" + id)
    //         .then((res) => {
    //             setDonate(res.data);
    //         })
    //         .catch((err) => {
    //             alert(err.message);
    //         });
    // }

    function changeDetails() {
        axios.get("http://localhost:4000/donation/" + id)
            .then((res) => {
                const updateDetails = {
                    name: res.data.name,
                    email: res.data.email,
                    contact: res.data.contact,
                    amount: res.data.amount,
                    total: res.data.total,
                    status: res.data.status,
                };
                console.log(updateDetails);
                setName(updateDetails.name);
                setEmail(updateDetails.email);
                setContact(updateDetails.contact);
                setAmount(updateDetails.amount);
                setTotal(updateDetails.total);
                setStatus(updateDetails.status);
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // get the form data from state or refs
        const newDonation = {
            name,
            email,
            contact,
            amount,
            total,
            status,
        };
        // show a confirmation dialog
        Modal.confirm({
            title: 'Do you want to update the changes?',
            icon: <ExclamationCircleFilled />,
            content: 'When clicked the OK button, this details will be added to the list.',
            async onOk() {
                // send the data to the backend API
                return await new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.1 ? resolve : reject, 1000);
                    axios
                        .put(
                            "http://localhost:4000/donation/" + id,
                            newDonation
                        )
                        .then(() => {
                            // alert("Details Successfully Updated!");

                            //navigate("/MainClaimPage");
                        })
                        .catch((err) => {
                            alert(err.message);
                        });
                })
            },
            onCancel() {
                // handle cancel action
                console.log("Cancel");
            }
        });
    };

    useEffect(() => {
        changeDetails();
    }, [])


    const onSearch = (value) => console.log(value);

    // const columns = [{
    //     title: 'Donation Name',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: text => <a href="#">{text}</a>,
    // }, {
    //     title: 'Fund',
    //     dataIndex: 'address',
    //     key: 'address',
    // },
    // ];


    const Columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: 'Contact Number',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        // }, {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>

                <Button icon={<EditTwoTone />}></Button>
                <Button icon={<DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />}></Button>

                {/* <a href="#">Action 一 {record.name}</a>
                <span className="ant-divider" />
                <a href="#">Delete</a> */}
            </span>
        ),
    }];
    return (
        <div style={{ backgroundColor: "#37475E" }}>
            <h1>MakeDonations</h1>
            <Form>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input onChange={(val) => {
                        setName(val.target.value);
                    }} />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input onChange={(val) => {
                        setEmail(val.target.value);
                    }} />
                </Form.Item>
                <Form.Item
                    name="contact"
                    label="Contact"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input onChange={(val) => {
                        setContact(val.target.value);
                    }} />
                </Form.Item>
                <Form.Item
                    name="amount"
                >
                    Enter Amount<Input onChange={(val) => {
                        setAmount(val.target.value);
                    }} />

                </Form.Item>
                <Form.Item
                    name="total"
                >
                    Enter Total<Input onChange={(val) => {
                        setTotal(val.target.value);
                    }} />
                </Form.Item>
                <Form.Item
                    name="status"
                >
                    Enter status<Input onChange={(val) => {
                        setStatus(val.target.value);
                    }} />

                </Form.Item>
                {/* <Form.Item defaultValue={1000} >
                <Input 
                name='amount'
                id="message"
                onchange={handleChange}
                />
                <h2> MEssage:{amount}</h2>
            </Form.Item> */}
                <Form.Item name={['amount']} label="Payment">
                    <Button type="primary" ghost>
                        1000
                    </Button>
                    <Button type="primary" ghost>
                        2000
                    </Button>
                    <Button type="primary" ghost  id="theButton">
                        Other
                    </Button>
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
    

}
export default EditDonations