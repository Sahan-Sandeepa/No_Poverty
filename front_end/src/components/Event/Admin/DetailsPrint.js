import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../Event-Main.css'
import { Badge, Descriptions } from "antd";

const DetailsPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Event Details",
        // onafterprint: () => history(-1),
    });

    const [eventNo, seteventNo] = useState("");
    const [eventName, seteventName] = useState("");
    const [eventPlace, seteventPlace] = useState("");
    const [eventDetails, seteventDetails] = useState("");
    const [eventDate, seteventDate] = useState("");

    // const { id } = useParams();

    const { id } = useParams();

    const getEventDetails = () => {
        axios
            .get("http://localhost:4000/event/get/" + id)
            .then((res) => {
                const updateDetails = {
                    eventNo: res.data.Event.eventNo,
                    eventName: res.data.Event.eventName,
                    eventPlace: res.data.Event.eventPlace,
                    eventDetails: res.data.Event.eventDetails,
                    eventDate: res.data.Event.eventDate,
                    eventStatus: res.data.Event.eventStatus,
                };
                // console.log(updateDetails);
                seteventNo(updateDetails.eventNo);
                seteventName(updateDetails.eventName);
                seteventPlace(updateDetails.eventPlace);
                seteventDetails(updateDetails.eventDetails);
                seteventDate(updateDetails.eventDate);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    useEffect(() => getEventDetails(), []);
    // const location = useLocation();

    const [showA, setShowA] = useState(false);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const layout = {
        labelCol: {
            span: 8,

        },
        wrapperCol: {
            span: 90,
        },
    };

    // /* eslint-disable no-template-curly-in-string */
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

    const onFinish = (values) => {
        console.log(values);
    };

    const onChange = (eventDate, dateString) => {
        seteventDate(dateString);
    };

    const dateFormat = 'YYYY-MM-DD'

    return (

        <div className="main-container">

            <div className="sub-container" ref={componentRef}>

                <div className="form">

                    <Descriptions title="Event Info" layout="vertical" bordered style={{ marginRight: "8%" }}>
                        <Descriptions.Item label="Event Number">{eventNo}</Descriptions.Item>
                        <Descriptions.Item label="Event Date" span={2}>
                            {eventDate}
                        </Descriptions.Item>
                        <Descriptions.Item label="Event Name" span={3}>
                            {eventName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Event Location" span={3}>
                            {eventPlace}
                        </Descriptions.Item>
                        <Descriptions.Item label="Event Description" span={3}>
                            {eventDetails}
                        </Descriptions.Item>
                    </Descriptions>

                </div>

            </div>
        </div>

    );
}
export default DetailsPrint;