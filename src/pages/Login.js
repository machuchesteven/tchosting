import React, { useState } from 'react'
import { Container, Form, Button, Tabs, Tab } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Slide } from 'react-reveal'



const LoginPage = () => {
    const [key, setKey] = useState("login")
    function Authenticate() {
        console.log("The user wants to authenticate")

    }
    function CreateAccount() {
        console.log("User want to create a new account")
    }
    return <div className="login-signup-page">
        <Container>
            <h3>Login To Enjoy all the functionalities From Techcraft Hosting Service</h3>
            <div className="login-signup-form">
                <Tabs id="login-signup-tabs"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="login" title="Have An Account">
                        <Slide left>
                            <div className="login-form">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                                <Button variant='outline-dark w-100' className="my-2 fw-b" onClick={Authenticate}>Login</Button>
                            </div>
                        </Slide>
                    </Tab>
                    <Tab eventKey="signup" title="Create A New Account" >
                        <Slide right>
                            <div className="login-form">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" />
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" />
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" />
                                <Form.Label>Enter Your Password</Form.Label>
                                <Form.Control type="password" />
                                <Form.Label>Confirm Your Password</Form.Label>
                                <Form.Control type="password" />
                                <Button variant='outline-dark w-100' className="my-2 fw-b shadow-sm" onClick={CreateAccount}>Create Account</Button>
                            </div>
                        </Slide>
                    </Tab>
                </Tabs>
            </div>
        </Container>
    </div>
}

export default LoginPage;