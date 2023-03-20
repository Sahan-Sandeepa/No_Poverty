import { useEffect, useState } from "react"
import logo from "../../assets/images/logo.png"
import { DualAxes } from '@ant-design/plots';
import { Card, Col, Row, Typography, Table } from "antd"
import { Pie } from '@ant-design/plots';
import { AppstoreTwoTone } from "@ant-design/icons"

function Home() {
    const { Title, Text } = Typography
    //   const onChange = (e) => console.log(`radio checked:${e.target.value}`);
    //   const [reverse, setReverse] = useState(false)
    //   const [sales, setSales] = useState()
      const [donation, setDonation] = useState(0)
      const [users, setUser] = useState()
      const [event, setEvent] = useState()
    const [financial, setFinancial]=useState();



    const count = [
        {
            today: "Total Users",
              title: `${users}`,
            icon: <AppstoreTwoTone />,
            bnb: "bnb2"
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
            icon: <AppstoreTwoTone />,
            bnb: "redtext"
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
    //   useEffect(() => {
    //     event.then(val => setEvent(val.length + 1))
    //      ItemService.getDeliveryItems(1, 10).then(val => setItems(val.length + 1))
    //      EmployeeService.getEmployees(1, 10).then(val =>
    //       setEmployees(val.length + 1)
    //     )
    //     StockOrderService.getOrderQty(1, 10).then(val => setOrders(val.length + 1))
    //   }, [])

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
        },
        {
            key: '2',
            name: 'John',
            age: 42,
        },
    ];

    const columns = [
        {
            title: 'Financial History',
            dataIndex: 'name',
            key: 'name',
        },

    ];

    return (
        <>
        <Col span={10}/>

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
                        <DualAxes {...config} />
                        {/* <Card>
                        <Row>
                        <div>
                            <h1>
                                Financial History
                            </h1>
                            <Table dataSource={dataSource} columns={columns} />

                        </div>
                        </Row>
                    </Card> */}
                        <Col span={4} />
                        <Card style={{ paddingLeft: 250 }}>
                            <div>
                                <Table dataSource={dataSource} columns={columns} />

                            </div>
                        </Card>


                    </Row>
                    {/* <img
          src={logo}
          alt="Logo"
          width={1000}
          style={{ padding: "200px 0" }}
        /> */}
            </div>
        </>
    )
}

export default Home
