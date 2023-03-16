import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
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

    const id = "6408b7bdb258e9d9ae0378e2";

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


        <>
            {/* <div className="Title"><PageTitle title="Modify Warranty Claim Details"></PageTitle></div> */}
            <Container>

                <>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title><div className="Content"><strong className="me-auto">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="19"
                                    fill="yellow"
                                    className="bi bi-square-fill"
                                    viewBox="0 0 30 20">

                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                                </svg>
                                Record has been updated</strong></div></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="ndContent" fill-rule> Press <strong>Done</strong> go to the records</div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="JustifyModel1"><Button variant="outline-success" onClick={handleClose}>
                                Close
                            </Button></div>
                            <div className="JustifyModel2"><Button variant="outline-primary" href="">Done</Button></div>
                        </Modal.Footer>
                    </Modal>
                </>

                <div className="UpdateserAddForm">
                    <Button
                        variant="outline-secondary"
                        onClick={() => {
                            // history(-1);
                        }}
                    >
                        <i className="bi bi-arrow-left-circle"></i>
                    </Button>
                    <div>

                        <Form noValidate validated={validated} onSelect={handleSubmit} className="Form">

                            <Row className="mb-3">
                                <Form.Group as={Col} md="10" controlId="validationCustom01">
                                    <Form.Label>Event Number</Form.Label>
                                    <Form.Control type="text" placeholder={eventNo} disabled />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a unique event number !!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="10" controlId="validationCustom09">
                                    <Form.Label>Event Name</Form.Label>
                                    <Form.Control type="text" placeholder={eventName} disabled />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a event name !!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="10" controlId="validationCustom05">
                                    <Form.Label>Event Date</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Warranty Expire Date.."
                                        defaultValue={eventDate}
                                        onChange={(e) => {
                                            seteventDate(e.target.value);
                                        }}
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a event Date !!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="10" controlId="validationCustom02">
                                    <Form.Label>Event Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Customer Name.."
                                        defaultValue={eventPlace}
                                        onChange={(e) => {
                                            seteventPlace(e.target.value);
                                        }}
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a event location !!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Form.Group
                                className="mb-4"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <p>
                                    <label htmlFor="w3review">Event Description</label>
                                </p>
                                <textarea
                                    rows="2"
                                    cols="107"
                                    name="comment"
                                    form="usrform"
                                    placeholder=" Enter event description Here .."
                                    defaultValue={eventDetails}
                                    onChange={(e) => {
                                        seteventDetails(e.target.value);
                                    }}
                                    required></textarea>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a event description !!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row>

                                {" "}
                                <Button
                                    id="UpSubmit1"
                                    type="submit"
                                    variant="outline-success"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleShow();

                                        const newEvent = {

                                            eventPlace,
                                            eventDetails,
                                            eventDate,
                                        };

                                        axios
                                            .put(
                                                "http://localhost:4000/event/update/" + id,
                                                newEvent
                                            )
                                            .then(() => {
                                                // alert("Details Successfully Updated!");

                                                //navigate("/MainClaimPage");
                                            })
                                            .catch((err) => {
                                                alert(err.message);
                                            });
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35"
                                        height="35"
                                        fill="currentColor"
                                        className="bi bi-arrow-up-circle"
                                        viewBox="0 0 30 30"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                                    </svg>
                                    Update Details
                                </Button>

                                <Col>
                                    {" "}
                                    <Button
                                        as={Col}
                                        id="UpSubmit2"
                                        variant="outline-danger"
                                        type="submit"
                                        onClick={() => {
                                            // history(-1);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            fill="currentColor"
                                            className="bi bi-arrow-90deg-left"
                                            viewBox="0 0 30 30"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                                        </svg>
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Container></>
    );
}
export default UpdateEvent;
