import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Card, Row, Breadcrumb, Layout, Col, theme } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const { Header, Content, Footer } = Layout;


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const naviagte = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    async function sendLogin(e) {
        e.preventDefault();

        // get values

        const UserSchema = {
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                body: JSON.stringify(UserSchema),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                // Handle successful signup
                console.log('Signup successful!');
                naviagte('/dashboard')

                const data = await response.json();
                if (data.errors) {
                    console.log("Error" + email.errors)
                }
                if (data.user) {
                    // location.assign('/dashboard');
                }
            } else {
                // Handle signup error
                console.log('Signup failed. Please try again.');
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (

        <>

            <Layout className="layout">
                {/* <Header className="header">
                    <div className="logo" />
                    <h1 className="heading">No Poverty</h1>
                </Header> */}
                <div className='login' style={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Card style={{ width: 500 }}>
                        <Form
                            name="login-form"
                        >
                            <h1 style={{ textAlign: 'center' }}>!!!No Poverty!!!</h1>
                            <Row>
                            <Col span={3} />
                            <Col span={17}>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'Please enter a valid email!',
                                    },
                                ]}
                            >
                                <Input onChange={(val) => {
                                    setEmail(val.target.value);

                                }} />
                            </Form.Item>
                            </Col>
                            </Row>
                            
                            <Row>
                            <Col span={3} />
                            <Col span={17}>
                            <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password onChange={(val) => {
                                        setPassword(val.target.value);

                                    }} />
                                </Form.Item>
                            </Col>

                                
                            </Row>


                            <Row>
                                <Col span={10} />

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" onClick={sendLogin}>
                                        Log In
                                    </Button>
                                </Form.Item>

                            </Row>


                        </Form>
                    </Card>
                </div>

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    No Poverty Design ©2023 Created by Team 48
                </Footer>
            </Layout>


        </>

    );
};


export default Login