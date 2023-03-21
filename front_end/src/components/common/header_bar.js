import { AutoComplete, Breadcrumb, Layout, Menu, theme } from 'antd';
import logo from "../../assets/images/logo2.png"
import '../../assets/styles/style.css'
import user from "../../assets/images/profile.png"
import DropdownButton from 'antd/es/dropdown/dropdown-button';



const { Header, Content, Footer } = Layout;

const Header_bar = props => {
    const { opennav, open } = props

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (

        <Layout>
            {/* <Header className="site-layout-background" style={{ justifyContent: "space-between" }}>
            <div
                    style={{flexDirection:'row',display:'flex', margin:1, padding:5}} >
                        <img src={logo}  style={{width:80,height:80,color:"white"}} />
                        <div style={{paddingLeft:25}}>
                    <h1 className="flex gap-x-4 items-center" style={{color:"white"}}>Helping Hands</h1>
                    </div>
                    <div style={{alignItems:"center", alignSelf:"center"}}>
                    <img src={user} style={{ width: 60, height: 60, color: "white" }}  />

                    </div>

                    </div>

            </Header> */}

            <Header className="site-layout-background" style={{ justifyContent: "space-between" }}>
                <img src={logo} alt="Logo" width={50} />
                <h1 style={{color:"white"}}>Helping Hands</h1>
                <img src={user} width={50}
                
                />
            </Header>
            <div>
                {/* <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',


                    }}
                > */}

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