import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../Event-Main.css'
import { Descriptions } from "antd";

const DetailsPrint = () => {
    const componentRef = useRef();

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