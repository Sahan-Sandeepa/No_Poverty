import { AutoComplete, Breadcrumb, Layout, Menu, theme,Dropdown ,Col } from 'antd';
import logo from "../../assets/images/logo2.png"
import '../../assets/styles/style.css'
import user from "../../assets/images/profile.png"
import DropdownButton from 'antd/es/dropdown/dropdown-button';
import {AlignCenterOutlined, DownOutlined,UserOutlined  } from '@ant-design/icons'
import '../../assets/styles/header.css'



const { Header, Content, Footer } = Layout;

const Header_bar = props => {
    const { opennav, open } = props

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
    return (

        <Layout>
            <Header className="site-layout-background" style={{ justifyContent: "space-between" }}>
                <img src={logo} alt="Logo" width={50} />
                <Col span={10}/>

                <h1 style={{ color: "white" }}>HelpingHands</h1>
                <Col span={10}/>
                <Dropdown.Button
                    style={{ float: 'right' }}
                    className="dropdown-btn"
                    overlay={userMenu}
                    icon={
                        <UserOutlined
                            style={{
                                fontSize: '26px',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '50%',
                                color:"Red"
                                
                            }}
                        />
                    }
                ></Dropdown.Button>
                {/* <img src={user} width={50} >
                        
                    </img> */}

            </Header>
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={""}
                />
                {/* </Header> */}
            </div>
        </Layout>
    );
};
export default Header_bar;