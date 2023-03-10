

import { Button } from "antd"
import { Layout, Menu } from "antd"
import React, { useState } from "react"
import logo from "../assets/images/logo.png"



import {
    BankTwoTone,
    UserOutlined,
    MoneyCollectFilled,
    LineChartOutlined,
    StockOutlined,
    TeamOutlined,
    ShoppingCartOutlined,
    CarFilled
} from "@ant-design/icons"
import Header_bar from "./header_bar"

const { Header, Content, Footer, Sider } = Layout


const Dashboard = props => {
    const { opennav, open } = props

    function getItem(label, key, icon) {
        return {
            key,
            label,
            icon,
            onClick: () => {
                setActiveIndex(key)
            }
        }
    }

    const items = [
        getItem("Dashboard", 0, <BankTwoTone />),
        getItem("Donation", 1, <UserOutlined />),
        getItem("Job Portal", 2, <CarFilled />),
        getItem("Event", 3, <LineChartOutlined />),
        getItem("Financial", 4, <LineChartOutlined />),

    ]

    const [collapsed, setCollapsed] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const bodyContainer = [
        // <Home />,
        // <Customer />,
        // <DeliveryOrder />,
        // <SalesOrder />,
        // <PurchaseOrder />,
        // <PurchaseRequest />,
        // <PuchaseItems />,
        // <Users />,
        // <StockOrder />
    ]

    return (
        <>
        <div>
           <Header_bar />
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={value => setCollapsed(value)
                    }

                >              

                        {/* <div className="flex">
                        <div >
                           
                            <h1
                                className={`text-white origin-left font-medium text-xl duration-200 ${!open &&
                                    "scale-0"}`}

                                style={{ color: "white",paddingLeft:20}}
                            >
                                Helping  Hands
                            </h1>
                        </div>
                    </div> */}
                        {/* <div
                        style={{
                            height: 32,
                            margin: 16,
                            

                        }}
                    > <div 
                        style={{ flexDirection: 'row', display: 'flex', margin: 1, padding: 10,paddingLeft:35 }} >
                            <img src={logo} style={{ width: 60, height: 60, color: "white" }}  />
                           
                        </div>
                    </div> */}
                        <br></br><br></br>

                        {/* <div style={{flexDirection:'row',display:'flex', margin:5, padding:5}} >
                        <img src={logo}  style={{width:80,height:80,color:"white"}} />
                    <h1 className="flex gap-x-4 items-center" style={{color:"white", padding:10}}>Helping <br></br>Hands</h1>

                    </div> */}


                        <Menu
                            theme="dark"
                            defaultSelectedKeys={["0"]}
                            mode="inline"
                            items={items}
                        />
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: "0 16px" }}>
                        {bodyContainer[activeIndex]}
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        NoPoverty System ©2023
                    </Footer>
                </Layout>
            </Layout>
            </div>
        </>
    )
}

export default Dashboard
