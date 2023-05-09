import { Card, Modal } from 'antd';
import React, { useEffect, useState } from "react";
import { Form, Input, Button, notification } from "antd";
import WrapperCard from '../../common/Wrapper_card';
import CustomRow from '../../common/Form_header';
import '../Event-Main.css';
import { ReadOutlined } from '@ant-design/icons';
import axios from 'axios';

const DisplayEvent = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [participateModalVisible, setParticipateModalVisible] = useState(false);
    const [eventDetails, setAllEventDetails] = useState([]);

    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [eventId, setEventId] = useState();
    console.log(eventId)

    function getAllEventDetails() {
        axios
            .get("http://localhost:4000/event/getAll")
            .then((res) => {
                console.log(res);
                setAllEventDetails(res.data.Event);
                setEventId(res.data.Event[0]._id);
            })
            .catch(() => {
                alert("Check The Connectivity");
            });
    }
    // console.log(eventDetails);
    useEffect(() => getAllEventDetails(), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // get the form data from state or refs
        const EventSchema = {
            id,
            name
        };
        axios
            .post(`http://localhost:4000/event/${eventId}/registered-entities`, EventSchema)
            .then(() => {
                window.location.reload(false);
            })
            .catch((err) => {
                alert(err);
                console.log(EventSchema)
            });
    };
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

                    {eventDetails.map((eventDetailsVal) => (
                        <Card title={eventDetailsVal.eventName} bordered={false} style={{ marginBottom: "20px", width: "100%" }} extra={eventDetailsVal.eventStatus}>
                            <Card style={{ width: '100%' }} title="Description">
                                {eventDetailsVal.eventPlace}
                            </Card>
                            <Card style={{ width: '100%' }} title="Date">
                                {eventDetailsVal.eventDate}
                            </Card>
                            <p>{eventDetailsVal.eventPlace.length > 124 ? eventDetailsVal.eventPlace.substring(0, 124) + " ..." : eventDetailsVal.eventPlace}</p>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <ReadOutlined onClick={showModal} style={{ color: "#5DBB63", cursor: "pointer", marginLeft: "20px" }} />
                            </div>
                            <Modal visible={modalVisible} onCancel={handleCancel} footer={null} destroyOnClose={true}>
                                <p>{eventDetailsVal.eventPlace}</p>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Button onClick={showParticipateModal} style={{ backgroundColor: "#5DBB63", color: "#fff" }}>Participate</Button>
                                </div>
                            </Modal>
                            <Modal visible={participateModalVisible} onCancel={handleParticipateCancel} footer={null} destroyOnClose={true}>
                                <Form
                                    onFinish={onFinish}
                                    onSubmitCapture={handleSubmit}
                                >
                                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                        <Input placeholder="Enter your name"
                                            onChange={(e) => {
                                                setid(e.target.value);
                                            }} />
                                    </Form.Item>
                                    <Form.Item name="id" label="ID Number" rules={[{ required: true }]}>
                                        <Input placeholder="Enter your ID number"
                                            onChange={(e) => {
                                                setname(e.target.value);
                                            }} />
                                    </Form.Item>
                                    <Form.Item style={{ textAlign: "center" }}>
                                        <Button type="primary" htmlType="submit" style={{ backgroundColor: "#5DBB63", color: "#fff" }}>Submit</Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DisplayEvent;
