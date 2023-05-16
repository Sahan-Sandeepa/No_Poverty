

import { Button } from "antd"
import { Layout, Menu } from "antd"
import React, { useState } from "react"

import {
    BankTwoTone,
    UserOutlined,
    LineChartOutlined,
    CarFilled
} from "@ant-design/icons"
import Header_bar from "../../components/common/header_bar"
import JobList from "../../components/JobPortal/JobList"
import AdsUserView from "../../components/DonationAdmin/AdsUserView"
import Home from "../Home/Home"


const { Header, Content, Footer, Sider } = Layout


const UserDashboard = props => {
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
        getItem("Events", 3, <LineChartOutlined />),
        


    ]

    const [collapsed, setCollapsed] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const bodyContainer = [

        // <UserDashboard />,
        <Home/>,
        <AdsUserView/>,
        <JobList />,
        // <Events />,
        // <Financial />,

    ]

    return (
        <>
            <div>
                <Header_bar />
                <Layout style={{ minHeight: "180vh" }}>
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={value => setCollapsed(value)
                        }

                    >

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

export default UserDashboard
