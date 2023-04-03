import axios from "axios";
import { Link } from "react-router-dom";
import { ClockCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import WrapperCard from "../../common/Wrapper_card";
import CustomRow from "../../common/Form_header";
import { Badge, Card, Collapse, Space, Switch } from "antd";

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

    const { Panel } = Collapse;

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;

    const onChange = (key) => {
        console.log(key);
    };

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
                        <div className="form">

                            <Collapse accordion>
                                <Panel header={
                                    <Space>
                                        <Badge
                                            className="site-badge-count-109"
                                            count={eventDetailsVal.eventNo}
                                            style={{
                                                backgroundColor: 'volcano',
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
                                            }}
                                        />
                                    </Space>
                                } key="1">

                                    <Card title="Card title">
                                        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                                            Inner Card content
                                        </Card>
                                        <Card
                                            style={{
                                                marginTop: 16,
                                            }}
                                            type="inner"
                                            title="Inner Card title"
                                            extra={<a href="#">More</a>}
                                        >
                                            Inner Card content
                                        </Card>
                                    </Card>

                                    <p>{text}</p>
                                </Panel>

                            </Collapse>

                            {/* ========================================================================================================================================================== */}

                            <Collapse accordion>
                                <Panel header="This is panel header with arrow icon" key="2">

                                    <Card title="Card title">
                                        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                                            Inner Card content
                                        </Card>
                                        <Card
                                            style={{
                                                marginTop: 16,
                                            }}
                                            type="inner"
                                            title="Inner Card title"
                                            extra={<a href="#">More</a>}
                                        >
                                            Inner Card content
                                        </Card>
                                    </Card>

                                    <p>{text}</p>
                                </Panel>

                            </Collapse>



                            <Collapse accordion>
                                <Panel header="This is panel header with arrow icon" key="3">

                                    <Card title="Card title">
                                        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                                            Inner Card content
                                        </Card>
                                        <Card
                                            style={{
                                                marginTop: 16,
                                            }}
                                            type="inner"
                                            title="Inner Card title"
                                            extra={<a href="#">More</a>}
                                        >
                                            Inner Card content
                                        </Card>
                                    </Card>

                                    <p>{text}</p>
                                </Panel>

                            </Collapse>


                            <Collapse accordion>
                                <Panel header="This is panel header with arrow icon" key="4">

                                    <Card title="Card title">
                                        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                                            Inner Card content
                                        </Card>
                                        <Card
                                            style={{
                                                marginTop: 16,
                                            }}
                                            type="inner"
                                            title="Inner Card title"
                                            extra={<a href="#">More</a>}
                                        >
                                            Inner Card content
                                        </Card>
                                    </Card>

                                    <p>{text}</p>
                                </Panel>

                            </Collapse>
                        </div>
                    ))}
            </div>
        </div>
    );

};
export default AllEvent;