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
                alert(err); console.log(EventSchema)
            });
    }

    //Navigate to the privious page
    // const history = useNavigate();

    // const [componentDisabled, setComponentDisabled] = useState(true);

    // const location = useLocation();

    const layout = {
        labelCol: {
            span: 7,

        },
        wrapperCol: {
            span: 16,
        },
    };

    const dateFormat = 'YYYY-MM-DD'  

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
                        >
                                <DatePicker format={dateFormat}
                                    onChange={onChange} />

                        </Form.Item>

                        {/* <Form.Item name={['user', 'website']} label="Website">
        <Input />
    </Form.Item> */}

                        <Form.Item

                            name="eventDetails"
                            label="Event Description"
                            rules={[
                                { required: true, message: '${label} is required!' },
                            ]}
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
                            <Button htmlType="submit" className="add-btn btn" onClick={sendData}>
                                submit
                            </Button>

                            <Button htmlType="reset" className="reset-btn btn">
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
