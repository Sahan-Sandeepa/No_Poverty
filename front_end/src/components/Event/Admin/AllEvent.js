import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import WrapperCard from "../../common/Wrapper_card";
import CustomRow from "../../common/Form_header";
import { Badge, Button, Card, Collapse, Modal, Space } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const AllEvent = () => {

    const [dropdown, setDropdown] = useState("OPEN");
    const [eventDetails, setAllEventDetails] = useState([]);
    const [searchDetail, setsearchDetail] = useState("");
    const { confirm } = Modal;

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
    // const ColoredLine = () => (
    //     <hr
    //         style={{
    //             color: "#F0FFFF",
    //             backgroundColor: "#7FFFD4",
    //             height: 105,
    //             width: 190,
    //         }}
    //     />
    // );

    const showPromiseConfirm = (val) => {
        confirm({
            title: 'Do you want to delete these items?',
            icon: <ExclamationCircleFilled />,
            content: 'When clicked the OK button, this details will be deleted from the list.',
            async onOk() {
                try {
                    return await new Promise((resolve, reject) => {
                        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                        deleteEventDetail(val._id)
                    });
                } catch {
                    return console.log('Oops errors!');
                }
            },
            onCancel() { },
        });
    };

    const layout = {
        labelCol: {
            span: 7,

        },
        wrapperCol: {
            span: 100,
        },
    };

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { Panel } = Collapse;

    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const [activeTabKey2, setActiveTabKey2] = useState('app');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };
    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };

    return (
        <div className="main-container">

            <div className="sub-container">

                <WrapperCard style={{ backgroundColor: "#37475E" }}>
                    <CustomRow style={{ justifyContent: "space-between", padding: "16px" }} >
                        <h1 style={{ color: "White" }}>Event Main</h1>
                    </CustomRow>
                </WrapperCard>

                <section className="main_addbtn-controller">
                    <Link to={'/addevent'}>
                        <Button htmlType="submit" className="main_addbtn" >
                            Add
                        </Button>
                    </Link>
                </section>
                {eventDetails
                    // ?.filter((val) => {
                    //     if (searchDetail === " ") {
                    //         return val;
                    //     } else if (
                    //         val.customerName
                    //             .toLowerCase()
                    //             .includes(searchDetail.toLowerCase()) ||
                    //         val.serialNo
                    //             .toLowerCase()
                    //             .includes(searchDetail.toLowerCase()) ||
                    //         val.status
                    //             .toLowerCase()
                    //             .includes(searchDetail.toLowerCase())
                    //     ) {
                    //         return val;
                    //     }
                    // })
                    ?.map((eventDetailsVal) => (
                        <div className="event_main">

                            <Collapse accordion>
                                <Panel header={
                                    <Space>
                                        <Badge
                                            className="site-badge-count-109"
                                            count={eventDetailsVal.eventNo}
                                            style={{
                                                backgroundColor: 'volcano',
                                                fontSize: "16px",
                                            }}
                                        />
                                    </Space>
                                } extra={
                                    <Space>
                                        <Badge
                                            className="site-badge-count-109"
                                            count={eventDetailsVal.eventDate}
                                            style={{
                                                backgroundColor: 'purple',
                                                fontSize: "14px"
                                            }}
                                        />
                                    </Space>
                                } key="1">

                                    <Card title={eventDetailsVal.eventName} extra={
                                        <div className="main_btn-controller">
                                            <Link
                                                to={
                                                    "/updateEvent/" +
                                                    eventDetailsVal._id
                                                }
                                            >
                                                <Button htmlType="submit" className="delete_btn" >
                                                    Edit
                                                </Button>
                                            </Link>

                                            <Link to={"/printDetails/" +
                                                eventDetailsVal._id}>
                                                <Button htmlType="reset" className="print_btn">
                                                    Print
                                                </Button>
                                            </Link>

                                            <Link>
                                                <Button htmlType="reset" className="edit_btn" onClick={() => showPromiseConfirm(eventDetailsVal)}>
                                                    Delete
                                                </Button>
                                            </Link>
                                        </div>
                                    }>
                                        {/* <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                                            Inner Card content
                                        </Card> */}

                                        <Card style={{
                                            width: '100%',
                                        }}
                                            title="Location"

                                        >
                                            {eventDetailsVal.eventPlace}
                                        </Card>

                                        <br />
                                        <Card
                                            style={{
                                                width: '100%',
                                            }}
                                            title="Description"

                                        >
                                            {eventDetailsVal.eventDetails}
                                        </Card>

                                    </Card>
                                </Panel>

                            </Collapse><br />
                        </div>
                    ))}
            </div>
        </div>
    );

};
export default AllEvent;