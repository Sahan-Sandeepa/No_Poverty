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
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const AddEvent = () => {

    const [eventNo, seteventNo] = useState("");
    const [eventName, seteventName] = useState("");
    const [eventPlace, seteventPlace] = useState("");
    const [eventDetails, seteventDetails] = useState("");
    const [eventDate, seteventDate] = useState("");

    const onFinish = (values) => {
        console.log(values);
    };

    const onChange = (eventDate, dateString) => {
        seteventDate(dateString);
    };

    function sendData(e) {
        e.preventDefault();

        const EventSchema = {
            eventNo,
            eventName,
            eventPlace,
            eventDetails,
            eventDate,
        };

        axios
            .post("http://localhost:4000/event/addevent", EventSchema)
            .then(() => {
            })
            .catch((err) => {
                alert(err);
                console.log(EventSchema)
            });
    }

    //Navigate to the privious page
    // const history = useNavigate();

    // const [componentDisabled, setComponentDisabled] = useState(true);

    // const location = useLocation();

    const layout = {
        labelCol: {
            span: 8,

        },
        wrapperCol: {
            span: 90,
        },
    };

    const dateFormat = 'YYYY-MM-DD'

    //  /* eslint-disable no-template-curly-in-string */
    // const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //         email: '${label} is not a valid email!',
    //         number: '${label} is not a valid number!',
    //     },
    //     number: {
    //         range: '${label} must be between ${min} and ${max}',
    //     },
    // };
    // /* eslint-enable no-template-curly-in-string */

    return (
        <div className="main-container">

            <div className="sub-container">

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                            <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Add  a event</h1>
                        </CustomRow>
                </WrapperCard>
                <div className="form">
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{
                            maxWidth: 700,
                        }}
                        labelAlign="left"
                    >

                        <Form.Item
                            name="eventNo"
                            label="Event No"
                            rules={[
                                { required: true, message: '${label} is required!' },
                            ]}
                        >
                            <Input onChange={(e) => {
                                seteventNo(e.target.value);
                            }} />
                        </Form.Item>

                        <Form.Item
                            name="eventName"
                            label="Event Name"
                            rules={[
                                { required: true, message: '${label} is required!' },
                            ]}
                            style={{ paddingTop: "5%" }}
                        >
                            <Input onChange={(e) => {
                                seteventName(e.target.value)
                            }} />
                        </Form.Item>

                        <Form.Item
                            name="eventPlace"
                            label="Event Location"
                            rules={[
                                { required: true, message: '${label} is required!' },
                            ]}
                            style={{ paddingTop: "5%" }}
                        >
                            <Input onChange={(e) => {
                                seteventPlace(e.target.value)
                            }} />
                        </Form.Item>

                        <Form.Item
                            name="eventDate"
                            label="Event Date"
                            rules={[
                                { required: true, message: '${label} is required!' },
                            ]}
                            style={{ paddingTop: "5%" }}
                        >
                            <DatePicker format={dateFormat}
                                onChange={onChange} />

                        </Form.Item>

                        {/* <Form.Item name={['user', 'website']} label="Website"><Input /></Form.Item> */}

                        <Form.Item

                            name="eventDetails"
                            label="Event Description"
                            rules={[
                                { required: true, message: '${label} is required!' },
                            ]}
                            style={{ paddingTop: "5%" }}
                        >
                            <Input.TextArea onChange={(e) => {
                                seteventDetails(e.target.value)
                            }} />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                ...layout.wrapperCol,
                                offset: 10,
                            }}
                        >
                            <section className="btn-controller">
                                <Button htmlType="submit" className="add-btn btn" onClick={sendData} >
                                    submit
                                </Button>

                                <Button htmlType="reset" className="reset-btn btn">
                                    Reset
                                </Button>
                            </section>
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

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;
