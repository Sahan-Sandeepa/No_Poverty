import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import WrapperCard from "../../common/Wrapper_card";
import CustomRow from "../../common/Form_header";

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

    const layout = {
        labelCol: {
            span: 8,

        },
        wrapperCol: {
            span: 90,
        },
    };

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="main-container">

            <div className="sub-container">

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <div className="cus_row">
                        <CustomRow has context menu >
                            <h1>main event</h1>
                        </CustomRow>
                    </div>
                </WrapperCard>
                <div className="form">
                    
                </div>
            </div>
        </div>
    );

};

export default AllEvent;