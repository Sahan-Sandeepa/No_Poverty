import {
  AutoComplete,
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Dropdown,
  Col,
  Row,
} from "antd";
import logo from "../../assets/images/logo2.png";
import "../../assets/styles/style.css";
import user from "../../assets/images/profile.png";
import DropdownButton from "antd/es/dropdown/dropdown-button";
import {
  AlignCenterOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../../assets/styles/header.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const userName = "John Doe"; // Replace this with the actual user's name

const Header_bar = (props) => {
  const { opennav, open } = props;
  const [name, setName] = useState(""); // State to hold the username
const id =useParams();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Setting</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );
  useEffect(() => {
    // Fetch the username from the API
    axios.get("http://localhost:4000/regiUser/" +id).then(response => {
      const data = response.data; // Assuming the username is in the response data
      setName(data.name);
    }).catch(error => {
      console.log("Error fetching username:", error);
    });
  }, []);

  return (
    <Layout>
      <Header
        className="site-layout-background"
        style={{ justifyContent: "space-between" }}
      >
        <Row
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Col>
            <img
              src={logo}
              alt="Logo"
              width={50}
              style={{ marginTop: "30px" }}
            />
          </Col>
          <Col>
            <h1 style={{ color: "white" }}>HelpingHands</h1>
          </Col>
          {/* Render the user's name */}
          <div style={{ textAlign: "right", padding: "16px", color: "white" }}>
            Welcome, {name}
          </div>
          {/* <Col>
            <Dropdown.Button
              className="dropdown-btn"
              overlay={userMenu}
              icon={
                <UserOutlined
                  style={{
                    fontSize: "26px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%",
                    color: "Red",
                  }}
                />
              }
            ></Dropdown.Button>
          </Col> */}
        </Row>
      </Header>
      <div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={""}
        />
        {/* </Header> */}
      </div>
    </Layout>
  );
};
export default Header_bar;
