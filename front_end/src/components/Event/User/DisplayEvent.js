import { Card, Col, Collapse, Row, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { SendOutlined } from "@ant-design/icons";
import WrapperCard from '../../common/Wrapper_card';
import CustomRow from '../../common/Form_header';
import '../Event-Main.css';
// import nodemailer from "nodemailer";

const { TextArea } = Input;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const { Meta } = Card;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const DisplayEvent = () => {

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };


    const [sending, setSending] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        setSending(true);
        try {
            if (!emailRegex.test(values.email)) {
                throw new Error("Please enter a valid email address.");
            }

            // const transporter = nodemailer.createTransport({
            //     service: "gmail",
            //     auth: {
            //         user: "your-gmail-account@gmail.com",
            //         pass: "your-gmail-account-password",
            //     },
            // });

            const mailOptions = {
                from: "your-gmail-account@gmail.com",
                to: values.email,
                subject: "Sample email",
                text: values.message,
            };

            // await transporter.sendMail(mailOptions);
            // notification.success({
            //     message: "Email sent",
            //     description: "The email has been sent successfully.",
            // });
            form.resetFields();
        } catch (error) {
            notification.error({
                message: "Error",
                description: error.message,
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="main-container">

            <div className="sub-container">

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Upcoming Events</h1>
                    </CustomRow>
                </WrapperCard>

                <div className="form">

                    <Form form={form} onFinish={handleSubmit}>
                        <Form.Item
                            name="message"
                            rules={[{ required: true, message: "Please enter a message." }]}
                        >
                            <TextArea rows={4} placeholder="Enter your message here" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your email address." },
                                { pattern: emailRegex, message: "Please enter a valid email address." },
                            ]}
                        >
                            <Input placeholder="Enter your email address" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={sending} icon={<SendOutlined />}>
                                Send
                            </Button>
                        </Form.Item>
                    </Form>
                

                </div>
            </div>
        </div>
    );
};

export default DisplayEvent;