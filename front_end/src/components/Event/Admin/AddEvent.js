import React, { useState } from "react";
// import "../../Event/eventMain.css";
import axios from "axios";
import WrapperCard from "../../common/Wrapper_card";
import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    Space,
} from 'antd';
import CustomRow from "../../common/Form_header";
import '../Event-Main.css'

const AddEvent = () => {
    const [eventNo, seteventNo] = useState("");
    const [eventName, seteventName] = useState("");
    const [eventPlace, seteventPlace] = useState("");
    const [eventDetails, seteventDetails] = useState("");
    const [eventDate, seteventDate] = useState("");
    const [eventStatus, seteventStatus] = useState("");

    function sendData(e) {
        e.preventDefault();

        const EventSchema = {
            eventNo,
            eventName,
            eventPlace,
            eventDetails,
            eventDate,
            eventStatus,
        };

        axios
            .post("http://localhost:4000/event/addevent", EventSchema)
            .then(() => {
                handleShow()
            })
            .catch((err) => {
                alert(err); console.log(EventSchema)
            });
    }

    //Navigate to the privious page
    // const history = useNavigate();

    //For get the current Date
    let date = new Date().toISOString();
    let isoDate = new Date(date);

    function formatDate(thedate) {
        return (
            thedate.getFullYear() +
            "/" +
            (thedate.getMonth() + 1) +
            "/" +
            thedate.getDate()
        );
    }
    // const [componentDisabled, setComponentDisabled] = useState(true);

    // const location = useLocation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const layout = {
        labelCol: {
            span: 7,

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

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (

        <>
            <div style={{ paddingLeft: 150 }} >

                <div style={{ padding: 1, alignItems: "center", width: 1000, height: 650, borderRadius: 5, backgroundColor: "#D3D3D3" }}>

                    <WrapperCard style={{ backgroundColor: "#37475E" }}>
                        <CustomRow style={{ justifyContent: "space-between", padding: "10px" }} has context menu>
                            <h1>Add  a event</h1>
                        </CustomRow>
                    </WrapperCard>
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{
                            maxWidth: 600,
                        }}
                        validateMessages={validateMessages}
                        labelAlign="left"
                    >

                        <Form.Item
                            name={['user', 'name']}
                            label="Event No"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name={['user', 'name']}
                            label="Event Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name={['user', 'name']}
                            label="Event Location"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name={['user', 'name']}
                            label="Event Date"
                            rules={[
                                {required: true,},
                            ]}
                        >
                            <Space direction="vertical">
                                <DatePicker onChange={onChange} />

                            </Space>

                        </Form.Item>

                        {/* <Form.Item name={['user', 'website']} label="Website">
        <Input />
    </Form.Item> */}

                        <Form.Item

                            name={['user', 'introduction']}
                            label="Event Description"
                            rules={[
                                {required: true,},
                            ]}
                            >
                            <Input.TextArea />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                ...layout.wrapperCol,
                                offset: 10,
                            }}
                        >
                            <Button htmlType="submit" className="add-btn btn">
                                submit
                            </Button>

                            <Button  htmlType="reset" className="reset-btn btn">
                                Reset
                            </Button>
                        </Form.Item>

                        {/* <Form.Item
                            wrapperCol={{
                                ...layout.wrapperCol,
                                offset: 18,
                            }}
                        >
                            <Button type="primary" htmlType="reset" className="add-btn">
                                Reset
                            </Button>
                        </Form.Item> */}

                    </Form></div>
            </div>
        </>

    );
};

export default AddEvent;
