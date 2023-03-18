import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

const UpdateEvent = () => {


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    // const history = useNavigate();

    const [eventNo, seteventNo] = useState("");
    const [eventName, seteventName] = useState("");
    const [eventPlace, seteventPlace] = useState("");
    const [eventDetails, seteventDetails] = useState("");
    const [eventDate, seteventDate] = useState("");

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

    return (


        <><h1>This is from the update event</h1></>
    );
}
export default UpdateEvent;
