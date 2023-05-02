import { Card, Modal } from 'antd';
import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import WrapperCard from '../../common/Wrapper_card';
import CustomRow from '../../common/Form_header';
import '../Event-Main.css';
import { ReadOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const DisplayEvent = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [participateModalVisible, setParticipateModalVisible] = useState(false);


    const showModal = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const showParticipateModal = () => {
        setModalVisible(false);
        setParticipateModalVisible(true);
    };

    const handleParticipateCancel = () => {
        setParticipateModalVisible(false);
    };

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        notification.success({
            message: "Success",
            description: "Participation successful"
        });
        setParticipateModalVisible(false);
    };

    return (
        <div className="main-container">

            <div className="sub-container">

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }}>
                        <h1 style={{ color: "White" }}>Upcoming Events</h1>
                    </CustomRow>
                </WrapperCard>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '5%' }}>
                    <Card title="Card title" bordered={false} style={{ marginBottom: "20px" }}>
                        <p>{text.length > 124 ? text.substring(0, 124) + " ..." : text}</p>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <ReadOutlined onClick={showModal} style={{ color: "#5DBB63", cursor: "pointer", marginLeft: "20px" }} />
                        </div>
                    </Card>
                    <Modal visible={modalVisible} onCancel={handleCancel} footer={null} destroyOnClose={true}>
                        <p>{text}</p>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button onClick={showParticipateModal} style={{ backgroundColor: "#5DBB63", color: "#fff" }}>Participate</Button>
                        </div>
                    </Modal>
                    <Modal visible={participateModalVisible} onCancel={handleParticipateCancel} footer={null} destroyOnClose={true}>
                        <Form onFinish={onFinish}>
                            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                            <Form.Item name="id" label="ID Number" rules={[{ required: true }]}>
                                <Input placeholder="Enter your ID number" />
                            </Form.Item>
                            <Form.Item style={{ textAlign: "center" }}>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: "#5DBB63", color: "#fff" }}>Submit</Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default DisplayEvent;
