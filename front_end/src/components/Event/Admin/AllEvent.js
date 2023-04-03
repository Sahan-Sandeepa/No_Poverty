import axios from "axios";
import { Link } from "react-router-dom";
import { ClockCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import WrapperCard from "../../common/Wrapper_card";
import CustomRow from "../../common/Form_header";
import { Badge, Button, Card, Col, Collapse, Row, Space, Switch, Table } from "antd";

// import "../../Event/eventMain.css";

const tabList = [
    {
        key: 'Place',
        tab: 'Place',
    },
    {
        key: 'Description',
        tab: 'Description',
    },
];

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
                    <div className="cus_row">
                        <CustomRow has context menu >
                            <h1>main event</h1>
                        </CustomRow>
                    </div>
                </WrapperCard>

                <section className="main_addbtn-controller">
                    <Button htmlType="submit" className="" >
                        Add
                    </Button>
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

                                    <Card title={eventDetailsVal.eventName} extra={
                                        <section className="main_btn-controller">
                                            <Button htmlType="submit" className="" >
                                                Edit
                                            </Button>

                                            <Button htmlType="reset" className="">
                                                Print
                                            </Button>

                                            <Button htmlType="reset" className="">
                                                Delete
                                            </Button>
                                        </section>
                                    }>
                                        {/* <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                                            Inner Card content
                                        </Card> */}

                                        <Card style={{
                                            width: '100%',
                                        }}
                                            tabList={tabList}
                                            activeTabKey={activeTabKey1}
                                            onTabChange={onTab1Change}
                                        >
                                            {eventDetailsVal.eventDetails[activeTabKey1]}
                                        </Card>

                                    </Card>
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
                                </Panel>

                            </Collapse>
                        </div>
                    ))}
            </div>
        </div>
    );

};
export default AllEvent;