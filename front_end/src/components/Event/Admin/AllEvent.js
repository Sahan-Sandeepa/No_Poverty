import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// import "../../Event/eventMain.css";

const AllEvent = () => {

    const [dropdown, setDropdown] = useState("OPEN");

    async function handleUpdateStatus(id, value) {
        // console.log(id, value);

        axios
            .patch(
                `http://localhost:4000/event/update/${id}`,
                {
                    eventStatus: value,
                },
                { headers: { "Content-Type": "application/json" } }
            )
            .then(() => {
                // alert("Details Successfully Updated!");
                window.location.reload(false);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    const [eventDetails, setAllEventDetails] = useState([]);
    const [searchDetail, setsearchDetail] = useState("");

    function getAllEventDetails() {
        axios
            .get("http://localhost:4000/event/getAll")
            .then((res) => {
                console.log(res);
                setAllEventDetails(res.data.Event);
            })
            .catch(() => {
                alert("Check The Connectivity");
            });
    }
    // console.log(eventDetails);
    useEffect(() => getAllEventDetails(), []);

    function deleteEventDetail(id) {
        // if (window.confirm("Are You Sure Want To Delete?")) {
        axios
            .delete("http://localhost:4000/event/delete/" + id)
            .then(() => {
                // alert("Document Delete Successfully!");
                window.location.reload(false);
            })
            .catch(() => {
                alert("Error Occurred On Delete");
            });
        // }
    }
    const ColoredLine = () => (
        <hr
            style={{
                color: "#F0FFFF",
                backgroundColor: "#7FFFD4",
                height: 105,
                width: 190,
            }}
        />
    );

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <h1>This is from the All event</h1>
    );

};

export default AllEvent;