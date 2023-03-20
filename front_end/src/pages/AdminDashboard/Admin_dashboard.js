import { useEffect, useState } from "react"
import logo from "../../assets/images/logo.png"
import { DualAxes } from '@ant-design/plots';
import { Card, Col, Row, Typography, Table, AutoComplete } from "antd"
import { AppstoreTwoTone,UserOutlined } from "@ant-design/icons"
const url = "http://localhost:4000/financial/";


function Admin() {
    const { Title, Text } = Typography
    const [donation, setDonation] = useState(0)
    const [users, setUser] = useState()
    const [event, setEvent] = useState()
    const [financial, setFinancial] = useState();
    const [items, setItems] = useState([]);
    const [totalSum, setTotalSum] = useState(0);


    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            const items = await response.json();
            setItems(items);
            console.timeLog(items);
        };
        getData()
    }, []);

    useEffect(() => {
        const total = items.reduce((acc, row) => acc + row.amount, 0);

        setTotalSum(items.total)
    }, [items]);

    const count = [
        {
            today: "Total Users",
            title: `${users}`,
            icon: <UserOutlined />,
            bnb: "bnb2",
        },
        {
            today: "Total Donation",
            title: `${donation}`,
            icon: <AppstoreTwoTone />,
            bnb: "bnb2",

        },
        {
            today: "Total Events",
            title: `${event}`,
            icon: <AppstoreTwoTone/>,
            bnb: "redtext",
            
            
        },

    ]

    const data = [
        {
            time: '2019-03',
            value: 350,
            count: 800,
        },
        {
            time: '2019-04',
            value: 900,
            count: 600,
        },
        {
            time: '2019-05',
            value: 300,
            count: 400,
        },
        {
            time: '2019-06',
            value: 450,
            count: 380,
        },
        {
            time: '2019-07',
            value: 470,
            count: 220,
        },
    ];
    const config = {
        data: [data, data],
        xField: 'time',
        yField: ['value', 'count'],
        geometryOptions: [
            {
                geometry: 'column',
            },
            {
                geometry: 'line',
                lineStyle: {
                    lineWidth: 2,
                },
            },
        ],
    };

    const columns = [
        {
            title: 'Financial History',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },

    ];
    return (
        <>
            <Col span={5} />

                <div className="layout-content" style={{ padding: "16px", paddingLeft: 25 }}>
                    <Row className="rowgap-vbox" gutter={[24, 0]}>
                        {count.map((c, index) => (
                            <Col
                                key={index}
                                xs={24}
                                sm={24}
                                md={12}
                                lg={6}
                                xl={6}
                                className="mb-24"
                            >
                                <Card bordered={false} className="criclebox ">
                                    <div className="number">
                                        <Row align="middle" gutter={[35, 7]}>
                                            <Col xs={18}>
                                                <span>{c.today}</span>
                                                <Title level={3}>
                                                    {c.title} <small className={c.bnb}></small>
                                                </Title>
                                            </Col>
                                            <Col xs={7}>
                                                <div className="icon-box">{c.icon}</div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <br></br><br></br><br></br><br></br>
                    <Row >
                        <div>
                            <DualAxes {...config} />
                        </div>
                        <Col span={4} />
                        <Card>
                            <div>
                                <Table dataSource={items} columns={columns} />
                                <Row>
                                    <Col span={12}>
                                        {/* {totalSum === null ? 'Loading...' : `Count: ${totalSum}`} */}
                                        <h3>Total Bill : {totalSum}</h3>
                                    </Col>
                                </Row>

                            </div>
                        </Card>
                    </Row>
                </div>
        </>
    )
}

export default Admin
