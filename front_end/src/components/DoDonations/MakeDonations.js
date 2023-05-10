import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};

function clickMe() {
    var text = document.getElementById("popup");
    text.classList.toggle("hide");
    text.classList.toggle("show");

}
const DonateForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [amount, setAmount] = useState();
    const [total, setTotal] = useState();
    const [ status, setStatus ] = useState('');

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    function sendDonation(e) {
        e.preventDefault();

        const donateSchema = {
            name,
            email,
            contact,
            amount,
            total,
            status
        }

        axios.post("http://localhost:4000/donation/", donateSchema)
            .then(value => {
                console.log(value);
            })
            .catch((err) => {
                console.log(`Error: ${err?.response?.data}`);
            })
    }
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
                    <Button type="primary" ghost onClick={clickMe} id="theButton">
                        Other
                    </Button>
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={sendDonation}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );

}

export default DonateForm
